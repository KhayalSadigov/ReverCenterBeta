/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import styles from "./index.module.scss";
import SendIcon from "@mui/icons-material/Send";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import axios from "axios";
import Swal from "sweetalert2";
import blogSchema from "../../Validation/blog.validation";

function BlogModal({ blogModal, setBlogModal }) {
  let store = useContext(DataContext);

  const blogFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      cover: "",
    },
    validationSchema : blogSchema ,
    onSubmit: (values) => {
      let newBlog = new Object();
      newBlog.date =
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear();
      newBlog.title = values.title;
      newBlog.description = values.description;
      newBlog.cover = values.cover;
      newBlog.ownerId = store.client.id;
      newBlog.status = true;
      axios.post("http://localhost:2121/api/blogs", newBlog).then((res) => {
        store.blogs.setBlog([...store.blogs.data, res.data]);
        Swal.fire({
          title: "Successfully!",
          text: "Work shared!",
          icon: "success",
        });
        setBlogModal("close");
      });
    },
  });
  return (
    <div
      style={blogModal == "close" ? { display: "none" } : { display: "flex" }}
      className={styles.glass}
    >
      <div className={styles.blogModal}>
        <form className="titbitForm" onSubmit={blogFormik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            onChange={blogFormik.handleChange}
            value={blogFormik.values.title}
          />
          <p>{blogFormik.errors.title && blogFormik.errors.title}</p>
          <TextField
            id="outlined-basic"
            label="Cover URL"
            variant="outlined"
            name="cover"
            onChange={blogFormik.handleChange}
            value={blogFormik.values.cover}
          />
          <p>{blogFormik.errors.title && blogFormik.errors.title}</p>
          <TextField
            id="outlined-basic"
            label="Write blog content !"
            variant="outlined"
            name="description"
            multiline
            rows={12}
            onChange={blogFormik.handleChange}
            value={blogFormik.values.description}
          />
          <p>{blogFormik.errors.title && blogFormik.errors.title}</p>
          <div className={styles.icons}>
            <div className={styles.btns}>
              <CancelIcon
                style={{ color: "red", cursor: "pointer" }}
                fontSize="large"
                onClick={() => {
                  setBlogModal("close");
                  blogFormik.handleReset();
                }}
              />
              <SaveAsIcon
                fontSize="large"
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => {
                  setBlogModal("close");
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

export default BlogModal;
