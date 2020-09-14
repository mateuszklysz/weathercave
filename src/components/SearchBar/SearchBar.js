import React, { useState } from "react";
import { navigate } from "gatsby";
import { SearchContainer } from "./SearchBar.styles";

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
