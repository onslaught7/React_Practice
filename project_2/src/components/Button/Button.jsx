import styles from "./Button.module.css";

const Button = ({isBtn1, icon, text, ...rest}) => {
  return ( 
    <button 
    {...rest}
    className={isBtn1 ? styles.primary_btn_1 : styles.primary_btn_2}
    >
       {icon}
       {text}
    </button>
  );
};

export default Button;

// the above function is the same as the below
// const Button = (props) => {
//   const {isBtn1, icon, text} = props;
  
//   return ( 
//     <button className={isBtn1 ? styles.primary_btn_1 : styles.primary_btn_2}
//     >
//        {icon}
//        {text}
//     </button>
//   );
// };

// export default Button;