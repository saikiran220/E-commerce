import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const isInitiallyLogedIn=!!localStorage.getItem("token")
    
    const [isLoggedIn, setIsLoggedIn] = useState(isInitiallyLogedIn);



    const login = async (logindetails) => {
        console.log('logindetails...',logindetails);
        fetchData(logindetails)
     }

    const fetchData=async(logindetails)=>{
    const response = await axios.post("https://fakestoreapi.com/auth/login",logindetails)
    console.log("response",response)
    localStorage.setItem("token",response.data.token)
    setIsLoggedIn(true)
}


    const logout = () =>{
        localStorage.clear()
        setIsLoggedIn(false);
        
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);