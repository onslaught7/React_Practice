import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Description.module.css';
import Button from '../Button/Button';
import { CgMoreVerticalR } from "react-icons/cg";
import { useState } from 'react';

const Description = () => {
  const images = ['about0.jpg', 'about1.jpg', 'about2.jpg'];

  const [setImage, handleSetImage] = useState(images[0])

  const handleImageChange = (imageNum) => {

  }

  return (
    <div>
      <Navbar />

      <div className={`${styles.slider} container`}>
        <div className={styles.list}>
          <div className={styles.item}>
            
            <div className={styles.content}>
              <h1 className={styles.title}>We Deliver not Food but an Experience</h1>
              <p className={styles.description}>
              Welcome to our restaurant, where the essence of India comes alive in 
              every bite. Here, we don't just serve food; we serve a tradition, a culture, 
              and a story that spans generations. Our chefs craft each dish with authentic 
              recipes and the freshest ingredients, ensuring every meal is a culinary masterpiece. 
              We take pride in our rave reviews and loyal patrons who swear by our flavors. 
              Come and taste for yourself why we're as exceptional as we claim to be. Your 
              journey to India begins here.
              </p>
              <Button
                buttonType="btn3"
                icon={<CgMoreVerticalR />}
              text={"ORDER NOW"}
              />
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
              <img onClick={handleImageChange(1)} 
              className={styles.cardImg} src="/images/about1.jpg"
              />
              </div>

              <div className={styles.card}>
              <img onClick={() => handleSetImage(images[2])} 
              className={styles.cardImg} src="/images/about2.jpg"
              />
              </div>
            </div>

            <img className={styles.backgroundImg} src={`/images/${setImage}`}/>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description