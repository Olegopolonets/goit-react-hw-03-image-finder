import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Conteiner } from './Container/Conteiner';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        {/* <Conteiner> */}
        <ImageGallery />
      </div>
    );
  }
}
