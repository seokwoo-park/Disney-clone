import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import {
  Login,
  ItemWrapper,
  Logo,
  Nav,
  NavMenu,
  UserImg,
} from "./Header.styled";
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
  setUserLoginDetails,
} from "../../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => alert(error));
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src={"/images/logo.svg"} alt="Disney+ logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
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
          </NavMenu>
          <UserImg src={userPhoto} />
        </>
      )}
    </Nav>
  );
};

export default Header;
