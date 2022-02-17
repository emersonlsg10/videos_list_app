/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useVideos} from '../../hooks/videos';
import {styles} from './styles';
import moment from 'moment';

const Home = () => {
  const {getVideos, loading, videos} = useVideos();

  const [filters, setFilters] = useState({
    page: 1,
  });

  useEffect(() => {
    getVideos(filters);
  }, [filters]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = item => {
    setSelectedMovie(item);
    setModalVisible(true);
  };

  const formatDate = date => moment(date).format('DD-MM-YYYY');

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size={50} color="primary" />
      </View>
    );
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {videos.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleClick(item)}
            style={styles.card}
            key={index}>
            <View style={styles.left}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{formatDate(item.release_date)}</Text>
              <Text numberOfLines={3} style={styles.overview}>
                {item.overview}
              </Text>
            </View>
            <View style={styles.right}>
              <Image
                resizeMode="contain"
                style={styles.image_movie}
                source={{
                  uri: `http://image.tmdb.org/t/p/w185${item?.poster_path}`,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{selectedMovie?.title}</Text>
              <Image
                resizeMode="contain"
                style={styles.image_movie}
                source={{
                  uri: `http://image.tmdb.org/t/p/w185${selectedMovie?.poster_path}`,
                }}
              />
              <Text style={styles.date}>
                {formatDate(selectedMovie?.release_date)}
              </Text>
              <Text style={styles.overview}>{selectedMovie?.overview}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Home;
