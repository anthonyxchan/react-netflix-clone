const functions = require("firebase-functions");

functions.config().tmdb.key;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${
    functions.config().tmdb.key
  }&language=en-US"`,
  fetchNetflixOriginals: `/discover/tv?api_key=${
    functions.config().tmdb.key
  }&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${
    functions.config().tmdb.key
  }&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=99`,
  fetchCrimeMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=80`,
  fetchSciFiMovies: `/discover/movie?api_key=${
    functions.config().tmdb.key
  }&with_genres=878`,
};

export default requests;
