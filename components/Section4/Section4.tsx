"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Section4.module.css";
import Image from "next/image";

const Section4 = () => {
  let date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();

  const [hour, sethour] = useState(hours);
  const [minute, setminute] = useState(minutes);
  const [second, setsecond] = useState(seconds);
  const [dayN, setday] = useState(day);

  const updateTime = () => {
    date = new Date();
    sethour(date.getHours());
    setminute(date.getMinutes());
    setsecond(date.getSeconds());
    setday(date.getDay());
  };

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className={styles.main_containar}>
      <div className={styles.main}>
        <div className={styles.containar}>
          <div className={styles.left_div}>
            <div className={styles.tital_div}>
              <span className={styles.tital_div_one}> Categories </span>
              <span className={styles.tital_div_two}>
                Enhance Your <br /> Music Experience
              </span>
              <span className={styles.tital_div_three}>
                <span className={styles.tital_div_three_items}>
                  <p>{dayN}</p>
                  <p>Days</p>
                </span>
                <span className={styles.tital_div_three_items}>
                  <p>{hour}</p>
                  <p>Hours</p>
                </span>
                <span className={styles.tital_div_three_items}>
                  <p>{minute}</p>
                  <p>Minuts</p>
                </span>
                <span className={styles.tital_div_three_items}>
                  <p>{second}</p>
                  <p>Seconds</p>
                </span>
              </span>
              <span className={styles.tital_div_four}>
                <button className={styles.btn} type="button">
                  Buy Now
                </button>
              </span>
            </div>
          </div>
          <div className={styles.right_div}>
            <div className={styles.img_div}>
              <Image
                className={styles.img_}
                src={"/images/file-four/img.png"}
                alt="img"
                height={100}
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
