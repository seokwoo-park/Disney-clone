import React from "react";
import { Login, ItemWrapper, Logo, Nav, NavMenu } from "./Header.styled";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src={"/images/logo.svg"} alt="Disney+ logo" />
      </Logo>
      <NavMenu>
        <ItemWrapper>
          <img src={"/images/home-icon.svg"} alt="home icon" />
          <span>HOME</span>
        </ItemWrapper>
        <ItemWrapper>
          <img src={"/images/search-icon.svg"} alt="search icon" />
          <span>SEARCH</span>
        </ItemWrapper>
        <ItemWrapper>
          <img src={"/images/watchlist-icon.svg"} alt="watch-list icon" />
          <span>WATCHLIST</span>
        </ItemWrapper>
        <ItemWrapper>
          <img src={"/images/original-icon.svg"} alt="original icon" />
          <span>ORIGINALS</span>
        </ItemWrapper>
        <ItemWrapper>
          <img src={"/images/movie-icon.svg"} alt="movies icon" />
          <span>MOVIES</span>
        </ItemWrapper>
        <ItemWrapper>
          <img src={"/images/series-icon.svg"} alt="series icon" />
          <span>SERIES</span>
        </ItemWrapper>

        <Login>Login</Login>
      </NavMenu>
    </Nav>
  );
};

export default Header;
