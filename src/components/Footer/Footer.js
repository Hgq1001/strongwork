/**
 * @Author:hgq
 * @Date: 2019/9/9
 * @Describe:
 */
import React from 'react';
import styles from './styles.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.link_content}>
          <h3>友情链接</h3>
          <p>
            <span className={styles.partner_name}>重庆金山科技</span>
            <a className={styles.a_link} href="http://www.jinshangroup.com"
               target={'_blank'}>http://www.jinshangroup.com</a>
          </p>
          <p>
            <span className={styles.partner_name}>重庆民康实业</span>
            <a className={styles.a_link} href="http://www.cqmksy.com" target={'_blank'}>http://www.cqmksy.com</a>
          </p>
          <p>
            <span className={styles.partner_name}>重庆耐德</span>
            <a className={styles.a_link} href="http://www.edshock.com" target={'_blank'}>http://www.edshock.com</a>

          </p>
          <p>
            <span className={styles.partner_name}> 重庆科龙科技</span>
            <a className={styles.a_link} href="https://hi-lex.zhiye.com" target={'_blank'}>https://hi-lex.zhiye.com</a>

          </p>
        </div>
        <div className={styles.contact_content}>
          <h3>联系我们</h3>
          <p>电话：023-88255750</p>
          <p>传真：023-67264899</p>
          <p>邮箱：wubin@strongwork.cn</p>
          <p>地址：重庆市渝北区兰馨大道中航MYTOWN55栋1单元201</p>
        </div>
        <div className={styles.scan_content}>
          <div className={styles.code_box}>
            <img src={require('@/assets/images/footer/company_code.jpg')} width={'140px'} height={'140px'} alt=""/>
            <span>企业二维码</span>
          </div>
          <div className={styles.code_box}>
            <img src={require('@/assets/images/footer/company_dingding_code.jpg')} width={'140px'} height={'140px'}
                 alt=""/>
            <span>企业钉钉</span>
          </div>
        </div>
      </div>
      <div className={styles.separate_line}/>
      <div className={styles.footer_bottom}>
        <p>copyright 仕壮沃科（重庆）电子商务有限公司 2017-2019</p>
      </div>
    </div>
  );
}
