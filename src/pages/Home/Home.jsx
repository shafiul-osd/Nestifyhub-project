import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner.jsx"
import { useLoaderData } from 'react-router-dom';
import Estate from '../../components/Estate/Estate.jsx';

const Home = () => {
	const estates = useLoaderData();
	console.log(estates);
	return (
		<div>
			<Helmet>
				<title>NestifyHub | Home Page</title>
			</Helmet>
			<Banner />
			<div className='w-[95%] mx-auto'>
				<h1 className="text-2xl font-bold text-center my-10">Estates</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
					{
						estates.map(estate => {
							return <Estate key={estate.id} estate={estate} />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Home