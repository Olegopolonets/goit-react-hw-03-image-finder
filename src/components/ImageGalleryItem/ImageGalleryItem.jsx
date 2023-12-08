import React from 'react';
import { Card, CardImage } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({ webformatURL, type }) => {
  return (
    <>
      <Card>
        <CardImage src={webformatURL} alt={type} />
      </Card>
    </>
  );
};
