import React, { useState } from "react";
import { navigate } from "gatsby";
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

const SearchBar = ({ setEnter }) => {
  const [input, setInput] = useState("");

  const handeInputValue = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setEnter(false);
    setTimeout(() => {
      navigate(`/weather/${input.toLowerCase()}`);
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchContainer
          type="input"
          placeholder="Search city"
          value={input}
          onChange={handeInputValue}
        />
      </form>
    </>
  );
};

export default SearchBar;
