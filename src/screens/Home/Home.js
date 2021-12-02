import React from "react";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div>
      <Header />

      <div className={styles.hero}>
        <p className={styles.subtitle}>We are creative</p>
        <h1 className={styles.title}>Photographers</h1>
      </div>
    </div>
  );
};

export default Home;
