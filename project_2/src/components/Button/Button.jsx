import styles from "./Button.module.css";

const Button = (props) => {
  return ( 
    <button className={props.isBtn1 ? styles.primary_btn_1 : styles.primary_btn_2}
    >
       {props.icon}
       {props.text}
    </button>
  );
};

export default Button;