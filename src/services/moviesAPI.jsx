import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';
// const URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1&language=en-US`;

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

export async function getSearchMovies(name, page) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      query: name,
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/search/movie?page=${page}`, {
      params,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// getSearchMovies('avatar', 1);

export async function getMovieDetails(movie_id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}?`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieDetails(id);

export async function getMovieCast(movie_id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}/credits?`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieCast(id);

export async function getMovieReviews(movie_id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}/reviews?`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// const id = 447365;
// getMovieReviews(id);
