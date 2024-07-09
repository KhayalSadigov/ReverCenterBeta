import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import TextField from "@mui/material/TextField";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

import axios from "axios";
import Swal from "sweetalert2";
function ProfilePage() {
  let store = useContext(DataContext);
  if(!store.client.id)
    {
      window.location.replace('/')
    }
  store.location.setPathname(window.location.pathname);
  let [user, setUser] = useState({ _id: null });
  let [mode, setMode] = useState("titbit");
  function findUser(id) {
    let find;
    store.users.data.forEach((e) => {
      if (e._id && e._id == id) {
        find = e;
      }
    });
    return find && find;
  }
  useEffect(() => {
    axios
      .get("http://localhost:2121/api/users/" + store.client.id)
      .then((res) => {
        setUser(res.data);
      });
  }, []);
  console.log(user);
  return (
    <div className={styles.profile}>
      <div className={styles.banner}></div>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.image}>
                <img src={user && user.src} alt="" />
              </div>
              <div className={styles.name}>
                <h1>{user && user.username}</h1>
              </div>
            </div>
            <div className={styles.right}>
              <span
                onClick={() => {
                  localStorage.setItem("client", JSON.stringify(null));
                  store.client.setLocalClient(null);
                  setUser(null);
                }}
              >
                Log out
              </span>
            </div>
          </div>
          <div className={styles.shared}>
            <div className={styles.blogs}>
              <div className={styles.search}>
                <TextField
                  id={styles.search}
                  label="Search blog"
                  variant="outlined"
                  className={styles.input}
                  onChange={(e) => {
                    store.blogs.setFilter([
                      ...store.blogs.data.filter((a) => {
                        return a.title
                          .trim()
                          .toLocaleLowerCase()
                          .includes(e.target.value.trim().toLocaleLowerCase());
                      }),
                    ]);
                  }}
                />
              </div>
              <div className={styles.data}>
                {store.blogs.filterData &&
                  store.blogs.filterData.map((e, i, arr) => {
                    if (e.status == "true" && user._id && e.ownerId == user._id)
                      return (
                        <>
                          <div key={i} className={styles.blog}>
                            <div className={styles.pic}>
                              <img src={e.cover} alt="cover" />
                            </div>
                            <div className={styles.desc}>
                              <h3>{e.title}</h3>
                              <hr />
                              <div className={styles.name}>
                                <h4>Written by {user.username}</h4>
                                <p>Shared at {e.date}</p>
                                <p
                                  style={{
                                    color: "red",
                                    margin: "5px 0px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    Swal.fire({
                                      title: "Are you sure?",
                                      icon: "warning",
                                      showCancelButton: true,
                                      confirmButtonColor: "#3085d6",
                                      cancelButtonColor: "#d33",
                                      confirmButtonText: "Yes, delete it!",
                                    }).then((result) => {
                                      if (result.isConfirmed) {
                                        Swal.fire({
                                          title: "Deleted!",
                                          text: "Your file has been deleted.",
                                          icon: "success",
                                        });
                                        store.blogs.setFilter([
                                          ...arr.filter((el) => {
                                            return e._id != el._id;
                                          }),
                                        ]);
                                        axios.delete(
                                          "http://localhost:2121/api/blogs/" +
                                            e._id
                                        );
                                      }
                                    });
                                  }}
                                >
                                  Delete
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      );
                  })}
              </div>
            </div>
            <div className={styles.posts}>
              {store.posts.data &&
                store.posts.data.map((e, i, arr) => {
                  if (e.ownerId == user._id)
                    return (
                      <div key={e._id} className={styles.post}>
                        <div className={styles.profile}>
                          <div className={styles.pic}>
                            <img src={user && user.src} alt="userProfile" />
                          </div>
                          <div className={styles.info}>
                            <h2>{user && user.username}</h2>
                            <p>posted at {e && e.date}</p>
                          </div>
                          <div></div>
                        </div>
                        <div className={styles.postContent}>
                          <p>{e.content}</p>
                        </div>
                        <div className={styles.hr}></div>
                        <div className={styles.icons}>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <span>Likes: {e.likes.length}</span>
                            <span>Comments: {e.comment.length}</span>
                          </div>
                          <span className={styles.delete} onClick={()=>{
                            Swal.fire({
                                title: "Are you sure?",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                  store.posts.setPost([
                                    ...arr.filter((el) => {
                                      return e._id != el._id;
                                    }),
                                  ]);
                                  axios.delete(
                                    "http://localhost:2121/api/posts/" +
                                      e._id
                                  );
                                }
                              });
                          }}>delete</span>
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
