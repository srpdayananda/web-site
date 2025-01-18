import Link from "next/link";
import styles from "./index.module.css";

const TopBar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.leftSide}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="" className={styles.link}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <ul className={styles.navLinks}></ul>
        </div>
      </nav>
    );
  };
  
  export default TopBar;