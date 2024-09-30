import ImageGalleryItem from './ImageGalleryItem.jsx';
import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
