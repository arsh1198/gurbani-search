import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ShabadList from "../components/ShabadList";
import useShabads from "../hooks/use-shabads";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useShabads(query);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchForm query={query} setQuery={setQuery} loading={isLoading} />
        <ShabadList shabads={data?.shabads} />
      </main>
    </div>
  );
};

export default Home;
