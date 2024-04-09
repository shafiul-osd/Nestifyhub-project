import React from 'react'
import {Outlet} from"react-router-dom"
import Navbar from"../Navbar/Navbar.jsx"
import Footer from"../Footer/Footer.jsx"
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
const Layout = () => {
  return (
    <div class="max-w-[1440px] mx-auto">
   	<ReactNotifications/>
   	<Navbar/>
   	<Outlet/>
   	<Footer/>
    </div>
  )
}

export default Layout