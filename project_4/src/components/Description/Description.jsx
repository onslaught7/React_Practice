import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Description.module.css';

const Description = () => {
  return (
    <div>
      <Navbar />

      <div className={`${styles.descPage} container`}>
        <div className={styles.descAboutSlide}>
          <div>
            <img />
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