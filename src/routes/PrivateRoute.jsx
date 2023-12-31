import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    console.log(location)
    if(loading){return <span className="loading loading-spinner loading-lg"></span>}
    if(user){return children}
    return (
        <Navigate state={location.pathname} to="/in"></Navigate>
    );
};
PrivateRoute.propTypes={
    children:PropTypes.node
}
export default PrivateRoute;