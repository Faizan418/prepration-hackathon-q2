import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.first_div}>
          <ul className={styles.ul_div}>
            <Link href={"/"}>
              <li className={styles.li_div}>
                <span>Woman&#39;s Fashion</span>
                <span>
                  <FaChevronRight />
                </span>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>
                <span>Men&#39;s Fashion</span>
                <span>
                  <FaChevronRight />
                </span>{" "}
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Electronic</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Home & LifeStyles</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Medicine</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Sports & Outdoor</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Bade&#39;s & Toys</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Groceries & Pets</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.li_div}>Health & Beauty</li>
            </Link>
          </ul>
        </div>
        <div className={styles.second_div}>
          <div className={styles.banner_div}>
            <div className={styles.one}>
              <div className={styles.one_one}>
                <Image
                  src={"/images/file-header/apple-img.png"}
                  alt="logo"
                  width={30}
                  height={100}
                />
                <h2>I Phone 14 Series</h2>
              </div>
              <div className={styles.two_two}>
                <h1>
                  Up to 10% <br /> off Voucher
                </h1>
              </div>
              <div className={styles.three_three}>
                <Link className="flex gap-3" href={""}>
                  <h1 className={styles.shop_now}>Shop Now</h1>
                  <span className="text-xl">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            <div className={styles.two}>
              <Image
                src={"/images/file-header/iphone-img.png"}
                alt="iphone"
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
