import { Component } from 'react';
import { Modal } from 'components/modal/Modal';
import propTypes from 'prop-types';

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
          <Modal onModalClose={this.onModalToggle}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageUrl: propTypes.string,
  alt: propTypes.string,
  largeImageURL: propTypes.string,
};
