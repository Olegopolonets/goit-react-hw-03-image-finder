import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Conteiner } from './Container/Conteiner';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'components/Services/api';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    imagesData: [],
    page: 1,
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const images = await fetchImages({ per_page: 12 });
      console.log(images);
      this.setState({ imagesData: [...images] });
    } catch (error) {
      console.error();
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      try {
        this.setState({ loading: true });
        const [...images] = await fetchImages({
          per_page: 12,
          page: this.state.page,
        });
        console.log(images);
        this.setState({ imagesData: [...prevState.imagesData, ...images] });
      } catch (error) {
        console.error();
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 12 }));
  };
  render() {
    return (
      <div>
        <Searchbar />
        <Conteiner>
          <ImageGallery imagesData={this.state.imagesData} />
          {this.state.loading === true ? <Loader /> : null}
          <Button click={this.handleLoadMore} />
        </Conteiner>
      </div>
    );
  }
}
