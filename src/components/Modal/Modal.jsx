import React from 'react';
import { StyledModal } from './ModalStyled';

export class Modal extends React.Component {
  //   componentDidMount() {
  //     document.addEventListener('keydown', this.handleKeyDown);
  //   }

  //   componentWillUnmount() {
  //     document.removeEventListener('keydown', this.handleKeyDown);
  //   }

  //   handleKeyDown = event => {
  //     if (event.key === 'Escape') {
  //       this.props.closeModal();s
  //     }
  //   };
  render() {
    const { modalImageUrl, closeModal } = this.props;
    return (
      <StyledModal onClick={closeModal}>
        <div>
          <img src={modalImageUrl} alt="Modal" />
        </div>
      </StyledModal>
    );
  }
}
