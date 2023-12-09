import React from 'react';
import { StyledModal } from './ModalStyled';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { modalImageUrl, closeModal } = this.props;
    return (
      <StyledModal onClick={closeModal}>
        <img className="modalImg" src={modalImageUrl} alt="Modal" />
      </StyledModal>
    );
  }
}
