import styles from "./page.module.css";
import { GridDnD } from "@/components/GridDnD";

export default function Home() {
  return (
    <main className={styles.main}>
      <GridDnD />
    </main>
  );
}
