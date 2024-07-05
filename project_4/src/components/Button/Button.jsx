import React from 'react'
import styles from './Button.module.css'

const Button = ({icon, text, ...rest}) => {
  return (
    <button 
    {...rest}
    className={styles.btn1}>
      {icon}
      {text}
    </button>
  )
}

export default Button