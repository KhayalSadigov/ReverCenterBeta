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
import messageSchema from "../../Validation/messages.validation";
import { DataContext } from "../../Context/dataContext";
import { useContext } from "react";
function HomePage() {
  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: mailSchema,
    onSubmit: async (values) => {
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
    },
  });
  let store = useContext(DataContext);
  store.location.setPathname(window.location.pathname);
  console.log(store.client.id)
  const messageFormik = useFormik({
    initialValues: {
      email: "",
      title: "",
      message: "",
    },
    validationSchema: messageSchema,
    onSubmit: async (values) => {
      axios
        .post("http://localhost:2121/api/messages", {
          title: values.title,
          content: values.message,
          email: values.email,
          status: false,
        })
        .then(() => {
          messageFormik.resetForm();
          Swal.fire({
            title: "Successfully!",
            text: "Your message sended to us!",
            icon: "success",
          });
        });
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
              <a href="#about" className={styles.getBtn}>
                What is the purpose?
              </a>
              <a href="#contact" className={styles.aboutBtn}>
                Contact Us!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.second}>
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
                    Share your thoughts about your field of expertise, get help
                    in difficult situations, help beginners!
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <SchoolIcon fontSize="large" className={styles.icon} />
                <div>
                  <h5>Study</h5>
                  <p>
                    Entrust your education to us, become an expert by getting
                    help from experts, and keep up with the times!!
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
                    Our various services are ready for you! Entrust your work to
                    professionals, enjoy quality!
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

      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles.content}>
            <h1>Contact Us!</h1>
            <form onSubmit={messageFormik.handleSubmit}>
              <TextField
                className={styles.input}
                label="Mail address"
                variant="outlined"
                name="email"
                onChange={messageFormik.handleChange}
                value={messageFormik.values.email}
              />
              {messageFormik.errors.email ? (
                <span>{messageFormik.errors.email} !</span>
              ) : (
                <span></span>
              )}
              <TextField
                className={styles.input}
                label="Title"
                variant="outlined"
                name="title"
                onChange={messageFormik.handleChange}
                value={messageFormik.values.title}
              />
              {messageFormik.errors.title ? (
                <span>{messageFormik.errors.title} !</span>
              ) : (
                <span></span>
              )}
              <TextField
                className={styles.input}
                label="Message"
                variant="outlined"
                multiline
                minRows={8}
                name="message"
                onChange={messageFormik.handleChange}
                value={messageFormik.values.message}
              />
              {messageFormik.errors.message ? (
                <span>{messageFormik.errors.message} !</span>
              ) : (
                <span></span>
              )}

              <Button
                type="submit"
                variant="contained"
                className={styles.submitBtn}
              >
                Send Message
              </Button>
            </form>
            <div className={styles.image}></div>
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
