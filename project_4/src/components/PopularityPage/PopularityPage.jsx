import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './PopularityPage.module.css'
import { FaFilter } from "react-icons/fa";
import Button from '../Button/Button';
import { FaSortAmountDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const PopularityPage = () => {
  const foods = ["food1.jpg", "food2.jpg", "food3.jpg", "food4.jpg", 
    "food5.jpg", "food6.jpg", "food7.jpg", "food8.jpg", "food1.jpg", 
    "food2.jpg", "food3.jpg", "food4.jpg", "food5.jpg", "food6.jpg", 
    "food7.jpg", "food8.jpg", "food1.jpg", "food2.jpg", "food3.jpg", 
    "food4.jpg", "food5.jpg", "food6.jpg", "food7.jpg", "food8.jpg"
  ];

  const foodTitles = ["Chicken Dum Biriyani", "Butter Chicken", "Samosa", "Garlic Naan",
    "Cauliflower and Potato Curry", "Aloo Chole", "Chef's Special Samosa", "Jeera Rice and Chicken Curry",
    "Chicken Dum Biriyani", "Butter Chicken", "Samosa", "Garlic Naan", "Cauliflower and Potato Curry", 
    "Aloo Chole", "Chef's Special Samosa", "Jeera Rice and Chicken Curry", "Chicken Dum Biriyani", 
    "Butter Chicken", "Samosa", "Garlic Naan", "Cauliflower and Potato Curry", "Aloo Chole", "Chef's Special Samosa", 
    "Jeera Rice and Chicken Curry",
  ];

  const handleClick = () => {
    
  } 

  return (
    <div>
      <div className={`${styles.popularity_container} container`}>
        <div className={styles.btns_container}>
          <h1>Our Most Pouplar</h1>
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
                  <button onClick={() => handleClick}>
                    <IoMdAdd/>
                  </button>
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