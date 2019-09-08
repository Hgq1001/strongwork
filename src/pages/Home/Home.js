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
      <div className={styles.bannerBox}/>
      <img src={require('../../assets/images/home/about.jpg')} height={'100%'} width={'100%'} alt=""/>
      {/*<div className={styles.aboutBox}>*/}
      {/*  <img src={require('../../assets/images/home/about.jpg')} height={'100%'} width={'100%'} alt=""/>*/}
      {/*</div>*/}
      <img src={require('../../assets/images/home/partner.jpg')} height={'400px'} width={'70%'} alt=""/>
    </div>
  );
};

export default Home;
