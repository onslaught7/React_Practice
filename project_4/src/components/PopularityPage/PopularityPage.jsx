import React, { useState } from 'react';
import { FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { BsDashLg } from 'react-icons/bs';
import styles from './PopularityPage.module.css';
import Button from '../Button/Button';

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

  const [counts, setCounts] = useState(Array(foods.length).fill(0));

  const handleAddClick = (index) => {
    const newCounts = [...counts];
    newCounts[index] = 1;
    setCounts(newCounts);
  };

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
    } else {
      newCounts[index] = 0;
    }
    setCounts(newCounts);
  };

  return (
    <div>
      <div className={`${styles.popularity_container} container`}>
        <div className={styles.btns_container}>
          <h1>Our Most Popular</h1>
          <div className={styles.filter_btns}>
            <Button 
              buttonType="btn1"
              icon={<FaSortAmountDown />}
              text={"ORDERS"}
            />
            <Button 
              buttonType="btn1"
              icon={<FaSortAmountDown />}
              text={"RATINGS"}
            />
            <Button 
              buttonType="btn1"
              icon={<FaFilter />}
              text={"FILTERS"}
            />
          </div>
        </div>

        <div className={styles.popularity_cards}>
          {
            foods.map((name, index) => 
              <div className={styles.card} key={index}>
                <div className={styles.card_img}>
                  <img src={`/images/${name}`} alt={foodTitles[index]} />
                </div>
                <div className={styles.card_title}>
                  <p>{foodTitles[index]}</p>
                  {
                    counts[index] === 0 ? 
                    <button 
                      className={styles.addFood}
                      onClick={() => handleAddClick(index)}>
                      <IoMdAdd />
                    </button> 
                    : 
                    <div className={styles.foodCount}>
                      <button onClick={() => handleDecrement(index)}>
                        <BsDashLg />
                      </button>
                      <p>{counts[index]}</p>
                      <button onClick={() => handleIncrement(index)}>
                        <IoMdAdd />
                      </button>
                    </div>
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default PopularityPage;
