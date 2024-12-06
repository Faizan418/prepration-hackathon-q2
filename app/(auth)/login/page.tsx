'use client'
import styles from './login.module.css'
import Footer from '@/components/Footer/Footer'
import Navbar2 from '@/components/Navbar2/Navbar2'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  function login(){
    
    alert("Account Login Successfully")
    window.location.href = '/' 
  }
  return (
    <div>
      <Navbar2/>
        <div className={styles.main_containar}>
          <div className={styles.containar}>
            <div className={styles.div_left}><Image src={'/images/signup-login/side Image.png'} alt='img' height={100} width={800}/></div>
            <div className={styles.div_right}>
              <form className={styles.form_div}>
                <h1 className={styles.tital_heading}>Log in to Exclusive</h1>
                <p className={styles.tital_pera}>Enter your details below</p>

                {/* <div className={styles.input_div}>
                  <input className={styles.inputss} type="text" placeholder="Username" required />
                </div> */}
                <div className={styles.input_div}>
                  <input className={styles.inputss} type="email" placeholder="Email" required />
                </div>
                <div className={styles.input_div}>
                  <input className={styles.inputss} type="password" placeholder="Password"  minLength={4} maxLength={18} required/>
                </div>
                {/* <div className={styles.input_div}>
                  <input className={styles.inputss} type="password" placeholder="Confirm Password"  minLength={4} maxLength={18} required />
                </div> */}
              <div className={styles.btn_div}>
                <button className={styles.btn1} type="submit" onClick={login}>Login</button>
                {/* <button className={styles.btn2} type="submit">Sign Up with Google</button> */}
                <p className={styles.btn2}><Link href={''}>Forget Password?</Link></p>
              </div>
                <p className={styles.p_text}>if you not have an account? <a className='text-blue-700 font-bold' href='/signup'>signup</a></p>
              </form>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Login
