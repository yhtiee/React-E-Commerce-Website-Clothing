import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const PrivateRoutes = ({children, ...rest}) => {
    console.log("PrivateRoute works!")
    const authenticated = false
  return (
    <Routes {...rest}>
        {!authenticated? <Navigate to='/signin'/> : children}
    </Routes>
  )
}

export default PrivateRoutes