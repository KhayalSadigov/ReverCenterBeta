import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { DataContext } from "./../../Context/dataContext";
function Header() {
  let store = useContext(DataContext);
  
  return (
    <header className={styles.header} style={store.location.pathname == '/sign' ? {display : 'none'} : {display:'block'} }>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.ham}>
            <MenuIcon fontSize="large" className={styles.hamBtn} />
          </div>
          <ul>
            <img style={{width:'60px', borderRadius:'50%'}} src="./../../../public/images/LogoNewEra.jpg" alt="" />
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
          </ul>
          <div className={styles.sign}>
            {store.client.id ? (
              <div className={styles.inBtns}>
                <Link to={'/profile'} className={styles.profileBtn}><AccountCircleIcon fontSize="large" className={styles.btn} /></Link>
              </div>
            ) : (
              <Link className={styles.signBtn} to={'/sign'}><h3>Sign Up!</h3></Link>
            )}
          </div>
          <div className={styles.decor}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
