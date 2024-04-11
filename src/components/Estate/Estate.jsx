import { BsTextarea } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const Estate = ({ estate }) => {
    const {
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
        <div>
            <div className="card glass hover:shadow-xl shadow-secondary hover:scale-x-95 duration-300">
                <figure className=' relative'>
                    <span className=' absolute bottom-4 left-4 bg-orange-500 px-3 py-1 rounded-xl text-white text-xl'>{price}</span>
                    <img className="duration-300 hover:scale-110 w-full h-60" src={image} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <h2>{segment_name}</h2>
                    <div className="divider m-0 p-0"></div>
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="">
                            <span className="flex items-center gap-3"><BsTextarea />{area}</span>
                        </div>
                        <div className="">
                            <span className="flex items-center gap-3"><CiLocationOn /> {location}</span>
                        </div>
                        <div className="">
                            <span className="flex items-center gap-3"><GrStatusUnknown />{status}</span>
                        </div>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <div className="">
                        <h2 className="text-left mb-2 flex items-center gap-1 font-bold"><MdOutlineFeaturedPlayList />Facilities</h2>
                        <div className="">
                            <ul className="list-disc grid grid-cols-2 ml-8">
                                {
                                    facilities.map((f, i) => <li key={i}>{f}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <p>{description}</p>
                    <div className="card-actions justify-start mt-3">
                        <button className="btn btn-secondary btn-outline">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;