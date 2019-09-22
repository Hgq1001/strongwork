/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 联系我们
 */
import React, { useState, useEffect } from 'react';
import styles from './ContactUs.css';
// 106.601802,29.699524

const ContactUs = () => {

  useEffect(() => {

  }, []);

  return (
    <div className={'container'}>
      <img src={require('../../assets/images/contactUs/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/contactUs/contact.jpg')} height={'100%'} width={'100%'} alt=""/>
      {/*<img src="https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=ca26de36478cc2e2542ddf11aa6fee47" alt=""/>*/}
    </div>
  );
};

export default ContactUs;
