/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {useVideos} from '../../hooks/videos';

const Home = () => {
  const {getVideos, videos, loading} = useVideos();

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.home_container}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
