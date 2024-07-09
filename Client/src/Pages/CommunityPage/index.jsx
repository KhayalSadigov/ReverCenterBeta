import { useContext, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import styles from "./index.module.scss";
import Tooltip from "@mui/material/Tooltip";
import BookIcon from "@mui/icons-material/Book";
import CreateIcon from "@mui/icons-material/Create";
import BadgeIcon from "@mui/icons-material/Badge";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CategoryIcon from "@mui/icons-material/Category";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import TextField from "@mui/material/TextField";
import FreelanceModal from "../../Components/FreelanceModal";
import TitModal from "../../Components/TitModal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import axios from "axios";
import BlogModal from "../../Components/BlogModal";
import CancelIcon from "@mui/icons-material/Cancel";
function CommunityPage() {
  let store = useContext(DataContext);
  let [mode, setMode] = useState("titbit");
  console.log(store.works.data);
  store.location.setPathname(window.location.pathname);

  if(!store.client.id)
  {
    window.location.replace('/')
  }
  function findUser(id) {
    let find;
    store.users.data.forEach((e) => {
      if (e._id == id) {
        find = e;
      }
    });
    return find && find;
  }
  let [blogReadModal, setBlogReadModal] = useState("close");
  let [readBlog, setReadBlog] = useState(null);
  let [freeModal, setFreeModal] = useState("close");
  let [titModal, setTitModal] = useState("close");
  let [blogModal, setBlogModal] = useState("close");
  return (
    <>
      <BlogModal blogModal={blogModal} setBlogModal={setBlogModal} />
      <TitModal titModal={titModal} setTitModal={setTitModal} />
      <FreelanceModal freeModal={freeModal} setFreeModal={setFreeModal} />
      <div
        style={
          blogReadModal == "close" ? { display: "none" } : { display: "block" }
        }
        className={styles.blogReadModal}
      >
        <div className={styles.glass}>
          <div className={styles.content}>
            <CancelIcon
              className={styles.cancel}
              onClick={() => {
                setBlogReadModal("close");
                setReadBlog(null)
              }}
            />
            <div className={styles.left}>
              <div className={styles.image}>
                <img src={readBlog && readBlog.cover} alt="" />
              </div>
              <div className={styles.name}>
                <div>
                  <h3>{readBlog && readBlog.title}</h3>
                  <p>
                    Created by <span>{readBlog && readBlog.owner}</span> at{" "}
                    {readBlog && readBlog.date}
                  </p>
                </div>
                <div className={styles.desc}>{readBlog && readBlog.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.community}>
        <div className={styles.banner}></div>
        <div className={styles.filterBar}></div>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.sidebar}>
              <div className={styles.header}>
                <div className={styles.pic}>
                  <img src="./../../../public/images/LogoNewEra.jpg" alt="" />
                </div>
                <h2>Rever Center</h2>
              </div>
              <h2>
                <CategoryIcon />
                Categories
              </h2>
              <div className={styles.categories}>
                <div className={styles.hr}></div>
                <div className={styles.categoryList}>
                  <ul>
                    <li
                      style={
                        mode == "work" ? { padding: "0 10px" } : { padding: "" }
                      }
                      onClick={() => {
                        setMode("work");
                      }}
                    >
                      <WorkIcon fontSize="small" />
                      <i>Freelance</i>
                    </li>
                    <li
                      style={
                        mode == "titbit"
                          ? { padding: "0 10px" }
                          : { padding: "" }
                      }
                      onClick={() => {
                        setMode("titbit");
                      }}
                    >
                      <RateReviewIcon fontSize="small" />
                      <i>Read Titbit</i>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <h2>
                <LibraryAddIcon />
                Create
              </h2>
              <div className={styles.categories}>
                <div className={styles.hr}></div>
                <div className={styles.categoryList}>
                  <ul>
                    <li onClick={() => [setTitModal("open")]}>
                      <CreateIcon fontSize="small" />
                      <i>Create Titbit</i>
                    </li>
                    <li onClick={() => [setFreeModal("open")]}>
                      <BadgeIcon fontSize="small" />
                      <i>Share work</i>
                    </li>
                    <li onClick={() => [setBlogModal("open")]}>
                      <BookIcon fontSize="small" />
                      <i>Write Blog</i>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
            </div>
            <div className={styles.posts}>
              {mode == "titbit" ? (
                store.posts.data &&
                store.posts.data.map((e, i, arr) => {
                  let user = findUser(e.ownerId);
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
                        {}
                        <ThumbUpIcon
                          style={
                            store.posts.data[i].likes.find((el) => {
                              return el == store.client.id;
                            })
                              ? { color: "#245275" }
                              : { color: "grey" }
                          }
                          className={styles.like}
                          onClick={() => {
                            console.log("first");
                            let like = e.likes.find((el) => {
                              return el == store.client.id;
                            });
                            if (like) {
                              e.likes = e.likes.filter((e) => {
                                return e != store.client.id;
                              });
                            } else {
                              console.log();
                              e.likes.push(store.client.id);
                            }
                            axios.patch(
                              "http://localhost:2121/api/posts/" + e._id,
                              e
                            );
                            store.posts.setPost([...arr]);
                          }}
                        />
                        <CommentIcon className={styles.comment} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className={styles.filterBanner}>
                    <TextField
                      id="sort"
                      className={styles.sort}
                      label="Search "
                      variant="outlined"
                      onChange={(e) => {
                        store.works.setFilter([
                          ...store.works.data.filter((a) => {
                            return a.title
                              .trim()
                              .toLocaleLowerCase()
                              .includes(
                                e.target.value.trim().toLocaleLowerCase()
                              );
                          }),
                        ]);
                      }}
                    />
                  </div>
                  <div className={styles.data}>
                    {store.works.filterData &&
                      store.works.filterData.map((e) => {
                        return (
                          <div key={e._id} className={styles.work}>
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                            <hr />
                            <div className={styles.icons}>
                              <div>
                                <a href={"tel:" + e.tel}>
                                  <Tooltip title={"Call the owner of the case"}>
                                    <CallIcon />
                                  </Tooltip>
                                </a>
                                <a href={"mailto:" + e.email}>
                                  <Tooltip
                                    title={
                                      "Send an email to the owner of the case"
                                    }
                                  >
                                    <MarkunreadIcon />
                                  </Tooltip>
                                </a>
                              </div>
                              <span>{e.price} AZN</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
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
                  store.blogs.filterData.map((e, i) => {
                    let user = findUser(e.ownerId);
                    if (e.status == "true")
                      return (
                        <>
                          <div
                            key={i}
                            className={styles.blog}
                            onClick={() => {
                              setBlogReadModal("open");
                              setReadBlog({
                                owner: user.username,
                                title: e.title,
                                desc: e.description,
                                date: e.date,
                                cover: e.cover,
                              });
                            }}
                          >
                            <div className={styles.pic}>
                              <img src={e.cover} alt="cover" />
                            </div>
                            <div className={styles.desc}>
                              <h3>{e.title}</h3>
                              <hr />
                              <div className={styles.name}>
                                <h4>Written by {user.username}</h4>
                                <p>Shared at {e.date}</p>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
