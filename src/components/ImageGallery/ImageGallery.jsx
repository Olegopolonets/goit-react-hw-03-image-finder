import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'components/Services/api';
import React from 'react';
import { CardsList } from './ImageGalleryStuled';
import { Button } from 'components/Button/Button';

export class ImageGallery extends React.Component {
  state = {
    images: [],
    loading: false,
  };
  async componentDidMount() {
    const images = await fetchImages();
    console.log(images);
    this.setState({ images: [...images] });
  }

  render() {
    return (
      <div>
        <CardsList>
          {this.state.images.map(item => {
            return <ImageGalleryItem key={item.id} {...item} />;
          })}
        </CardsList>
        <Button />
      </div>
    );
  }
}
