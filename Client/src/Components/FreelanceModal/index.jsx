/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import styles from "./index.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import freelanceSchema from "../../Validation/freelance.validation";
import axios from "axios";
import { DataContext } from "../../Context/dataContext";
import { useContext } from "react";
import Swal from "sweetalert2";

function FreelanceModal({ freeModal, setFreeModal }) {
  let store = useContext(DataContext);
  console.log(freeModal);

  const freeLanceFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      tel: "",
      email: "",
    },
    validationSchema: freelanceSchema,
    onSubmit: (values) => {
      let newWork = {
        ownerId: store.client.id,
        title: values.title,
        description: values.description,
        price: Number(values.price),
        tel: values.tel,
        email: values.email,
      };
      axios.post("http://localhost:2121/api/works", newWork).then(() => {
        Swal.fire({
          title: "Successfully!",
          text: "Work shared!",
          icon: "success",
        });
        freeLanceFormik.resetForm();
        store.works.setFilter([...store.works.data, newWork]);
        store.works.setWork([...store.works.data, newWork]);
        console.log(store.works.filterData);
      });
    },
  });
  return (
    <div
      style={freeModal == "close" ? { display: "none" } : { display: "flex" }}
      className={styles.glass}
    >
      <div
        style={
          freeModal == "close"
            ? { transform: "scaleY(0)" }
            : { transform: "scaleY(1)" }
        }
        className={styles.freelanceModal}
      >
        <form action="" onSubmit={freeLanceFormik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            onChange={freeLanceFormik.handleChange}
            value={freeLanceFormik.values.title}
          />
          <p>{freeLanceFormik.errors.title && freeLanceFormik.errors.title}</p>
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            multiline
            minRows={6}
            onChange={freeLanceFormik.handleChange}
            value={freeLanceFormik.values.description}
          />
          <p>
            {freeLanceFormik.errors.description &&
              freeLanceFormik.errors.description}
          </p>
          <TextField
            type="number"
            label="Price"
            variant="outlined"
            name="price"
            onChange={freeLanceFormik.handleChange}
            value={freeLanceFormik.values.price}
          />
          <p>{freeLanceFormik.errors.price && freeLanceFormik.errors.price}</p>
          <TextField
            label="Phone"
            variant="outlined"
            name="tel"
            onChange={freeLanceFormik.handleChange}
            value={freeLanceFormik.values.tel}
          />
          <p>{freeLanceFormik.errors.tel}</p>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            onChange={freeLanceFormik.handleChange}
            value={freeLanceFormik.values.email}
          />
          <p>{freeLanceFormik.errors.email && freeLanceFormik.errors.email}</p>
          <div className={styles.btn}>
            <Button
              onClick={() => {
                setFreeModal("close");
              }}
              className={styles.subBtn}
              type="submit"
              variant="contained"
            >
              Share
            </Button>
            <Button
              className={styles.clsBtn}
              onClick={() => {
                setFreeModal("close");
              }}
              variant="contained"
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FreelanceModal;
