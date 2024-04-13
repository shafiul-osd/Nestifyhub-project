import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx"
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css';
import Aos from 'aos'
import "aos/dist/aos.css";


const Layout = () => {
  useEffect(() => {
		Aos.init({
			offset: 300,
			duration: 1000,
			easing: 'ease-in-sine',
			delay: 200,
		});
	}, []);
  return (
    <div>
      <ReactNotifications />
      <div className="max-w-[1440px] mx-auto pt-20 bg-[url(/bg.jpg)]  bg-cover bg-center bg-fixed bg-no-repeat">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout