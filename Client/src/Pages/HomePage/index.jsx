import styles from "./index.module.scss";
import ForumIcon from "@mui/icons-material/Forum";
import SchoolIcon from "@mui/icons-material/School";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import mailSchema from "../../Validation/mails.validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
function HomePage() {
  const [mails, setMails] = useState([]);
  const [checkMail, setCheck] = useState(true);
  function testMail(array, test) {
    for (let index = 0; index < array.length; index++) {
      if (array[index].mail == test) {
        setCheck(false);
        break;
      }
    }
  }
  useEffect(() => {
    axios.get("http://localhost:2121/api/mails").then((res) => {
      setMails(res.data);
      console.log(res.data)
    });
  }, []);
  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: mailSchema,
    onSubmit: async (values) => {
      await testMail(mails, values.email);
      if (checkMail) {
        axios
          .post("http://localhost:2121/api/mails", {
            mail: values.email,
            status: false,
          })
          .then(() => {
            emailFormik.resetForm();
            Swal.fire({
              title: "Successfully!",
              text: "You followed us",
              icon: "success",
            });
          });
      }
      else{
        Swal.fire({
          title: "This email has been used!",
          text: "",
          icon: "warning",
        });
      }
    },
  });

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <p className={styles.welcome}>Welcome to Rever Center</p>
            <h1 className={styles.header}>
              Because young people understand young people!
            </h1>
            <p className={styles.description}>
              Career, education, work, community and various services are here.
              This place is perfect for you!
            </p>
            <div className={styles.btns}>
              <span className={styles.getBtn}>Get started!</span>
              <span className={styles.aboutBtn}>About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.second}>
        <div className={styles.right}></div>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={styles.header}>
              <p>About Us</p>
              <h1>What is the purpose of Rever Center?</h1>
              <hr />
            </div>
            <div className={styles.cardList}>
              <div className={styles.card}>
                <ForumIcon fontSize="large" className={styles.icon} />
                <div>
                  <h5>Community</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <SchoolIcon fontSize="large" className={styles.icon} />
                <div>
                  <h5>Study</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <MiscellaneousServicesIcon
                  fontSize="large"
                  className={styles.icon}
                />
                <div>
                  <h5>Services</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deleniti vel facere beatae animi non soluta saepe.
                    Doloremque architecto assumenda libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.firstBanner}>
        <div className={styles.glass}>
          <h1>Rever With You Forever!</h1>
        </div>
      </section>
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.content}>
            <h1>Contact Us!</h1>
            <form>
              <TextField label="Outlined" variant="outlined" />
              <TextField label="Outlined" variant="outlined" />
              <TextField
                multiline
                label="Outlined"
                variant="outlined"
                minRows={6}
              />
              <Button variant="contained" className={styles.submitBtn}>
                Send Message
              </Button>
            </form>
            <div className={styles.image}>

            </div>
          </div>
        </div>
      </section>
      <section className={styles.subsicribe}>
        <div className="container">
          <div className={styles.content}>
            <div>
              <h1>Stay tune and get the latest update !</h1>
              <p>Rever with you forever!</p>
            </div>
            <div className={styles.input}>
              <form onSubmit={emailFormik.handleSubmit}>
                <input
                  className="mailInput"
                  placeholder="Enter email address"
                  id="email"
                  name="email"
                  onChange={emailFormik.handleChange}
                  value={emailFormik.values.email}
                />
                <button type="submit" className={styles.sendIcon}>
                  <SendIcon className={styles.icon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
