import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import '../styles.css';

export const ImageGallery = ({ resultSearch }) => {
  return (
    <ul className="ImageGallery">
      {resultSearch.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className="ImageGalleryItem">
          <ImageGalleryItem
            imageUrl={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
};
