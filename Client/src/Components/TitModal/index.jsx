/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { DataContext } from "../../Context/dataContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CancelIcon from "@mui/icons-material/Cancel";
import titbitSchema from "../../Validation/titbit.validation";

function TitModal({ titModal, setTitModal }) {
  let store = useContext(DataContext);


  // Data Base Yetərsizliyi !!!!!!!!!!!!!!!!!!!
  // function getBase64(file) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     setImage(reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  // }

  const titbitFormik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: titbitSchema,
    onSubmit: (values) => {
      let newPost = new Object();
      let date =
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear();
      console.log(date);
      newPost.ownerId = store.client.id;
      newPost.content = values.content;
      newPost.likes = [];
      newPost.comment = [];
      newPost.date = date;
      console.log(newPost);
      axios.post("http://localhost:2121/api/posts", newPost).then((res) => {
        setTitModal("close");
        titbitFormik.resetForm();
        store.posts.setPost([...store.posts.data, res.data]);
        Swal.fire({
          title: "Successfully!",
          text: "Work shared!",
          icon: "success",
        });
      });
    },
  });
  return (
    <div
      style={titModal == "close" ? { display: "none" } : { display: "flex" }}
      className={styles.glass}
    >
      <div className={styles.titModal}>
        <form className="titbitForm" onSubmit={titbitFormik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Write Somethink . . ."
            variant="outlined"
            name="content"
            multiline
            minRows={6}
            onChange={titbitFormik.handleChange}
            value={titbitFormik.values.content}
          />
          <p>
            {titbitFormik.errors.content &&
              titbitFormik.errors.content}
          </p>
          <div className={styles.icons}>
            <div className={styles.btns}>
              <CancelIcon
                style={{ color: "red", cursor: "pointer" }}
                fontSize="large"
                onClick={() => {
                  setTitModal("close");
                  titbitFormik.handleReset();
                }}
              />
              <SaveAsIcon
                fontSize="large"
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => {
                  setTitModal("close");
                }}
              />
              <button title="Share" type="submit">
                <SendIcon fontSize="large" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TitModal;
