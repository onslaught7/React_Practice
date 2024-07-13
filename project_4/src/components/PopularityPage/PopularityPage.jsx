import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './PopularityPage.module.css'
import { FaFilter } from "react-icons/fa";
import Button from '../Button/Button';

const PopularityPage = () => {
  const foods = ["food1.png", "food2.png", "food3.png", "food4.png", 
    "food5.png", "food6.png", "food7.png", "food8.png"];

  const foodTitles = [];

  return (
    <div>
    <Navbar />
      <div className={`${styles.popularity_container} container`}>
        <div className={styles.popularity_cards}>
          <div className={styles.filter_btns}>
          <Button 
            buttonType="btn2"
            icon=<FaFilter fontSize={"1.2rem"}/>
          />
          </div>
          <div className={styles.card}>
            <img src=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularityPage