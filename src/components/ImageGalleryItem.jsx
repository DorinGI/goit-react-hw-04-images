import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { image, onClick } = this.props;

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
  }
}

export default ImageGalleryItem;
