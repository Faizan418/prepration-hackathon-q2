import Navbar from '@/components/Navbar/Navbar'
import styles from './contact.module.css'
import Footer from '@/components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.main_containar}>
        <div className={styles.containar}>
          this is contact page
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
