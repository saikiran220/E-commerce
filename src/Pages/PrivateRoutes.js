import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    console.log("children",children)
    const {isLoggedIn}=useAuth();
    console.log("isLoggedIn---- app ----", isLoggedIn);


  return isLoggedIn ? <>{children}</>:<><Navigate to="/"/></>
   
  
}

export default PrivateRoutes
