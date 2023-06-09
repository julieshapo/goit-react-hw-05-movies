import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

export async function getTrendingMovies(page = 1) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?page=${page}`,
      { params }
    );
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
// getTrendingMovies();

export async function getMoviesBySearch(name) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      query: name,
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/search/movie?`, {
      params,
    });
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

// getMoviesBySearch('cat');

export async function getMovieDetails(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}?`, {
      params,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieDetails(id);

export async function getMovieCast(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?`, {
      params,
    });
    // console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieCast(id);

export async function getMovieReviews(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?`, {
      params,
    });
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieReviews(id);
