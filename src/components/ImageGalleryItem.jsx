import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img
        className={styles.ImageGalleryItemImage}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
