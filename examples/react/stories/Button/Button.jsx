import React from "react";
import styles from "./Button.module.css"

const Button = (props) => (
  <button className={styles.Button} {...props} />
)

export default Button;