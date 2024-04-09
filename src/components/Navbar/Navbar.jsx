import {useContext} from 'react'
import { NavLink , Link} from 'react-router-dom'
import {AuthContext} from"../../components/AuthProvider/AuthProvider.jsx"
const Navbar = () => {
	const links = <>
		<li><NavLink to="/"> Home</NavLink></li>
		<li><NavLink to="/updateprofile"> Update Profile</NavLink></li>
		<li><NavLink to="/userprofile"> User Profile</NavLink></li>
	</>
	
	const {user} = useContext(AuthContext);
	console.log(user)
  return (
    <div>
   	<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      	{links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">NestifyHub</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
	 <div className="flex items-center gap-2">
		<div className="avatar">
  <div className=" w-8 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
   	<Link to="/login"><button className="btn md:btn-md btn-sm btn-primary">Login</button></Link>
	 </div>
  </div>
</div>
    </div>
  )
}

export default Navbar