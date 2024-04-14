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
            <div className="flex justify-center items-center h-[70vh]">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-zinc-200 h-32 w-32 animate-spin" style={{ borderTopColor: "#3498db", borderRightColor: "#2ecc71", borderBottomColor: "#e74c3c", borderLeftColor: "#f39c12" }}></div>
            </div>

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