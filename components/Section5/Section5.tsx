import styles from "./Section5.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Section5 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>Our Products</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>Explore Our Products</h1>
          <span className="text-3xl p-2 border-slate-700 flex gap-4">
            <FaArrowLeft className={styles.left_btn} />
            <FaArrowRight className={styles.right_btn} />
          </span>
        </div>

        <div className={styles.grid}>
          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/BreedDryDogFood.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Breed Dry Dog Food</h2>
              <p className={styles.product_price}>$100</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
                <CiStar />
                <p className="text-slate-100"> (35)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/CanonEosDslrCamera.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Canon EOS DSLR Camera</h2>
              <p className={styles.product_price}>$360</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
                <p className="text-slate-100"> (95)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/AsusFhdGamingLaptop.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Asus FHD Gaming Laptop</h2>
              <p className={styles.product_price}>$700</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-slate-100"> (325)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/KidsElectricCar.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Kids Electric Car</h2>
              <p className={styles.product_price}>$960</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-slate-100"> (65)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/Jr.ZoomSoccerCleats.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Jr.Zoom Soccer Cleats</h2>
              <p className={styles.product_price}>
                $1160 <span className={styles.line_throd}>$1160</span>
              </p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-slate-100"> (35)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/GP11ShooterUsbGamepad.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>GP11 USB Gamepad</h2>
              <p className={styles.product_price}>$660</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
                <CiStar />
                <p className="text-slate-100"> (55)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/QuiltedSatinJacket.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Quilted Satin Jacket</h2>
              <p className={styles.product_price}>$660</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <p className="text-slate-100"> (55)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>

          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-five/AsusFhdGamingLaptop.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Asus FHD Gaming Laptop</h2>
              <p className={styles.product_price}>$700</p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-slate-100"> (325)</p>
              </span>
              <button className={styles.cart_btn} type="submit">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className={styles.last_btn_div}>
          <button className={styles.lastt_btn} type="submit">
            View all Products
          </button>
        </div>

        <hr className="mt-8 text-gray-700 font-bold" />
      </div>
    </div>
  );
};

export default Section5;
