import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Description.module.css';
import Button from '../Button/Button';
import { CgMoreVerticalR } from "react-icons/cg";

const Description = () => {
  return (
    <div>
      <Navbar />

      <div className={`${styles.slider} container`}>
        <div className={styles.list}>
          <div className={styles.item}>
            
            <div className={styles.content}>
              <h1 className={styles.title}>ABOUT US</h1>
              <p className={styles.description}></p>
              <Button
                buttonType="btn3"
                icon={<CgMoreVerticalR />}
              text={"ORDER NOW"}
              />
            </div>

            <img src="/images/aboutUs.jpg"/>
          </div>
          <div></div>
        </div>

        <div className={styles.descPopularCardSlide}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Description