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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
getTrendingMovies();
