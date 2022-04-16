import { Component } from 'react';
import { createPortal } from 'react-dom';
import '../styles.css';

const popupRoot = document.querySelector('#popup-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>,
      popupRoot
    );
  }
}
