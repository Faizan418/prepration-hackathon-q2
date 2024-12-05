import React from 'react'
import styles from './Section4.module.css'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.main}>
        <div className={styles.containar}>
          <div className={styles.left_div}>
            <div className={styles.tital_div}>
              <span className={styles.tital_div_one}> Categories </span>
              <span className={styles.tital_div_two}>Enhance Your <br /> Music Experience</span>
              <span className={styles.tital_div_three}>
                <span className={styles.tital_div_three_items}><p>05</p><p>Days</p></span>
                <span className={styles.tital_div_three_items}><p>23</p><p>Hours</p></span>
                <span className={styles.tital_div_three_items}><p>59</p><p>Minuts</p></span>
                <span className={styles.tital_div_three_items}><p>35</p><p>Seconds</p></span>
              </span>
              <span className={styles.tital_div_four}>
                <button className={styles.btn} type='button'>Buy Now</button>
              </span>
            </div>
          </div>
          <div className={styles.right_div}>
            <div className={styles.img_div}>
              <Image className={styles.img_} src={'/images/file-four/img.png'} alt='img' height={100} width={550}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
