import { Outlet } from "react-router-dom"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"

function MainRout() {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer />
    </>
  )
}

export default MainRout