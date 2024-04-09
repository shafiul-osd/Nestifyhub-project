import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner.jsx"

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>NestifyHub | Home Page</title>
			</Helmet>
			<Banner />
			<div>
				Home
			</div>
		</div>
	)
}

export default Home