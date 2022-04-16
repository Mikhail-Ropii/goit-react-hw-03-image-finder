import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import '../styles.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.resultSearch.map(
          ({ id, webformatURL, tags, largeImageURL }) => (
            <li key={id} className="ImageGalleryItem">
              <ImageGalleryItem
                imageUrl={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
              />
            </li>
          )
        )}
      </ul>
    );
  }
}
