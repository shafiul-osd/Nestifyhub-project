import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner.jsx"
import { useLoaderData } from 'react-router-dom';
import Estate from '../../components/Estate/Estate.jsx';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
	const estates = useLoaderData();

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
			<Helmet>
				<title>NestifyHub | Home Page</title>
			</Helmet>
			<div className="" data-aos="fade-left" >
				<Banner />
			</div>
			<div className='w-[95%] mx-auto'>
				<h1 className="text-2xl font-bold text-center my-10" data-aos="fade-down" >Estates</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10" data-aos="fade-right" >
					{
						estates.map(estate => {
							return <Estate key={estate.id} estate={estate} data-aos="fade-top" />
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Home