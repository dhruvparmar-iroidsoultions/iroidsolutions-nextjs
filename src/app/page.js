import styles from "./page.module.css";
import "./page.css";
import HomePage from "@/pages/home/";

export default function Home(props) {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
