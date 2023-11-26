import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY1NjY4NTgxZDM2MDViNjI3YmJkNTA1M2MwZjc4YiIsInN1YiI6IjY1NjFmM2QyN2RmZGE2NTkzMTc0NGM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mJ_NpdJlCksB6aHfkEKZ1GCpPJcq2S1fKYHXkm3OMn0';

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await authAxios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  );

  return data;
};

export const getMovie = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );

  return data;
};

export const getCast = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  return data.cast;
};

export const getReview = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  );

  return data.results;
};

export const getMovieSearch = async movieName => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}`
  );

  return data.results;
};
