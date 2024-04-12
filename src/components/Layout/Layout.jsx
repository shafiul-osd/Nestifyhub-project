import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
const Layout = () => {
  return (
    <div>
      <ReactNotifications />
      <div class="max-w-[1440px] mx-auto pt-20 bg-[url(bg.jpg)]  bg-cover bg-center bg-fixed bg-no-repeat">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout