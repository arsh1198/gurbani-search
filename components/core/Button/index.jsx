import React from "react";
import styles from "./index.module.css";

function Button({ children, ...rest }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
