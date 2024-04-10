import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-[85%] mx-auto my-20">
            <Helmet>
                <title>NestifyHub | UserProfile</title>
            </Helmet>
            <div>
                <div className="card glass">
                    <div className="avatar">
                        <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto mt-10">
                            <img src={user?.photoURL} alt="Profile pic" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">{user?.displayName || "Name"}</h2>
                        <p className="text-center text-lg">{user?.email || "Email"}</p>
                        <div className="card-actions justify-end">
                            <Link className="mx-auto" to="/updateprofile">
                                <button className="btn btn-primary mx-auto my-5 hover:btn-outline">Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
