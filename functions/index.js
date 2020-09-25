const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const secret = functions.config().tmdb.key;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${secret}&language=en-US"`,
  fetchNetflixOriginals: `/discover/tv?api_key=${secret}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${secret}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${secret}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${secret}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${secret}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${secret}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${secret}&with_genres=99`,
  fetchCrimeMovies: `/discover/movie?api_key=${secret}&with_genres=80`,
  fetchSciFiMovies: `/discover/movie?api_key=${secret}&with_genres=878`,
};

export default requests;
