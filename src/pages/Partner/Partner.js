/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 首页
 */
import React from 'react';
import styles from './Partner.css';

const Partner = () => {
  return (
    <div className={'container'}>
      <img src={require('../../assets/images/parnter/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/parnter/parnter.jpg')} height={'100%'} width={'100%'} alt=""/>
    </div>
  );
};

export default Partner;
