import {createBrowserRouter} from "react-router-dom";
import Layout from"../components/Layout/Layout.jsx"
import Home from"../pages/Home/Home.jsx"
import Register from"../pages/Register/Register.jsx"
import Login from"../pages/Login/Login.jsx"
import UpdateProfile from"../pages/UpdateProfile/UpdateProfile.jsx"
import UserProfile from"../pages/UserProfile/UserProfile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
    	{
    		path: "/",
   		element: <Home/>
    	},
    	{
    		path: "/register",
    		element: <Register/>
    	},
    	{
    		path: "/login",
    		element: <Login/>
    	},
    	{
    		path: "/updateprofile",
    		element: <UpdateProfile/>
    	},
    	{
    		path: "/userprofile",
    		element: <UserProfile/>
    	}
    ]
  },
]);

export default router;