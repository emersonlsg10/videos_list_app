/* eslint-disable handle-callback-err */
import {useState} from 'react';

const API_KEY = 'fe65f8e840e15d06c5c00bf13084da74';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const getSearchVideo = async filters => {
    try {
      setLoading(true);
      const URL_GET_VIDEOS = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=${filters?.page}&query=${filters?.query}`;

      let response = await fetch(URL_GET_VIDEOS);

      response = await response.json();

      setTotalPages(response?.total_pages);
      setTotalResults(response?.total_results);
      setVideos(response?.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getVideos = async filters => {
    try {
      setLoading(true);
      const URL_GET_VIDEOS = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=${filters?.page}`;

      let response = await fetch(URL_GET_VIDEOS);

      response = await response.json();

      setTotalPages(response?.total_pages);
      setTotalResults(response?.total_results);
      setVideos(response?.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
