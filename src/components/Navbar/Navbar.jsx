import React, { useContext,useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import { HiMenuAlt4 } from "react-icons/hi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Navbar = () => {
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
            <li><NavLink to="/userprofile">User Profile</NavLink></li>
        </>
    );

    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                alert("Successfully Logged Out");
            })
            .catch(err => {
                alert(err.message);
            });
    };
		const [isOpen,setIsOpen] = useState(false)
		const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className="w-full mx-auto">
            <div className="navbar bg-base-100 w-full">
                <div className="navbar-start ">
                    <div className="btn btn-ghost md:hidden text-2xl">
                        <label onClick={toggleDrawer}><HiMenuAlt4 /></label>
                    </div>
                    
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
               	{links}
                </ul>
            </Drawer>
                    <a className="btn btn-ghost text-xl">NestifyHub</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-2">
                        {user ? (
                            <div className="flex items-center gap-2 md:gap-5">
                                <div className="avatar">
                                    <div className=" w-8 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
                                    </div>
                                </div>
                                <Link to="#"><button onClick={handleLogOut} className="btn md:btn-md btn-sm btn-primary">Logout</button></Link>
                            </div>
                        ) : (
                        	<div className="flex items-center gap-1 md:gap-4">
                           	 <Link to="/register"><button className="btn md:btn-md btn-sm btn-primary">Register</button></Link>
                           	 <Link to="/login"><button className="btn md:btn-md btn-sm btn-primary">Login</button></Link>
                           </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
