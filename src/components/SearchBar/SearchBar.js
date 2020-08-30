import React from "react";
import styled from "styled-components";

const SearchContainer = styled.input`
  width: 450px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: ${({ theme: { color } }) => color.dark};
  font-size: ${({ theme: { size } }) => size.s};
  text-align: center;
  outline: none;
`;

const SearchBar = () => {
  return (
    <>
      <SearchContainer placeholder="Search city" />
    </>
  );
};

export default SearchBar;
