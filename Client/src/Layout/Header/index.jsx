import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.ham}>
            <MenuIcon fontSize="large" className={styles.hamBtn} />
          </div>
          <ul>
            <li>
              <Link className={styles.btn} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.btn} to={"/community"}>
                Community
              </Link>
            </li>
            <li>
              <Link className={styles.btn} to={"/service"}>
                Services
              </Link>
            </li>
            <li>
              <Link className={styles.btn} to={"/study"}>
                Study
              </Link>
            </li>
          </ul>
          <div className={styles.sign}>
            <h3>Sign Up!</h3>
          </div>
          <div className={styles.decor}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
