import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import media from "../../utils/media";

const SearchContainer = styled.input`
  width: 450px;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: ${({ theme: { color } }) => color.dark};
  font-size: ${({ theme: { size } }) => size.s};
  -webkit-user-select: text;
  text-align: center;
  outline: none;
  ${media.phone`
    width: 320px;
  `}
  ${media.ip4`
    width: 250px;
  `}
`;

const SearchBar = ({ setEnter }) => {
  const [input, setInput] = useState("");

  const handeInputValue = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (setEnter) {
      setEnter(false);
    }
    setInput("");
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
