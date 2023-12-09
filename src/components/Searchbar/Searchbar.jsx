import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BtnSearch, FormSearch, Header, InputSearch } from './SearchbarStyled';

export const Searchbar = () => {
  return (
    <Header className="searchbar">
      <FormSearch className="form">
        <BtnSearch type="submit" className="button">
          <FaSearch
            size={40}
            onMouseOver={({ target }) => (target.style.color = 'white')}
            onMouseOut={({ target }) => (target.style.color = 'black')}
          />
        </BtnSearch>

        <InputSearch
          className="input"
          type="text"
          placeholder="Search images and photos"
        />
      </FormSearch>
    </Header>
  );
};

// onMouseOver={({ target }) => (target.style.color = 'white')}
// onMouseOut={({ target }) => (target.style.color = 'black')}
