/**
 * @Author:hgq
 * @Date: 2019/9/7
 * @Describe:
 */
import React from 'react';
import styles from './styles.css';
import { Link } from 'umi';

const NavBarInfo = [
  { name: '首页', path: '/home' },
  { name: '关于我们', path: '/aboutUs' },
  { name: '产品服务', path: '/productService' },
  { name: '合作伙伴', path: '/partner' },
  { name: '联系我们', path: '/contactUs' },
];

const NavBar = (props) => {

  const isActive = (path) => {
    let pathname = props.location.pathname;
    return pathname === path;
  };

  return (
    <div className={styles.nav_box}>
      {/*<div className={styles.logo_box}></div>*/}
      <img src={require('../../assets/images/navbar/logo.png')} width={'170px'} height={'130px'} alt=""/>
      <div className={styles.nav_list}>
        {NavBarInfo.map((nav, index) => {
          return <Link to={nav.path}>
            <div className={`${styles.link_box} ${isActive(nav.path) && styles.active}`}>
              <span>{nav.name}</span>
            </div>
          </Link>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
