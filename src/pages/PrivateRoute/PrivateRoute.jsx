import React, { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const state = location.state;
    if (loading) {
        return <div className=" flex justify-center items-center">
            {/* <span className="loading loading-spinner loading-lg"></span>; */}
        </div>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login" />
    );
};

export default PrivateRoute;