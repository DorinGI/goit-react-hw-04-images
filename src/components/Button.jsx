import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className={styles.Button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
