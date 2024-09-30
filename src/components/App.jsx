import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import Searchbar from './Searchbar.jsx';
import Button from './Button.jsx';
import Loader from './Loader.jsx';
import Modal from './Modal.jsx';
import styles from './styles.module.css';

const API_KEY = '45520163-d2f122f368fc1ea2470b2cc6a';
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchImages();
      setPerPage(12);
    }
  }, [query, page, per_page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPerPage(12);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = largeImageURL => {
    setLargeImageUrl(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageUrl('');
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
