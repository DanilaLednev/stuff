import React from "react";

import styles from "../../styles/Home.module.css";

import saleImg from "../../images/sale.avif";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
          ONLY
        <span>NOW</span>
      </p>
      
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${saleImg})` }}
    >
      <p className={styles.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
);

export default Banner;