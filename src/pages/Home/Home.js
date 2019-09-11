/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 首页
 */
import React from 'react';
import styles from './Home.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={require('../../assets/images/home/banner.jpg')} height={'100%'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/home/about.jpg')} height={'100%'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/home/partner.jpg')} height={'100%'} width={'100%'} alt=""/>
    </div>
  );
};

export default Home;
