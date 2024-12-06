import styles from "./Section6.module.css";
import Image from "next/image";
import Link from "next/link";

const Section6 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.start}>
          <span className={styles.start_one}></span>
          <span className={styles.start_two}>Featured</span>
        </div>
        <div className={styles.start_twotwo}>
          <h1 className={styles.start_tital}>New Arrival</h1>
        </div>

        <div className={styles.main}>
          <div className={styles.div_left}>
            <span className={styles.left_img_div}>
              <Image
                src="/images/file-six/NewArrivalPlayStation5.png"
                alt="PlayStation 5"
                height={100}
                width={800}
              />
            </span>
            <span className={styles.left_desc_div}>
              <h3 className="font-bold text-2xl mb-2 mt-7 ml-4">
                PlayStation 5
              </h3>
              <p className="text-xs mb-2 ml-5">
                Black and White version of the PS5
                <br />
                Coming out on sale.
              </p>
              <p className="font-bold ml-5 underline hover:text-red-600">
                <Link href="#">Shop Now</Link>
              </p>
            </span>
          </div>

          <div className={styles.div_right}>
            <div className={styles.div_right_upper}>
              <span className={styles.right_upper_div_img_div}>
                <Image
                  src="/images/file-six/NewArrivalWomensCollections.png"
                  alt="Women's Collections"
                  height={100}
                  width={350}
                />
              </span>
              <span className={styles.right_upper_div_desc_div}>
                <h3 className="font-bold text-2xl mb-2 ml-3">
                  Women&#39;s Collections
                </h3>
                <p className="text-xs mb-2 ml-3">
                  Featured women collection that
                  <br />
                  gives you another vibe.
                </p>
                <p className="font-bold ml-3 underline hover:text-red-600">
                  <Link href="#">Shop Now</Link>
                </p>
              </span>
            </div>

            <div className={styles.div_right_lower}>
              <div className={styles.div_right_lower_left}>
                <span className={styles.div_right_lower_left_img_dev}>
                  <Image
                    src="/images/file-six/NewArrivalSpeakers.png"
                    alt="Speakers"
                    height={100}
                    width={200}
                  />
                </span>
                <span className={styles.div_right_lower_left_desc_dev}>
                  <h3 className="font-bold text-2xl mb-2 mt-24 ml-2">
                    Speakers
                  </h3>
                  <p className="text-xs mb-2 ml-2">Amazon wireless speakers.</p>
                  <p className="font-bold ml-2 underline hover:text-red-600">
                    <Link href="#">Shop Now</Link>
                  </p>
                </span>
              </div>

              <div className={styles.div_right_lower_right}>
                <span className={styles.div_right_lower_right_img_dev}>
                  <Image
                    src="/images/file-six/NewArrivalPerfme.png"
                    alt="Perfume"
                    height={100}
                    width={200}
                  />
                </span>
                <span className={styles.div_right_lower_right_desc_dev}>
                  <h3 className="font-bold text-2xl mb-2 mt-24 ml-2">
                    Perfume
                  </h3>
                  <p className="text-xs mb-2 ml-2">Gucci Intense OUD EDP.</p>
                  <p className="font-bold ml-2 underline hover:text-red-600">
                    <Link href="#">Shop Now</Link>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 text-gray-700 font-bold" />
      </div>
    </div>
  );
};

export default Section6;
