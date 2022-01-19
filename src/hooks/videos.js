/* eslint-disable handle-callback-err */
import {useState} from 'react';

const URL_GET_VIDEOS =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVideos = () => {
    setLoading(true);
    fetch(URL_GET_VIDEOS, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data, 'data');
          setVideos(data?.results);
        });
      })
      .catch(function (err) {
        setLoading(false);
      });
  };

  return {
    getVideos,
    videos,
    loading,
  };
};
