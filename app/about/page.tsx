import Navbar from '@/components/Navbar/Navbar'
import styles from './about.module.css'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Section7 from '@/components/Section7/Section7'
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.main_containar}>

        <div className={styles.containar}>
          <h1 className={styles.topHeading}>Home / About</h1>
            <div className={styles.main}>
              <div className={styles.div_left}>
                <h1 className={styles.hea1}>Our Story</h1>
                <p className={styles.pera1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea perferendis tenetur ipsum ipsam consequatur, esse, nulla laboriosam sit at veniam nesciunt optio quasi doloremque, est quia. Excepturi, facilis? Molestiae laudantium magnam, ratione deserunt vero culpa suscipit quas corrupti, eum exercitationem facilis qui non incidunt eligendi dolores sapiente illum voluptates.</p>
                <p className={styles.pera1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta? Laboriosam voluptas minus doloribus, nisi similique aperiam aut non quae porro iure.</p>
              </div>
              <div className={styles.div_right}><Image src={'/images/about/Side-img.png'} alt='img' height={100} width={800}/></div>
            </div>


            <div className={styles.box}>

               <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services.png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-2xl">10.5k</h3>
            <p className="text-xs">Sallers active our site</p>
               </div>
               <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services (2).png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-2xl">33k</h3>
            <p className="text-xs">Monthly product sale</p>
               </div>
               <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services (3).png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-2xl">45.5k</h3>
            <p className="text-xs">Customer active our site</p>
               </div>
               <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services (3).png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-2xl">25k</h3>
            <p className="text-xs">Anual gross sale in our site</p>
               </div>

            </div>

            {/* -------------------------- */}


            <div className={styles.box}>

               <div className={styles.card2}>
            <Image
              className="mb-4"
              src={"/images/about/Tom-Cruise.png"}
              alt="item"
              height={100}
              width={300}
            />
            <h3 className="font-semibold text-2xl">Tom Cruise</h3>
            <p className="text-xs">Founder / Chairman</p>
            <p className='flex mt-3 gap-5 text-xl'><Link href={''}><SlSocialTwitter /></Link><Link href={''}><FiInstagram /></Link><Link href={''}><ImLinkedin2 /></Link></p>
               </div>

               <div className={styles.card2}>
            <Image
              className="mb-4"
              src={"/images/about/Emma-Watson.png"}
              alt="item"
              height={100}
              width={300}
            />
            <h3 className="font-semibold text-2xl">Emma-Watson</h3>
            <p className="text-xs">Managing Diractor</p>
            <p className='flex mt-3 gap-5 text-xl'><Link href={''}><SlSocialTwitter /></Link><Link href={''}><FiInstagram /></Link><Link href={''}><ImLinkedin2 /></Link></p>
               </div> 

               <div className={styles.card2}>
            <Image
              className="mb-4"
              src={"/images/about/Will-Smith.png"}
              alt="item"
              height={100}
              width={300}
            />
            <h3 className="font-semibold text-2xl">Will Smith</h3>
            <p className="text-xs">Product Designer</p>
            <p className='flex mt-3 gap-5 text-xl'><Link href={''}><SlSocialTwitter /></Link><Link href={''}><FiInstagram /></Link><Link href={''}><ImLinkedin2 /></Link></p>
               </div>

            </div>
          




            <Section7/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default About
