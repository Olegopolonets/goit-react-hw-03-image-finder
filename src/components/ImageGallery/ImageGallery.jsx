import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from 'components/Services/api';
import React from 'react';

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
        <ul>
          {this.state.images.map(item => {
            return <ImageGalleryItem key={item.id} {...item} />;
          })}
        </ul>
        <button>Load more</button>
      </div>
    );
  }
}
