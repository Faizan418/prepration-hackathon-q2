import React from 'react'
import styles from './Section1.module.css'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className={styles.main_containar}>

      <div className={styles.containar}>
        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>Tody's</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>Flash Sales</h1>
          <h3 className={styles.start_time}>
            <div className={styles.conate}><span className={styles.time_headings}>Day</span><br /><span className={styles.time_dataa}>03</span></div>
            <span className='mt-4 text-3xl text-red-600'>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Hour</span><br /><span className={styles.time_dataa}>23</span></div>
            <span className='mt-4 text-3xl text-red-600'>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Minuts</span><br /><span className={styles.time_dataa}>19</span></div>
            <span className='mt-4 text-3xl text-red-600'>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Second</span><br /><span className={styles.time_dataa}>59</span></div>
          </h3>
          <span className='text-4xl p-2 border-slate-700 flex gap-4'><FaArrowLeft /><FaArrowRight /></span>
        </div>



        <div className={styles.grid}>

          <div className={styles.main_box}>
              <div className={styles.img_div}>
                <Image className={styles.img} src={'/images/file-one/HAVIT-HV-G92-Gamepad.png'} alt='item' width={140} height={100}/>
              </div>    
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>HAVIT HV-G92 Gamepad</h2>
              <p className={styles.product_price}>$120 <span className={styles.line_throd}>$160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <p className='text-slate-100'> (88)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/AK-900-Wired-Keyboard.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>AK-900 Wired Keyboard</h2>
              <p className={styles.product_price}>$960 <span className={styles.line_throd}>$1160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
                <p className='text-slate-100'> (76)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/IPS-LCD-Gaming-Monitor.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>IPS-LCD Gaming Monitor</h2>
              <p className={styles.product_price}>$370 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (65)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/S-Series-comfort-Chair.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>S-Series comfort Chair</h2>
              <p className={styles.product_price}>$375 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><CiStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (50)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>
          
          <div className={styles.main_box}>
              <div className={styles.img_div}>
                <Image className={styles.img} src={'/images/file-one/HAVIT-HV-G92-Gamepad.png'} alt='item' width={140} height={100}/>
              </div>    
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>HAVIT HV-G92 Gamepad</h2>
              <p className={styles.product_price}>$120 <span className={styles.line_throd}>$160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <p className='text-slate-100'> (88)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/AK-900-Wired-Keyboard.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>AK-900 Wired Keyboard</h2>
              <p className={styles.product_price}>$960 <span className={styles.line_throd}>$1160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
                <p className='text-slate-100'> (76)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/IPS-LCD-Gaming-Monitor.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>IPS-LCD Gaming Monitor</h2>
              <p className={styles.product_price}>$370 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (65)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/S-Series-comfort-Chair.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>S-Series comfort Chair</h2>
              <p className={styles.product_price}>$375 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><CiStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (50)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>
          
          <div className={styles.main_box}>
              <div className={styles.img_div}>
                <Image className={styles.img} src={'/images/file-one/HAVIT-HV-G92-Gamepad.png'} alt='item' width={140} height={100}/>
              </div>    
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>HAVIT HV-G92 Gamepad</h2>
              <p className={styles.product_price}>$120 <span className={styles.line_throd}>$160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <p className='text-slate-100'> (88)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/AK-900-Wired-Keyboard.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>AK-900 Wired Keyboard</h2>
              <p className={styles.product_price}>$960 <span className={styles.line_throd}>$1160</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><FaStar /><CiStar />
                <p className='text-slate-100'> (76)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/IPS-LCD-Gaming-Monitor.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>IPS-LCD Gaming Monitor</h2>
              <p className={styles.product_price}>$370 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><FaStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (65)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image className={styles.img} src={'/images/file-one/S-Series-comfort-Chair.png'} alt='item' width={140} height={100}/>
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>S-Series comfort Chair</h2>
              <p className={styles.product_price}>$375 <span className={styles.line_throd}>$400</span></p>
              <span className={styles.product_rating}>
                <FaStar /><FaStar /><CiStar /><CiStar /><CiStar />
                <p className='text-slate-100'> (50)</p>
              </span>
              <button className={styles.cart_btn} type='submit'>Add to Cart</button>
            </div>
          </div>
          

        </div>

        <div className={styles.last_btn_div}>
          <button className={styles.lastt_btn} type='submit'>View all Products</button>
        </div>

        <hr className='mt-8 text-gray-700 font-bold'/>

      </div>

    </div>
  )
}

export default Section1
