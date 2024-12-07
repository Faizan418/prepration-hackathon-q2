'use client'
import Footer from '@/components/Footer/Footer'
import Navbar2 from '@/components/Navbar2/Navbar2'
import React from 'react'
import styles from './signup.module.css'
import Image from 'next/image'

const Signup = () => {
  function Create(){
    alert("Account Created Successfully")
    window.location.href = '/login' 
  }
  return (
    <div>
      <Navbar2/>
        <div className={styles.main_containar}>
          <div className={styles.containar}>
            <div className={styles.div_left}><Image src={'/images/signup-login/SideImage.png'} alt='img' height={100} width={800}/></div>
            <div className={styles.div_right}>
              <form className={styles.form_div}>
                <h1 className={styles.tital_heading}>Create an account</h1>
                <p className={styles.tital_pera}>Enter your details below</p>

                <div className={styles.input_div}>
                  <input className={styles.inputss} id='inputs' type="text" placeholder="Username" required />
                </div>
                <div className={styles.input_div}>
                  <input className={styles.inputss} id='inputs' type="email" placeholder="Email" required />
                </div>
                <div className={styles.input_div}>
                  <input className={styles.inputss} id='inputs' type="password" placeholder="Password 4-18"  minLength={4} maxLength={18} required/>
                </div>
                <div className={styles.input_div}>
                  <input className={styles.inputss} id='inputs' type="password" placeholder="Confirm Password"  minLength={4} maxLength={18} required />
                </div>
              <div className={styles.btn_div}>
                <button className={styles.btn1} type="submit" onClick={Create}>Create Account</button>
                <button className={styles.btn2} type="submit"><span><Image src={'/images/signup-login/Icon-Google.png'} alt='google' height={100} width={20}/></span>Sign Up with Google</button>
              </div>
                <p className={styles.p_text}>Already have an account? <a className='text-blue-700 font-bold' href='/login'>Login</a></p>
              </form>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Signup
