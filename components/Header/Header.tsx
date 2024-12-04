'use client'
import styles from './Header.module.css'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
   <div className={styles.main_containar}>

    <div className={styles.containar}>

      <div className={styles.first}>
          <div className={styles.div_one}></div>
          <div className={styles.div_two}>
            <div className={styles.extra_headings}>
              <span className={styles.heading_one}>Summer Sale For All<span className={styles.extra}> Swim Suits And Free Express Delivery </span>- OFF 50%! </span>
              <span className={styles.heading_two}><Link href={'/'}> Shop Now</Link></span>
            </div>
            <div>
              <select className={styles.lenguage_select}>
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Sindhi">Sindhi</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Chaines">Chaines</option>
              </select>
            </div>
          </div>
      </div>

      <div className={styles.second}>
          <div className={styles.div_oneone}>Exclusive</div>
          <div className={styles.div_twotwo}>

            <ul className={`${styles.ul_div} ${menuVisible ? styles.show_menu : ""}`}>
              <li className={styles.div_li}><Link href={'/'}>Home</Link></li>
              <li className={styles.div_li}><Link href={'/contact'}>Contact</Link></li>
              <li className={styles.div_li}><Link href={'/about'}>About</Link></li>
              <li className={styles.div_li}><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
            <div className={styles.other_div}>
              <div className={styles.inpt_div}>
                <input className={styles.input} type="search" placeholder='What are you looking for? ' />
                <CiSearch className='text-3xl p-1'/>
              </div>
              <div className='flex gap-4 ml-7 text-2xl'>
                <Link href={'/'}><FaRegHeart /></Link>
                <Link href={'/'}><BsCart3 /></Link>
              </div>
              <button
                  className={styles.hamburger}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  aria-expanded={menuVisible}
                >
                  &#9776;
                </button>

            </div>
          </div>
      </div>






      
    </div>

   </div>
  )
}

export default Header
