/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useVideos} from '../../hooks/videos';
import moment from 'moment';
import SearchComponent from '../../components/search';

const initialFilters = {page: 1, query: '', per_page: 20};

const formatDate = date => moment(date).format('DD-MM-YYYY');

const Home = () => {
  const {getVideos, getSearchVideo, totalPages, totalResults, videos, loading} =
    useVideos();

  const [filters, setFilters] = useState(initialFilters);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (filters?.query !== '') {
      getSearchVideo({filters});
    } else {
      getVideos({filters});
    }
  }, [filters]);

  const getMore = () => {
    if (loading === true) {
      return;
    }

    let nextPage = filters?.page + 1;
    if (filters?.page < totalPages) {
      setFilters(fil => ({...fil, page: nextPage}));
    }
  };

  const handleSearch = query => {
    setFilters(fil => ({...fil, page: 1, query}));
  };

  const handleCancel = () => {
    setFilters(fil => ({...fil, page: 1, query: ''}));
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.home_container}>
        <Text style={styles.title}>Lista de Lançamentos</Text>
        <SearchComponent
          handleCancel={handleCancel}
          handleSearch={handleSearch}
          value={filters?.query}
        />
      </View>
      {!loading && totalResults === 0 && (
        <View style={styles.empty_state}>
          <Text style={styles.text_empty_state}>
            Sem resultados encontrados!
          </Text>
        </View>
      )}
      <FlatList
        onEndReached={getMore}
        onEndReachedThreshold={0.7}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setFilters(initialFilters);
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container_flat_list}
        data={videos}
        renderItem={({item, index}) => (
          <CardMovie
            item={item}
            index={index}
            setOpenModal={setOpenModal}
            setSelectedMovie={setSelectedMovie}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <ModalMovie
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedMovie={selectedMovie}
      />
    </SafeAreaView>
  );
};

const CardMovie = ({item, index, setOpenModal, setSelectedMovie}) => {
  return (
    <TouchableOpacity
      style={styles.card_movie}
      key={index}
      onPress={() => {
        setSelectedMovie(item);
        setOpenModal(true);
      }}>
      <View style={styles.container_card}>
        <View style={styles.first_container}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.title_movie}>
            {item?.title}
          </Text>
          <Text style={styles.release_date}>
            {`Lançamento: ${formatDate(item?.release_date)}`}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={4} style={styles.overview}>
            {item?.overview}
          </Text>
        </View>
        <Image
          resizeMode="contain"
          style={styles.image_movie}
          source={{uri: `http://image.tmdb.org/t/p/w185${item?.poster_path}`}}
        />
      </View>
    </TouchableOpacity>
  );
};

const ModalMovie = ({openModal, setOpenModal, selectedMovie}) => {
  return (
    <View>
      <Modal transparent visible={openModal} animationType="slide">
        <View activeOpacity={1} style={styles.overlay_modal}>
          <View style={styles.video_box}>
            <TouchableOpacity
              style={styles.close_modal}
              onPress={() => setOpenModal(false)}>
              <Text>X Fechar</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.movie_modal_container}>
                <Image
                  resizeMode="contain"
                  style={styles.image_movie_modal}
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185${selectedMovie?.poster_path}`,
                  }}
                />
                <Text style={styles.title_movie_modal}>
                  {selectedMovie?.title}
                </Text>
                <Text style={styles.release_date_modal}>
                  {`Lançamento: ${formatDate(selectedMovie?.release_date)}`}
                </Text>
                <Text style={styles.overview_modal}>
                  {selectedMovie?.overview}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
