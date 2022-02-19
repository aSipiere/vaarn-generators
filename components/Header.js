import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/region">Region</Link>
      <Link href="/assorted">Assorted Generators</Link>
      <Link href="/the-infinity-vault">The Infinity Vault</Link>
    </header>
  );
};

export default Header;
