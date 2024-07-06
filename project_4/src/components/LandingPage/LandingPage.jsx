import React from 'react'
import styles from './LandingPage.module.css'
import { LuMenuSquare } from "react-icons/lu";
import { GiIndianPalace } from "react-icons/gi";
import { GiLindenLeaf } from "react-icons/gi";

const LandingPage = () => {
  return (
    <div className={`${styles.ldnPage} container`}>
      <div className={styles.greetings}>
        <h1>YOUR INDIAN <GiLindenLeaf className={styles.leaf}/> CULINARY DREAM</h1>
        <p>
        Welcome to <img src="/images/logo_txt.png" alt="Restaurant Name"/> 
        - a place which serves more than just a meal.
        A feast that nourishes your hunger, heart, and soul. 
        </p>
        <button>
          <LuMenuSquare />
          ORDER NOW
        </button>
      </div>

      <div className={styles.greetImg}>
        {/* <img src="/images/logo.png"/> */}
      </div>
    </div>
  )
}

export default LandingPage
