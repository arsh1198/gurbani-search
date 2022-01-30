import React, { InputHTMLAttributes } from "react";
import styles from "./index.module.css";
import Loader from "../Loader";

interface Props
  extends React.DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {
  loading?: boolean;
}

const Input = ({ loading, ...props }: Props) => {
  return (
    <div className={styles.input}>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        className={styles.reset}
        type="text"
        {...props}
      ></input>
      {loading && <Loader />}
    </div>
  );
};

export default Input;
