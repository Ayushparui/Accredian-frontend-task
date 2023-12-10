import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequiredAuth(){
    const location = useLocation();
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={{pathname: '/login', state: {from: location}}}/>
    }

    return(
        
        <Outlet />
    )
}

export default RequiredAuth