import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
   <div className={styles.main_containar}>

    <div>
      <h1>Welcome to My React App!</h1>
      <p>This is a simple React app with a header, footer, and a main content section.</p>
    </div>

   </div>
  )
}

export default Header
