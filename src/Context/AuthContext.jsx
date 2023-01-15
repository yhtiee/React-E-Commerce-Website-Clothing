import React, { createContext, useState, useEffect, Children  } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import Testimonials from "../Components/Testimonials/Testimonials";




const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(() => localStorage.getItem("authTokens")? JSON.parse(localStorage.getItem("authTokens")): null)
    let [user, setUser] = useState(() => localStorage.getItem("authTokens")? jwt_decode(localStorage.getItem("authTokens")): null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)


    
    let navigate = useNavigate()

    async function signUpUser(e){
        e.preventDefault()
        console.log("form submitted")
        let response = await fetch ("http://127.0.0.1:8000/api/User/", {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':e.target.username.value, 'password': e.target.password.value, 'first_name': e.target.first_name.value, 'last_name': e.target.last_name.value, 'email': e.target.email.value  })
        
        })
        if (response.ok){
            if (response.status === 201){
                navigate("/signin")
            }
        }
        else{
            console.log("error")
            setError("Invalid Registration Details User Already Exists Login")

        }
        
    }
    async function loginUser(e){
        e.preventDefault()
        // console.log("form submitted")
        let response = await fetch ("http://127.0.0.1:8000/api/token/", {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':e.target.username.value, 'password': e.target.password.value})
        
        })
        // console.log("working")
       
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                // localStorage.setItem("user", JSON.stringify(jwt_decode(data.access)))
                navigate("*")
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")

        }
    }


    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("authTokens")

    }


    // uPdate the token every 5mins sending the refresh token to the backend
    let updateToken = async () =>{
        console.log("update called")
        let response = await fetch ("http://127.0.0.1:8000/api/token/refresh/", {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"refresh":authToken.refresh})
        
        })
        if (response.ok){
            let data = await response.json()
            if (response.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                

            }else{
                logoutUser()
            }

        }
    }

    //  used to call the update token every 2 seconds
    useEffect(() => {
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authToken){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
       
    }, [authToken, loading])
    
    let contextData = {
        user : user,
        loginUser: loginUser,
        logoutUser : logoutUser,
        signUpUser : signUpUser,
        error : error
        
      }


    return(
        
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        
        
    )

}