import ReactIcon from "../assets/react.svg"
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <img className={styles["Home-icon"]} src={ReactIcon} alt="React Icon" />
      <h1 className={styles["Home-title"]}>React + TypeScript + Webpack Template</h1>
    </div>
  )
}
