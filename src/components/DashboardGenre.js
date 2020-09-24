import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled, { css } from "styled-components";
import Youtube from "react-youtube";

const image_base_url = "https://image.tmdb.org/t/p/original/";

const AllRow = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  color: white;
`;

const ImageRow = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  /* add padding to show full image transform */
  padding: 20px;

  /* hide the scroll bar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieThumbnail = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 100px;
  /* apply delay to image transform when image being hovered */
  transition: transform 450ms;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }

  /* conditional rendering, if it is featured row, 
  poster image will be talled and scale transform is larger */
  ${({ isFeaturedRow }) =>
    isFeaturedRow &&
    css`
      max-height: 250px;
      padding: 5px;
      &:hover {
        transform: scale(1.15);
      }
    `}
`;

function DashboardGenre(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //if [], run once when the row load and dont run again
    // have to include props.fetchUrl as it is a dependency, so when fetchUrl change it will rerender
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <AllRow>
      <h2 style={{ marginLeft: "20px" }}>{props.title}</h2>
      <ImageRow>
        {movies.map((movie) => (
          <MovieThumbnail
            // Keys help React identify which items have changed and increase performance
            key={movie.id}
            src={`${image_base_url}${
              props.isFeaturedRow ? movie.poster_path : movie.backdrop_path
            }`}
            // need to pass in isFeaturedRow so styledComponents could pick up different css
            isFeaturedRow={props.isFeaturedRow}
            alt={movie.name}
          />
        ))}
      </ImageRow>
    </AllRow>
  );
}

export default DashboardGenre;
