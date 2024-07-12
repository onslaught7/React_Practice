import React from 'react'
import styles from './Button.module.css'
import { GiClassicalKnowledge } from 'react-icons/gi';

const Button = ({buttonType, icon, text, ...rest}) => {
  let className;
  
  switch(buttonType) {
    case "btn1":
      className = styles.btn1;
      break;
    
    case "btn2":
      className = styles.btn2;
      break;

    case "btn3":
      className = styles.btn3;
  }

  return (
    <button 
    {...rest}
    className={className}>
      {icon}
      {text}
    </button>
  )
}

export default Button