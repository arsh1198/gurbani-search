import { Loader } from "../components/core/Loader";
import SearchForm from "../components/SearchForm";
import ShabadList from "../components/ShabadList";
import { useApi } from "../contexts/ApiContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { searchResults } = useApi();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchForm />
        <ShabadList shabads={searchResults.shabads} />
      </main>
    </div>
  );
}
