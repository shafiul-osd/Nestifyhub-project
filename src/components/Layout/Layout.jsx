import React from 'react'
import {Outlet} from"react-router-dom"
import Navbar from"../Navbar/Navbar.jsx"
import Footer from"../Footer/Footer.jsx"
const Layout = () => {
  return (
    <div class="max-w-[1440px] mx-auto">
   	<Navbar/>
   	<Outlet/>
   	<Footer/>
    </div>
  )
}

export default Layout