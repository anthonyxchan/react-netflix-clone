import React from "react";
import "./App.css";
import DashboardGenre from "./components/DashboardGenre";
// import requests from "./requests";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <DashboardGenre
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        // true will return poster and false will return thumbnail images
        isFeaturedRow={true}
      />
      <DashboardGenre title="Trending Now" fetchUrl={requests.fetchTrending} />
      <DashboardGenre title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <DashboardGenre
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <DashboardGenre title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <DashboardGenre
        title="Horror Night"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <DashboardGenre
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanticMovies}
      />
      <DashboardGenre
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      <DashboardGenre
        title="Crime Movies"
        fetchUrl={requests.fetchCrimeMovies}
      />
      <DashboardGenre
        title="Science Fiction Movies"
        fetchUrl={requests.fetchSciFiMovies}
      />
    </div>
  );
}

export default App;
