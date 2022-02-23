import React from "react";
import { Link } from "react-router-dom";
import { Content, StyledContainer, Wrap } from "./ContentCards.styled";

function ContentCards({ section, movies }) {
  return (
    <StyledContainer>
      <h4>{section}</h4>
      <Content>
        {movies &&
          movies.map((movie, index) => (
            <Wrap key={index}>
              {movie.id}
              <Link to={`/detail/${movie.type}/${index}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </StyledContainer>
  );
}

export default ContentCards;
