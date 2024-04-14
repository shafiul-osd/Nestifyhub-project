import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import { HiMenuAlt4 } from "react-icons/hi";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import toast from "../../components/Toast/Toast.jsx";
import Aos from 'aos';
import "aos/dist/aos.css";

const Navbar = () => {
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </>
    );

    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                toast("Logged Out", "success", "Logged Out");
            })
            .catch(err => {
                toast(err.message, "danger", "Failed");
            });
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        Aos.init({
            offset: 250,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 150,
        });
    }, []);
    return (
        <div data-aos="fade-down" className="w-[98%] mx-auto fixed top-2 left-0 right-0 rounded-2xl bg-[rgba(255,255,255,0.2)] backdrop-blur-md z-[9999]">
            <div className="navbar rounded-2xl border border-[rgba(0,0,0,0.3)] w-full">
                <div className="navbar-start">
                    <div className="btn btn-ghost md:hidden text-2xl">
                        <label onClick={toggleDrawer}><HiMenuAlt4 /></label>
                    </div>

                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        className=' left-0 w-20'
                    >
                        <ul className="menu w-full min-h-full bg-base-200 text-base-content">
                            {links}
                        </ul>
                    </Drawer>

                    <Link to="/" className="btn btn-ghost text-xl animate__animated animate__pulse animate__infinite infinite">NestifyHub</Link>
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
                                <div className="tooltip tooltip-bottom mt-3" data-tip={user.displayName}>
                                    <div className="avatar">
                                        <div className=" w-8 md:w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 animate__animated animate__pulse animate__infinite	infinite">
                                            <img className='animate__animated animate__pulse animate__infinite	infinite' src={user.photoURL} alt="user avatar" />
                                        </div>
                                    </div>
                                </div>
                                <Link to="#"><button onClick={handleLogOut}  className="btn hover:bg-transparent hover:text-zinc-500 bg-blue-500 text-white px-4 rounded-lg ">Logout</button></Link>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 md:gap-4">
                                <Link to="/register"><button className="btn hover:border hover:bg-transparent hover:text-zinc-500 bg-blue-500 text-white px-4 rounded-lg ">Register</button></Link>
                                <Link to="/login"><button className="btn bg-green-500 text-white px-4 rounded-lg hover:bg-transparent btnout hover:text-zinc-500 ">Login</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
