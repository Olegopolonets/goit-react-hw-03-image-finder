import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Conteiner } from './Container/Conteiner';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'components/Services/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    imagesData: [],
    page: 1,
    loading: false,
    total: 0,
    modalImageUrl: '',
    isModalOpen: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const images = await fetchImages({ per_page: 12 });
      console.log(images);
      this.setState({ imagesData: [...images], total: 55 });
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
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  /* */
  openModal = imgUrl => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalImageUrl: imgUrl,
    }));
  };

  closeModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  /* */
  render() {
    return (
      <div>
        <Searchbar />
        <Conteiner>
          <ImageGallery
            imagesData={this.state.imagesData}
            openModal={this.openModal}
          />
          {this.state.loading === true ? <Loader /> : null}
          {this.state.total > this.state.imagesData.length ? (
            <Button click={this.handleLoadMore} />
          ) : null}
          {this.state.isModalOpen && (
            <Modal
              modalImageUrl={this.state.modalImageUrl}
              closeModal={this.closeModal}
            />
          )}
        </Conteiner>
      </div>
    );
  }
}
