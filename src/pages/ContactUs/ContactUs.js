/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 首页
 */
import React from 'react';
import styles from './ContactUs.css';

const ContactUs = () => {
  return (
    <div className={'container'}>
      <img src={require('../../assets/images/contactUs/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/contactUs/contact.jpg')} height={'100%'} width={'100%'} alt=""/>
    </div>
  );
};

export default ContactUs;
