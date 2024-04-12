import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx"
import Home from "../pages/Home/Home.jsx"
import Register from "../pages/Register/Register.jsx"
import Login from "../pages/Login/Login.jsx"
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile.jsx"
import EstateDetails from "../pages/EstateDetails/EstateDetails.jsx";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute.jsx";
import ErrorPage from "../pages/404/404.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: ()=> fetch('/estateData.json')
			},
			{
				path: "/register",
				element: <Register />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/updateprofile",
				element: <PrivateRoute><UpdateProfile /></PrivateRoute>
			},
			{
				path: "/estatedetails/:id",
				element: <PrivateRoute><EstateDetails/></PrivateRoute>,
				loader: ()=> fetch('/estateData.json')
			},
			{
				path: "*",
				element: <ErrorPage/>
			}
		]
	},
]);

export default router;