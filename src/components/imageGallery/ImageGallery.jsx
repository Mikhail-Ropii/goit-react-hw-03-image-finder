import axios from 'axios';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    currentPage: 1,
  };
  componentDidUpdate(prevProps, _) {
    if (prevProps.searchValue !== this.props.searchValue) {
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.searchValue}&page=${this.state.currentPage}&key=25249290-2b9b53acf0b6f227aa978e658&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => this.setState({ pictures: res.data.hits }));
    }
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.pictures.map(
          ({ id, webformatURL, tags, largeImageURL }) => (
            <li key={id} className="gallery-item">
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
