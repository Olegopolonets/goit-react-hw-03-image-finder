import React from 'react';
import { ConteinerDiv } from './ConteinerStyled';

export const Conteiner = ({ title, children }) => {
  return (
    <>
      <ConteinerDiv>{children}</ConteinerDiv>
    </>
  );
};
