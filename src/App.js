import React, { createContext, useState, useEffect, Children  } from "react";
import './App.css';
import HomePage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route, Navigate, useSearchParams} from 'react-router-dom';
import Signinpage from './Pages/Signinpage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signuppage from './Pages/Signuppage';
import Cartpage from './Pages/Cartpage';
import AuthContext, { AuthProvider } from "./Context/authContext";
import { useContext } from "react";
import Productspage from "./Pages/Productspage";
import { ProductProvider } from "./Context/productContext";
import Selection from "./Pages/Selection";


const App = () => {
  let user = useContext(AuthContext)

  return (
    <div className='app'>
          <Router>
            <AuthProvider>
              <ProductProvider>
                <Navbar/>
                  <Routes>  
                    <Route path='*' element={user? <Navigate to="/signin"/> : <HomePage/>}/>
                    <Route path='/cart' element={<Cartpage/>}/>
                    <Route path='/signin' element={<Signinpage/>}/>
                    <Route path='/signup' element={<Signuppage/>}/> 
                    <Route path='/products' element={<Productspage/>}/>
                    <Route path='/product_selection' element={<Selection/>}/>  
                  </Routes>
                <Footer/> 
              </ProductProvider> 
            </AuthProvider>
          </Router>
        </div>
    
    
  )
}
export default App
