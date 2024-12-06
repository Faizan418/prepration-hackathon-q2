import React from "react";
import styles from "./Section7.module.css";
import Image from "next/image";

const Section7 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.box}>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services.png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">Free and Fast Delivery</h3>
            <p className="text-xs">Free delivery for all order $140</p>
          </div>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services (2).png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">24/7 Customar Service</h3>
            <p className="text-xs">Friendly 24/7 customar support</p>
          </div>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-seven/Services (3).png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">Money Bank Guarantee</h3>
            <p className="text-xs">We return money with in 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
