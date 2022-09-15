import React from "react";

import { FormContainer, SearchInput } from "./style";

const SearchContainer = ({ searchAudiovisuals }) => {
  const handleChange = (event) => {
    searchAudiovisuals(event.target.value);
  };

  return (
    <FormContainer>
      <SearchInput
        onChange={handleChange}
        type="search"
        placeholder="Título, personaje o género"
      />
    </FormContainer>
  );
};

export default SearchContainer;
