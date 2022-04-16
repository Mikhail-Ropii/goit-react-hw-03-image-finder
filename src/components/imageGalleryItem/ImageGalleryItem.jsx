import { Component } from 'react';
import { Modal } from 'components/modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };
  render() {
    const { imageUrl, alt, largeImageURL } = this.props;
    return (
      <>
        <img onClick={this.onModalOpen} src={imageUrl} alt={alt} />
        {this.state.isModalOpen && (
          <Modal largeImageURL={largeImageURL} alt={alt} />
        )}
      </>
    );
  }
}
