import { Component } from 'react';
import { Modal } from 'components/modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    const { imageUrl, alt, largeImageURL } = this.props;
    return (
      <>
        <img
          className="ImageGalleryItem-image"
          onClick={this.onModalToggle}
          src={imageUrl}
          alt={alt}
        />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onModalClose={this.onModalToggle}
          />
        )}
      </>
    );
  }
}
