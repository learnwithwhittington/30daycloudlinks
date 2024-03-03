'use client';

import styles from "./page.module.css";

import { USER_LINKS } from "./data/data.js";
import UserDetail from "./components/UserDetail";

export default function Home() {
  const links = USER_LINKS.filter((user) => !user.isSample);
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Cozy Cloud Crew 30-Day Cloud Challenge</h1>
        <p>This is a collection of blog posts from the Cozy Cloud Crew 30-Day Cloud Challenge.</p>
      </div>
      <div className={styles.userdetails}>
        <h3 className="text-center fw-bold">User Links</h3>
        {links.map((user, index) => { return <UserDetail key={index} user={user} />; })}
      </div>
    </main>
  );
}
