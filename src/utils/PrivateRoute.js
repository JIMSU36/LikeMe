// import { Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../Contexts/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   let { user } = useContext(AuthContext);
//   return <Route {...rest}>{!user ? <Navigate to="/" /> : children}</Route>;
// };

// export default PrivateRoute;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

function PrivateRoute({ component: Component }) {
    let { user } = useContext(AuthContext);
    return user ? Component : <Navigate to='/' {...alert("접근할 수 없는 페이지입니다.")} />;
    
}
export default PrivateRoute 