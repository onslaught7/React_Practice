import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Description.module.css';
import Button from '../Button/Button';
import { CgMoreVerticalR } from "react-icons/cg";

const Description = () => {
  const images = ['about0.jpg', 'about1.jpg', 'about2.jpg'];
  const titles = [
    'We Deliver not Food but an Experience', 
    'We Provide the Finest Indian Dining Experiences',
    'Experience the Best and the Most Colorful Cuisine the Authentic Way'
  ];
  const descriptions = ["Welcome to our restaurant, where the essence of India comes alive in every bite. Here, we don't just serve food; we serve a tradition, a culture, and a story that spans generations. Our chefs craft each dish with authentic recipes and the freshest ingredients, ensuring every meal is a culinary masterpiece. We take pride in our rave reviews and loyal patrons who swear by our flavors. Come and taste for yourself why we're as exceptional as we claim to be. Your journey to India begins here.",
    "Welcome to a world where luxury meets tradition in every dish. At our restaurant, we pride ourselves on offering the finest Indian dining experiences. Our chefs are artisans, meticulously preparing each meal with an unwavering commitment to quality and authenticity. From the tantalizing aromas to the exquisite presentation, every aspect of our service is designed to delight your senses. Indulge in a culinary journey that transcends ordinary dining and discover why we are the preferred destination for those seeking the pinnacle of Indian cuisine.",
    "Step into a vibrant celebration of India's diverse culinary heritage. Our restaurant invites you to experience the best and most colorful cuisine the authentic way. Each dish is a testament to the rich tapestry of Indian flavors, prepared with traditional techniques and the finest ingredients. From the lively spices to the bold, fresh ingredients, we bring the true essence of India to your table. Join us for a dining experience that is as visually stunning as it is delicious, and let our food transport you to the heart of Indian culture."
  ];
  const buttons = ["ORDER NOW", "BOOK TABLE", "VIEW MENU"];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [currentButton, setCurrentButton] = useState(buttons[0]);

  useEffect(() => {
    const content = document.querySelector(`.${styles.content}`);
    const backgroundImg = document.querySelector(`.${styles.backgroundImg}`);
    const title = document.querySelector(`.${styles.title}`);
    const description = document.querySelector(`.${styles.description}`);

    content.classList.add(styles['fade-in']);
    backgroundImg.classList.add(styles['fade-in']);
    title.classList.add(styles['slide-in']);
    description.classList.add(styles['slide-in']);
  }, [currentImage, currentTitle, currentDescription, currentButton]);

  const handleImageChange = (imageNum) => {
    const content = document.querySelector(`.${styles.content}`);
    const backgroundImg = document.querySelector(`.${styles.backgroundImg}`);
    const title = document.querySelector(`.${styles.title}`);
    const description = document.querySelector(`.${styles.description}`);

    content.classList.remove(styles['fade-in']);
    backgroundImg.classList.remove(styles['fade-in']);
    title.classList.remove(styles['slide-in']);
    description.classList.remove(styles['slide-in']);

    setTimeout(() => {
      setCurrentImage(images[imageNum]);
      setCurrentTitle(titles[imageNum]);
      setCurrentDescription(descriptions[imageNum]);
      setCurrentButton(buttons[imageNum]);
    }, 10);
  };

  return (
    <div>
      {/* <Navbar /> */}

      <div className={`${styles.slider} container`}>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.title}>{currentTitle}</h1>
              <p className={styles.description}>
                {currentDescription}
              </p>
              <Button
                buttonType="btn3"
                icon={<CgMoreVerticalR />}
                text={currentButton}
              />
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <img onClick={() => { handleImageChange(0) }} 
                className={styles.cardImg} src={`/images/${images[0]}`} />
              </div>

              <div className={styles.card}>
                <img onClick={() => { handleImageChange(1) }} 
                className={styles.cardImg} src={`/images/${images[1]}`} />
              </div>

              <div className={styles.card}>
                <img onClick={() => { handleImageChange(2) }} 
                className={styles.cardImg} src={`/images/${images[2]}`} />
              </div>
            </div>

            <img className={styles.backgroundImg} src={`/images/${currentImage}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
