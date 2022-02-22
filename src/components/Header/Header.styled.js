import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  padding: 0 3em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  letter-spacing: 16px;
  z-index: 3;
`;

export const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.6em;

  cursor: pointer;

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
  }
  span {
    color: rgba(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0;
    white-space: nowrap;
    position: relative;

    &:before {
      content: "";
      background-color: rgba(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      right: 0px;
      left: 0px;
      height: 2px;
      opacity: 0;
      position: absolute;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }
`;

export const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  color: #f9f9f9;
  padding: 0.5em 1em;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 3em;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 0.6em;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
