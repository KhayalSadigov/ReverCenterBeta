import styles from "./index.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import QuizIcon from "@mui/icons-material/Quiz";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

function Footer() {

  let store = useContext(DataContext);


  return (
    <footer style={store.location.pathname == '/sign' || store.location.pathname == '/community' ? {display : 'none'} : {display:'block'} }>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.slice}>
            <div className={styles.logoSection}>
              <div className={styles.logo}></div>
              <h1>Rever Center</h1>
              <h2>Because young people understand young people!</h2>
              <div className={styles.links}>
                <a href="https://www.instagram.com/reveracademy.az">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/company/reveracademy/?viewAsMember=true">
                  <LinkedInIcon />
                </a>
                <a href="https://wa.me/994515411358">
                  <WhatsAppIcon />
                </a>
                <a href="https://www.youtube.com/@rever-academy">
                  <YouTubeIcon />
                </a>
              </div>
              <hr />
              <p>
                Career, education, work, community and various services are
                here. This place is perfect for you!
              </p>
            </div>
          </div>
          <div className={styles.slice}>
            <div className={styles.people}>
              <div className={styles.title}>
                <div className={styles.logo}></div>
                <h1>People</h1>
              </div>
              <p className={styles.dev}>
                Rever Center was Developed by <a href="">Khayal Sadigov</a>
              </p>
              <hr />
              <ul>
                <h5>Thanks for your support:</h5>
                <li>
                  <IntegrationInstructionsIcon />{" "}
                  <a href="">Maryam Agazada |</a>| Developer
                </li>
                <li>
                  <DesignServicesIcon /> <a href=".hero">Shams Isazada |</a> |
                  Designer
                </li>
                <li>
                  <QuizIcon /> <a href="">Elton Safarli |</a> | Tester
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.slice}>
            <div className={styles.teacher}>
              <div className={styles.title}>
                <div className={styles.logo}></div>
                <h1>Teachers</h1>
              </div>
              <p>
                The mentioned persons are actively engaged in teaching at Rever
                Academy
              </p>
              <hr />
              <ul>
                <li>
                  <ArrowForwardIcon /> <a href="">Aladdin Alizada</a>
                </li>
                <li>
                  <ArrowForwardIcon /> <a href="">Fatma Guliyeva</a>
                </li>
                <li>
                  <ArrowForwardIcon /> <a href="">Zarda Gasimli</a>
                </li>
                <li>
                  <ArrowForwardIcon /> <a href="">Fidan Rasulzada</a>
                </li>
                <li>
                  <ArrowForwardIcon /> <a href="">Sanan Guliyev</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.slice}>
            <div className={styles.explore}>
              <div className={styles.title}>
                <div className={styles.logo}></div>
                <h1>Explore</h1>
              </div>
              <Link to={"/"} className={styles.link}>
                <ArrowForwardIcon />
                <p>Home</p>
              </Link>
              <Link to={"/community"} className={styles.link}>
                <ArrowForwardIcon />
                <p>Community</p>
              </Link>
              <Link to={"/service"} className={styles.link}>
                <ArrowForwardIcon />
                <p>Services</p>
              </Link>
              <Link to={"/study"} className={styles.link}>
                <ArrowForwardIcon />
                <p>Study</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
