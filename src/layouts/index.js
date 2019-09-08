import React from 'react';
import styles from './index.css';
import NavBar from '@/components/NavBar/NavBar';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <NavBar {...props}/>
      {props.children}
    </div>
  );
}

export default BasicLayout;
