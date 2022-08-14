import { createContext, useState, useEffect  } from "react";
import App from "../App";
import Navbar from "../Components/Navbar/Navbar";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = () => {
    return (
        <AuthContext.Provider value={{"name": "utibeabasi"}}>
            <Navbar/>
        </AuthContext.Provider>
    )
}