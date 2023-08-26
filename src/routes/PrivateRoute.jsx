import GetAuthData from '../hooks/authdata';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=GetAuthData();
    const location=useLocation()
    if(loading){
        return <p>loading ......</p>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;