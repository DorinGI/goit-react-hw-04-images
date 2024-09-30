import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
