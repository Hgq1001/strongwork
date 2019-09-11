import React from 'react';
import styles from './index.css';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <NavBar {...props}/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default BasicLayout;
