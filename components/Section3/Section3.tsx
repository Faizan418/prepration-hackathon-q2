import React from "react";
import styles from "./Section3.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Section3 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>This Month</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>Best Selling Products</h1>
          <span>
            <button className={styles.view_btn} type="button">
              View All
            </button>
          </span>
        </div>

        <div className={styles.grid}>
          <div className={styles.main_box}>
            <div className={styles.img_div}>
              <Image
                className={styles.img}
                src={"/images/file-three/TheNorthCoat.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>The North Coat</h2>
              <p className={styles.product_price}>
                $260 <span className={styles.line_throd}>$300</span>
              </p>
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
                src={"/images/file-three/Gucci-Duffle-blog.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Gucci Duffle Blog</h2>
              <p className={styles.product_price}>
                $960 <span className={styles.line_throd}>$1160</span>
              </p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
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
                src={"/images/file-three/RGB-Liquid-CPU-Cooler.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>RGB Liquid CPU Cooler</h2>
              <p className={styles.product_price}>
                $160 <span className={styles.line_throd}>$170</span>
              </p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
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
                src={"/images/file-three/Small-BookSelf.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Small Book Self</h2>
              <p className={styles.product_price}>
                $360 <span className={styles.line_throd}>$400</span>
              </p>
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
                src={"/images/file-three/TheNorthCoat.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>The North Coat</h2>
              <p className={styles.product_price}>
                $260 <span className={styles.line_throd}>$300</span>
              </p>
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
                src={"/images/file-three/Gucci-Duffle-blog.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Gucci Duffle Blog</h2>
              <p className={styles.product_price}>
                $960 <span className={styles.line_throd}>$1160</span>
              </p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
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
                src={"/images/file-three/RGB-Liquid-CPU-Cooler.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>RGB Liquid CPU Cooler</h2>
              <p className={styles.product_price}>
                $160 <span className={styles.line_throd}>$170</span>
              </p>
              <span className={styles.product_rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
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
                src={"/images/file-three/Small-BookSelf.png"}
                alt="item"
                width={140}
                height={100}
              />
            </div>
            <div className={styles.desc_box}>
              <h2 className={styles.product_name}>Small Book Self</h2>
              <p className={styles.product_price}>
                $360 <span className={styles.line_throd}>$400</span>
              </p>
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
        </div>

        <hr className="mt-8 text-gray-700 font-bold" />
      </div>
    </div>
  );
};

export default Section3;
