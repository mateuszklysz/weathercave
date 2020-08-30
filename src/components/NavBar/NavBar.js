import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Language from "../Language/Language";

const StyledContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme: { color } }) => color.cloudy};
`;

const NavBar = () => {
  return (
    <>
      <StyledContainer>
        <Logo />
        <SearchBar />
        <Language />
      </StyledContainer>
    </>
  );
};

export default NavBar;
