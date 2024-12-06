'use client'
import styles from './Section1.module.css'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const Section1 = () => {
  let date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();

  const [hour, sethour] = useState(hours)
  const [minute, setminute] = useState(minutes)
  const [second, setsecond] = useState(seconds)
  const [dayN, setday] = useState(day)

  const updateTime = () => {
    date = new Date();
    sethour(date.getHours())
    setminute(date.getMinutes())
    setsecond(date.getSeconds())
    setday(date.getDay())
  }
  
  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);
    return () => clearInterval(timerID);
  }, []);


  return (
    <div className={styles.main_containar}>

      <div className={styles.containar}>

        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>Tody&#39;s</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>Flash Sales</h1>
          <h3 className={styles.start_time}>
            <div className={styles.conate}><span className={styles.time_headings}>Day</span><br /><span className={styles.time_dataa}>{dayN}</span></div>
            <span className={styles.dubble_dots}>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Hour</span><br /><span className={styles.time_dataa}>{hour}</span></div>
            <span className={styles.dubble_dots}>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Minuts</span><br /><span className={styles.time_dataa}>{minute}</span></div>
            <span className={styles.dubble_dots}>:</span>
            <div className={styles.conate}><span className={styles.time_headings}>Second</span><br /><span className={styles.time_dataa}>{second}</span></div>
          </h3>
          <span className='text-3xl p-2 border-slate-700 flex gap-4'><FaArrowLeft className={styles.left_btn}/><FaArrowRight className={styles.right_btn} /></span>
          </div>
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
  )
}

export default Section1
