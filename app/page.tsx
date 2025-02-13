'use client';
import styles from "./page.module.css"
import { useState } from 'react';
import InputForm from './components/input-form';
import Header from './components/header/view';
import Link from "next/link";

const Home = () => {

  return (
    <div>
      <Header/>
      <div className={styles.bodyDiv}>
        <div className={styles.navBar}>
          <Link className={styles.active} href="">Home</Link>
          <Link href="/search">Search</Link>
        </div>
        <h1 className={styles.bodyTitle}>Today's Hottest News</h1>
      </div>

    </div>
    
  );
};

export default Home;
