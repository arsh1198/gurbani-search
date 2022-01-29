import SearchForm from "../components/SearchForm";
import ShabadList from "../components/ShabadList";
import { useApi } from "../contexts/ApiContext";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { searchResults } = useApi();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchForm />
        <ShabadList shabads={searchResults.shabads} />
      </main>
    </div>
  );
};

export default Home;
