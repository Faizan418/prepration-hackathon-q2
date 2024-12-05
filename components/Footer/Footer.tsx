import React from 'react'
import Image from 'next/image';
import styles from './Footer.module.css'
import { BiSend } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.main_containar}>

      <div className={styles.containar}>

        <div className={styles.box}>
          <div className={styles.card}>
            <h3 className={styles.headings_leftright}>Exclusive</h3>
            <h2 className={styles.Subscribe}>Subscribe</h2>
            <p className={styles.Get}>Get 10% off your first order</p>
              <span className={styles.other}>
              <input className={styles.input} type="email" placeholder='Enter your email' />
              <BiSend className={styles.send_icon}/>
              </span>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Support</h3>
            <p className={styles.peras}>111 Bijoy sarani, Dhaka, <br /> Dh 1515, Bangladesh. </p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>muhammadf4060@gmail.com</Link></p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>+92340-60443-59</Link></p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Account</h3>
            <p className={styles.peras}><Link className={styles.Links} href={''}>My Account</Link>  </p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>Login / Register</Link>  </p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>Cart</Link>  </p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>Wishlist</Link>  </p>
            <p className={styles.peras}><Link className={styles.Links} href={''}>Shop</Link>  </p>

          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Quick Link</h3>
            <p className={styles.peras}><Link className={styles.Links} href={""}>Privacy Policy</Link></p>
            <p className={styles.peras}><Link className={styles.Links} href={""}>Turm Of Use</Link></p>
            <p className={styles.peras}><Link className={styles.Links} href={""}>FAQ</Link></p>
            <p className={styles.peras}><Link className={styles.Links} href={""}>Contact</Link></p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_leftright}>Download App</h3>
            <p className={styles.last_box_pera}>Save $3 with App New User Only</p>
            <div className={styles.other_to_other}>
              <span className={styles.o}>
                <Image src={'/images/file-footer/Qr-Code.png'} alt='Q/R Code' height={70} width={70}/>
              </span>
              <span className={styles.t}>
              <Image src={'/images/file-footer/GooglePlay.png'} alt='Q/R Code' height={105} width={105}/>
              <Image src={'/images/file-footer/AppStore.png'} alt='Q/R Code' height={105} width={105}/>
              </span>
            </div>
            <div className={styles.social_icon_div}>
            <span className={styles.icon_}><Link className={styles.Links} href={''}><FaFacebookF /></Link></span>
              <span className={styles.icon_}><Link className={styles.Links} href={''}><SlSocialTwitter /></Link></span>
              <span className={styles.icon_}><Link className={styles.Links} href={''}><FiInstagram /></Link></span>
              <span className={styles.icon_}><Link className={styles.Links} href={''}><ImLinkedin2 /></Link></span>
            </div>
          </div>
        </div>

      </div>




      <hr />
      <span className={styles.copyright}>&copy;copyright Muhammad Faizan 2024. All right reserved</span>
    </div>
  )
}

export default Footer
