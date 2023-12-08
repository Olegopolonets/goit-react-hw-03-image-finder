import React from 'react';
import { Card } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({ webformatURL, type }) => {
  return (
    <>
      <Card className="gallery-item">
        <img src={webformatURL} alt={type} />
      </Card>
    </>
  );
};
