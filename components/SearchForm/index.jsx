import React, { useState } from "react";
import Button from "../core/Button";
import Input from "../core/Input";
import styles from "./index.module.css";
import { useApi } from "../../contexts/ApiContext";

function SearchForm() {
  const { searchShabad, searchResults, status } = useApi();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchShabad(query);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button disabled={query === ""} type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
