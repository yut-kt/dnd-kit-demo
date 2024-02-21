"use client";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const GridDnD = dynamic(
  () => import("@/components/GridDnD").then((mod) => mod.GridDnD),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function Home() {
  return (
    <main className={styles.main}>
      <GridDnD />
    </main>
  );
}
