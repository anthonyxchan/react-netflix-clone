import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";

const image_base_url = "https://image.tmdb.org/t/p/original/";

const BannerHeader = styled.header`
  background-image: ${(props) =>
    `url(${image_base_url}${props?.movie_backdrop_path})`};
  background-position: center center;
  background-size: cover;
  color: white;
  object-fit: contain;
  position: relative;
  height: 500px;
`;

const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div``;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
    transform: scale(1.08);
  }
`;

const BannerDescription = styled.h1`
  width: 20rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
`;

const FadeBottom = styled.div`
  height: 11.5rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    black
  );
`;

function truncate(str, n) {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.table(request);

      var isMovieValid = false;

      while (!isMovieValid) {
        var random_movie = get_random_movie(request);
        if (random_movie?.backdrop_path) {
          isMovieValid = true;
          setMovie(random_movie);
          return true;
        } else {
          isMovieValid = false;
        }
      }
      return request;
    }

    function get_random_movie(request) {
      return request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ];
    }

    fetchData();
  }, []);

  console.log(movie);

  return (
    <BannerHeader movie_backdrop_path={movie?.backdrop_path}>
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>

        <BannerButtons>
          <Button>Play</Button>
          <Button>My List</Button>
        </BannerButtons>
        <BannerDescription>{truncate(movie?.overview, 300)}</BannerDescription>
      </BannerContent>
      <FadeBottom />
    </BannerHeader>
  );
}

export default Banner;
