import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({text}) =>{
    return <button className={styles.btn}>{text}</button>
}

Button.propType ={
    text: PropTypes.string.isRequired,
};

export default Button; // App.js 에서 가져갈수 있게 export