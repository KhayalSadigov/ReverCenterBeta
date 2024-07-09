/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import { useFormik } from "formik";
import signInSchema from "../../Validation/signin.validation";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import signUpSchema from "../../Validation/signup.validation";
import axios from "axios";

function SignPage() {
  let [mode, setMode] = useState("signUp");
  let [errorIn, setErrorIn] = useState(" ");
  let [errorUp, setErrorUp] = useState(" ");
  let [passIn, setPassIn] = useState(false);
  let [passUp, setPassUp] = useState(false);
  let store = useContext(DataContext);
  store.location.setPathname(window.location.pathname);

  const upFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      let boolClient = false;
      store.users.data.map((e, i) => {
        if (e.username == values.username) {
          setErrorUp("This username is already in use!");
          boolClient = false;
        } else if (e.mail == values.email) {
          setErrorUp("This mail is already in use!");
          boolClient = false;
        } else {
          setErrorUp(" ");
          boolClient = true;
        }
      });
      if (boolClient == true) {
        axios
          .post("http://localhost:2121/api/users", {
            username: values.username,
            biography: "notBioForRever733",
            password: values.password,
            src: "./../../../public/images/depositphotos_251916955-stock-illustration-user-glyph-color-icon.jpg",
            role: "client",
            wishlist: [],
            mail: values.email,
            rank: 0,
          })
          .then(async () => {
            await axios.get("http://localhost:2121/api/users").then((res) => {
              store.users.setUser(res.data);
              console.log(store.users.data);
            });
            Swal.fire({
              title: "Successfully!",
              icon: "success",
            });
            upFormik.resetForm();
            setMode("signIn");
          });
      }
    },
  });

  const inFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      let boolClient = false;
      let userId;
      store.users.data.map((e, i) => {
        if (e.username == values.username && e.password == values.password) {
          boolClient = true;
          store.client.setLocalClient(e._id);
          console.log(e._id);
          localStorage.setItem("client", JSON.stringify(e._id));
        }
      });

      if (boolClient == true) {
        inFormik.resetForm();
        setErrorIn(" ");
        Swal.fire({
          position: "top-end",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setInterval(() => {
          window.location.replace("/");
        }, 2000);
      } else {
        setErrorIn("Username or password is incorrect !");
      }
    },
  });

  return (
    <div className={styles.signPage}>
      <div className={styles.content}>
        <div className={styles.signIn}>
          <h2>Sign in to your account</h2>
          <form onSubmit={inFormik.handleSubmit}>
            <TextField
              label="User name"
              variant="outlined"
              name="username"
              onChange={inFormik.handleChange}
              value={inFormik.values.username}
            />
            <p className={styles.errorIn}>{inFormik.errors.username}</p>
            <div className={styles.password}>
              <TextField
                type={passIn ? "text" : "password"}
                label="Password"
                variant="outlined"
                className={styles.input}
                name="password"
                onChange={inFormik.handleChange}
                value={inFormik.values.password}
              />
              <VisibilityIcon
                style={
                  passIn
                    ? { color: "#005f83" }
                    : { color: "rgb(116, 116, 116)" }
                }
                className={styles.icon}
                onClick={() => {
                  setPassIn(!passIn);
                }}
              />
            </div>
            <p className={styles.errorIn}>{inFormik.errors.password}</p>
            <p className={styles.errorIn}>{errorIn}</p>
            <Button type="submit" className={styles.btn} variant="contained">
              Login
            </Button>
          </form>
          <div className={styles.or}>
            <hr />
            <p>or</p>
            <hr />
          </div>
          <h4>
            Don't have an account ?{" "}
            <i
              onClick={() => {
                setMode("signUp");
              }}
            >
              Sign Up
            </i>
          </h4>
        </div>

        <div className={styles.signUp}>
          <h2>Create an account</h2>
          <form onSubmit={upFormik.handleSubmit}>
            <TextField
              label="UserName"
              variant="outlined"
              name="username"
              onChange={upFormik.handleChange}
              value={upFormik.values.username}
            />
            <p className={styles.errorUp}>{upFormik.errors.username}</p>

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={upFormik.handleChange}
              value={upFormik.values.email}
            />

            <p className={styles.errorUp}>{upFormik.errors.email}</p>

            <div className={styles.password}>
              <TextField
                type={passUp ? "text" : "password"}
                label="Password"
                variant="outlined"
                name="password"
                className={styles.input}
                onChange={upFormik.handleChange}
                value={upFormik.values.password}
              />
              <VisibilityIcon
                style={
                  passUp
                    ? { color: "#005f83" }
                    : { color: "rgb(116, 116, 116)" }
                }
                onClick={() => {
                  setPassUp(!passUp);
                }}
                className={styles.icon}
              />
            </div>
            <p className={styles.errorUp}>{upFormik.errors.password}</p>
            <p className={styles.errorUp}>{errorUp}</p>
            <Button type="submit" className={styles.btn} variant="contained">
              Sign Up!
            </Button>
          </form>
          <div className={styles.or}>
            <hr />
            <p>or</p>
            <hr />
          </div>
          <a href="#">Signup with Google</a>
          <h4>
            I'm already a member !{" "}
            <i
              onClick={() => {
                setMode("signIn");
              }}
            >
              Sign In
            </i>
          </h4>
        </div>
        <div
          className={styles.banner}
          style={mode == "signIn" ? { right: "0" } : { right: "50%" }}
        >
          <h2>Welcome to {mode == "signIn" ? "sign in" : "sign up"} form</h2>
          <p>Rever with you Forever!</p>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
