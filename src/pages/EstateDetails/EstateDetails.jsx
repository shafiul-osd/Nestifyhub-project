import { useParams, useLoaderData, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { BsTextarea } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GrStatusUnknown } from 'react-icons/gr';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";


const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const specificEstate = estates.find(estate => estate.id === id);

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 150,
        })
    });


        return (
            <div data-aos="fade-up" className="w-[97%] mx-auto -pt-5 min-h-screen">
                <Helmet>
                    <title>NestifyHub || Estate Details</title>
                </Helmet>
                <Card className='w-[90%] md:w-[70%] my-20 mx-auto rounded-xl'>
                    <div className="overflow-hidden relative">
                        <CardMedia
                            sx={{ height: 400 }}
                            image={specificEstate.image}
                            title="green iguana"
                            className='hover:scale-125 duration-700'
                        />
                        <span className="bg-[#a81670] absolute top-5 right-5 py-1 text-white px-3 rounded-2xl">{specificEstate.price}</span>
                    </div>
                    <CardContent className='border p-3'>
                        <Typography gutterBottom variant="h5" component="div">
                            {specificEstate.estate_title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className='text-base'>
                            {specificEstate.segment_name}
                        </Typography>
                        <Divider />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-3">
                            <div className="">
                                <span className=" flex items-center gap-2"><BsTextarea /> Area : {specificEstate.area}</span>
                            </div>
                            <div className="">
                                <span className=" flex items-center gap-2"><CiLocationOn /> Location : {specificEstate.location}</span>
                            </div>
                            <div className="">
                                <span className=" flex items-center gap-2"><GrStatusUnknown /> Status : {specificEstate.status}</span>
                            </div>

                        </div>
                        <Divider />
                        <div className='my-5 grid grid-cols-1'>
                            <h2 className="font-bold text-left mb-5 flex items-center gap-2"><MdOutlineFeaturedPlayList />Facilities : </h2>
                            <ul className='list-disc flex items-center justify-start mb-3 gap-16 ml-5'>
                                {
                                    specificEstate.facilities.map((estate, i) => <li key={i}>{estate}</li>)
                                }
                            </ul>
                        </div>
                        <Divider />
                        <h2 className="my-5"><span className="font-semibold">Description : </span>{specificEstate.description}</h2>
                        <Divider />
                        <Link to="/">
                            <button className=" mx-auto btn w-full bg-blue-500 text-white p-2 rounded-lg ">Back to Home</button>
                        </Link>
                    </CardContent>

                </Card>
            </div>
        );
    };

    export default EstateDetails;