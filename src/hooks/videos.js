/* eslint-disable handle-callback-err */
import {useState} from 'react';

const API_KEY = 'fe65f8e840e15d06c5c00bf13084da74';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const getSearchVideo = ({filters}) => {
    setLoading(true);

    const URL_GET_VIDEOS = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=${filters?.page}&query=${filters?.query}`;

    fetch(URL_GET_VIDEOS, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          if (filters?.page === 1) {
            setVideos(data?.results);
          } else if (filters?.page > 1 && videos.length > 0) {
            setVideos([...videos, ...data?.results]);
          }
          setTotalPages(data?.total_pages);
          setTotalResults(data?.total_results);
          setLoading(false);
        });
      })
      .catch(function (err) {
        setLoading(false);
      });
  };

  const getVideos = filters => {
    setLoading(true);

    const URL_GET_VIDEOS = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${filters?.page}`;

    fetch(URL_GET_VIDEOS, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          if (filters?.page === 1) {
            setVideos(data?.results);
          } else if (filters?.page > 1 && videos.length > 0) {
            setVideos([...videos, ...data?.results]);
          }
          setTotalPages(data?.total_pages);
          setTotalResults(data?.total_results);
          setLoading(false);
        });
      })
      .catch(function (err) {
        setLoading(false);
      });
  };

  return {
    getVideos,
    getSearchVideo,
    totalPages,
    totalResults,
    videos,
    loading,
  };
};
