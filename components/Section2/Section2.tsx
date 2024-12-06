import styles from "./Section2.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Section2 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>Category</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>Browse By Category</h1>
          <span className="text-3xl p-2 border-slate-700 flex gap-4">
            <FaArrowLeft className={styles.left_btn} />
            <FaArrowRight className={styles.right_btn} />
          </span>
        </div>

        <div className={styles.box}>
          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-CellPhone.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>Phones</span>
          </div>

          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-Computer.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>Computer</span>
          </div>

          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-SmartWatch.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>SmartWatch</span>
          </div>

          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-Camera.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>Camera</span>
          </div>

          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-Headphone.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>Headphone</span>
          </div>

          <div className={styles.card}>
            <span className={styles.img_div}>
              <Image
                src={"/images/file-two/Category-Gamepad.png"}
                alt="img"
                height={100}
                width={80}
              />
            </span>
            <span className={styles.desc_div}>Gaming</span>
          </div>
        </div>

        <hr className="mt-8 text-gray-700 font-bold" />
      </div>
    </div>
  );
};

export default Section2;
