import React from 'react'
import styles from './LandingPage.module.css'
import Navbar from '../Navbar/Navbar';
import { LuMenuSquare } from "react-icons/lu";
import { GiLindenLeaf } from "react-icons/gi";
import Button from '../Button/Button';

const LandingPage = () => {
  return (
    <div>
      <div className={`${styles.ldnPage} container`}>
        <div className={styles.greetings}>
          <h1>YOUR INDIAN <GiLindenLeaf className={styles.leaf}/> CULINARY DREAM</h1>
          <p>
          Welcome to <img src="/images/logo_txt.png" alt="Restaurant Name"/> 
          - a place which serves more than just a meal.
          A feast that nourishes your hunger, heart, and soul. 
          Experience culinary delights crafted with love, 
          where every bite tells a story and every meal becomes a cherished memory. 
          </p>

          <Button 
            buttonType="btn3"
            icon={<LuMenuSquare />}
            text={"ORDER NOW"}
          />
        </div>

        <div className={styles.greetImg}>
          <img src="/images/food8.png"/>
        </div>
      </div>

      <div className={styles.logo}>
        <img src="/images/logo_txt.png"></img>
      </div>
    </div>
  )
}

export default LandingPage
