import { BsTextarea } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Estate = ({ estate }) => {
    const {
        id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image
    } = estate;
    return (
        <div className="bg-white border border-[rgba(0,0,0,0.3)] shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
                <img src={image} alt="Property Image" className="w-full h-48 object-cover hover:scale-105 duration-500" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold text-zinc-800 dark:text-white">{estate_title}</h2>
                <p className="text-md text-zinc-900 dark:text-zinc-400">{segment_name}</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{description.length > 70 ? description.slice(0, 70) + "..." : description} </p>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold text-blue-500 dark:text-blue-300">{price}</p>
                    <p className="text-sm bg-green-300 px-3 py-1 text-white rounded-xl">Status : {status}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Area : {area}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Location : {location}</p>
                </div>
                <div className="">
                    <h2 className="font-semibold">Facilities : </h2>
                    <ul className="list-disc ml-6 mt-2">
                        <li className="text-sm text-zinc-600 dark:text-zinc-400">Private beach</li>
                        <li className="text-sm text-zinc-600 dark:text-zinc-400">Deck</li>
                        <li className="text-sm text-zinc-600 dark:text-zinc-400">Boathouse</li>
                    </ul>
                </div>
                <div className="mt-5 text-center">
                    <Link to={`/estatedetails/${id}`}><button className=" mx-auto btn w-full bg-blue-500 text-white p-2 rounded-lg ">View Property</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Estate;