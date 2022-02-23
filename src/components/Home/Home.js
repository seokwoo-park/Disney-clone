import React, { useEffect, useState } from "react";
import { Container } from "./Home.styled";
import ImgSlider from "./ImgSlider/ImgSlider";
import Viewers from "./Viewers/Viewers";
import ContentCards from "./ContentCards/ContentCards";
import { useDispatch, useSelector } from "react-redux";
import { selectRecommend, setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import { moviesData } from "../../data/disneyPlusMoviesData";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const { recommend, newDisney, original, trending } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    moviesData.map((movie, index) => {
      switch (movie.type) {
        case "recommend":
          recommends.push(movie);
          break;
        case "newDisney":
          newDisneys.push(movie);
          break;
        case "original":
          originals.push(movie);
          break;
        case "trending":
          trending.push(movie);
          break;
      }
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <ContentCards section="Recommends for You" movies={recommend} />
      <ContentCards section="New to Disney+" movies={newDisney} />
      <ContentCards section="Originals" movies={original} />
      <ContentCards section="Trending" movies={trending} />
    </Container>
  );
}

export default Home;
