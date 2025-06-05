const API_KEY = 'c6207438a2c5d8ee1b2d5c1eaae3acb0';
const BASE_URL = 'https://api.themoviedb.org/3';  // Corregido

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
