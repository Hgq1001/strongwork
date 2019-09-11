/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 首页
 */
import React from 'react';
import styles from './AboutUs.css';

const AboutUs = () => {
  return (
    <div className={'container'}>
      <img src={require('../../assets/images/aboutUs/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/aboutUs/introduction.jpg')} height={'100%'} width={'100%'} alt=""/>
    </div>
  );
};

export default AboutUs;
