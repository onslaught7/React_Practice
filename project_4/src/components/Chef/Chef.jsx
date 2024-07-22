import React from 'react'
import styles from './Chef.module.css'

const Chef = () => {
  const chefs = ['chef1', 'chef2', 'chef3'];
  const names = ['Chef Name One', 'Chef Name Two', 'Chef Name Three'];
  const intro = [
    'Head Chef', 
    'Assistant Head Chef', 
    'Assistant Head Chef'
  ];

  return (
    <div className={`${styles.chef_container} container`}>
      {
        chefs.map((name, index) => 
          <div className={styles.chef_profile}>
              <img src={`/images/${name}.jpg`}/>
              <div className={styles.chef_info}>
                <h1>{names[index]}</h1>
                <p>{intro[index]}</p>
              </div>
          </div>
        )
      }
    </div>
  )
}

export default Chef