import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';

function PrivateRoute({ component: Component }) {
    let { user } = useContext(AuthContext);
    return user ? Component : <Navigate to='/' {...alert("접근할 수 없는 페이지입니다.")} />;
    
}
export default PrivateRoute 