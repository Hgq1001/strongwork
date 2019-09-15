/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 联系我们
 */
import React from 'react';
import styles from './ContactUs.css';
// 106.601802,29.699524

const ContactUs = () => {
  return (
    <div className={'container'}>
      <img src={require('../../assets/images/contactUs/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      <img src={require('../../assets/images/contactUs/contact.jpg')} height={'100%'} width={'100%'} alt=""/>
      {/*<img src="https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=10e14f7c68d20a8c7993db374f42854e" alt=""/>*/}
    </div>
  );
};

export default ContactUs;
