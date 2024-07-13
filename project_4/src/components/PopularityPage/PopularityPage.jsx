import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './PopularityPage.module.css'
import { FaFilter } from "react-icons/fa";
import Button from '../Button/Button';
import { FaSortAmountDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const PopularityPage = () => {
  const foods = ["food1.png", "food2.png", "food3.png", "food4.png", 
    "food5.png", "food6.png", "food7.png", "food8.png"];

  const foodTitles = ["Egg Biriyani", "Butter Chicken", "Samosa", "Garlic Naan",
    "Cauliflower Sabji", "Aloo Chole", "Chef's Special Samosa", "Jeera Rice and Chicken Curry"
  ];

  return (
    <div>
    <Navbar />
      <div className={`${styles.popularity_container} container`}>
        <div className={styles.btns_container}>
          <div className={styles.filter_btns}>
            <Button 
              buttonType="btn1"
              icon=<FaSortAmountDown />
              text={"ORDERS"}
            />
            <Button 
              buttonType="btn1"
              icon=<FaSortAmountDown />
              text={"RATINGS"}
            />
            <Button 
              buttonType="btn1"
              icon=<FaFilter />
              text={"FILTERS"}
            />
          </div>
        </div>

        <div className={styles.popularity_cards}> 
          {
            foods.map((name, index) => 
              <div className={styles.card} key={index}>
                <div className={styles.card_img}>
                  <img src={`/images/${name}`}/>
                </div>
                <div className={styles.card_title}>
                  <p>{foodTitles[index]}</p>
                  <button><IoMdAdd/></button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PopularityPage