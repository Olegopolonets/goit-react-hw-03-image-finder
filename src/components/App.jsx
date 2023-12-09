import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Conteiner } from './Container/Conteiner';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <div>
        <Searchbar />
        <Conteiner>
          <ImageGallery />
          {this.state.loading === true ? <Loader /> : null}
        </Conteiner>
      </div>
    );
  }
}
