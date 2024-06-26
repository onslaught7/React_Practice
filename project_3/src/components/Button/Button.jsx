import styles from "./Button.module.css";

const Button = ({isBtn2, icon, text, ...rest}) => {
  return (
    <button 
      {...rest}
      className={isBtn2 ? styles.btn : styles.btn2}
    >
        {icon}
        {text}
    </button>
  );
};

export default Button;