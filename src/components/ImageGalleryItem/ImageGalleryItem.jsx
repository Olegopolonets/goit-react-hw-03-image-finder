import React from 'react';

export const ImageGalleryItem = ({ webformatURL, type }) => {
  return (
    <div>
      <li className="gallery-item">
        <img src={webformatURL} alt={type} />
      </li>
    </div>
  );
};
