/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe: 联系我们
 */
import React, { useState, useEffect } from 'react';
import styles from './ContactUs.css';
import { Map, Marker } from 'react-amap';
// 106.601802,29.699524

const CENTER_POINT = { longitude: 106.601802, latitude: 29.699524 };

const ContactUs = () => {

  useEffect(() => {

  }, []);

  return (
    <div className={'container'}>
      <img src={require('../../assets/images/contactUs/banner.jpg')} height={'650px'} width={'100%'} alt=""/>
      {/*<div className={'contactUsBg'}/>*/}
      <img src={require('../../assets/images/contactUs/contact.png')} height={'50%'} width={'100%'} alt=""/>
      <div style={{
        width: '70%',
        height: '500px',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}>

        <Map amapkey={'ca26de36478cc2e2542ddf11aa6fee47'} center={CENTER_POINT} zoom={20}>
          {/*<div style={{zIndex:20,position:'absolute', top: '20px', left: '30px'}}>*/}
          {/*  <img src={require('../../assets/images/contactUs/resetPos.png')} width={'40px'} height={'40px'} alt=""/>*/}
          {/*</div>*/}
          <Marker zIndex={10} icon={require('../../assets/images/contactUs/Marker.png')} title={'仕壮沃科（重庆）电子商务有限公司'} position={CENTER_POINT}/>
        </Map>
      </div>
      {/*<img src="https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=ca26de36478cc2e2542ddf11aa6fee47" alt=""/>*/}
    </div>
  );
};

export default ContactUs;
