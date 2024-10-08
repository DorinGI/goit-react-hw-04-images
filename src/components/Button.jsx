import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
