/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext("");

function DataProvider({ children }) {
  
  if (!JSON.parse(localStorage.getItem("client")))
    localStorage.setItem("client", JSON.stringify(null));
  let [users , setUsers] = useState([])
  let [posts, setPosts] = useState([])
  let [works,setWorks] = useState([])
  let [filterWork, setFilterWork] = useState([]);
  let [blogs , setBlogs] = useState([])
  let [filterBlogs , setFilterBlogs] = useState([])
  let [client, setClient] = useState(JSON.parse(localStorage.getItem("client")));
  let [path, setPath] = useState('/sign')

  useEffect(() => {
    axios.get("http://localhost:2121/api/users").then((res) => {
      setUsers(res.data.sort((a,b)=>{
        return b.rank - a.rank ;
      }));  

      // setUsers([...users.toReversed()])
    });
    axios.get('http://localhost:2121/api/posts').then((res)=>{
      setPosts(res.data)
      setPosts(posts.toReserved())
    })
    axios.get('http://localhost:2121/api/works').then((res)=>{
      setWorks(res.data)
      setFilterWork(res.data)
    })
    axios.get('http://localhost:2121/api/blogs').then((res)=>{
      setBlogs(res.data)
      setFilterBlogs(res.data)
    })
  }, []);
  let store = {
    users : {
      data : users,
      setUser : setUsers
    },
    posts : {
      data : posts,
      setPost : setPosts
    },
    works : {
      data : works,
      setWork : setWorks,
      filterData : filterWork,
      setFilter : setFilterWork
    },
    blogs :{
      data : blogs,
      setBlog : setBlogs,
      filterData : filterBlogs,
      setFilter : setFilterBlogs
    },
    client: {
      id: client,
      setLocalClient: setClient,
    },
    location: {
      pathname : path,
      setPathname : setPath
    }
  };
  return (
    <>
      <DataContext.Provider value={store}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
