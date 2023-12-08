import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BtnSearch, FormSearch, Header, InputSearch } from './SearchbarStyled';

export const Searchbar = () => {
  return (
    <Header className="searchbar">
      <FormSearch className="form">
        <BtnSearch type="submit" className="button">
          <FaSearch size={40} />
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
