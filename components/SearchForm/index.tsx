import React from "react";
import Button from "../core/Button";
import Input from "../core/Input";
import styles from "./index.module.css";

const SearchForm = ({ query, setQuery, loading }) => {
  return (
    <form className={styles.formContainer}>
      <Input
        loading={loading}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button disabled={query === ""} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
