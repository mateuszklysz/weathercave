import React from "react";
import { Container } from "./NavBar.styles";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Language from "../Language/Language";

const NavBar = () => {
  return (
    <Container>
      <Logo />
      <SearchBar />
      <Language />
    </Container>
  );
};

export default NavBar;
