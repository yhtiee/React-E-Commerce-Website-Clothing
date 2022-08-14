import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Signinpage from './Pages/Signinpage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signuppage from './Pages/Signuppage';
import PrivateRoutes from './utils/PrivateRoutes';
import Cartpage from './Pages/Cartpage';
import { AuthProvider } from './Context/AuthContext';

const App = () => {
  const authenticated = true

  return (
    
    <div className='app'>
      <Router>
        
        <Navbar/>
          <Routes>  
            <Route path='*' element={!authenticated? <Navigate to="/signin"/> : <HomePage/>}/>
            <Route path='/cart' element={<Cartpage/>}/>
            <Route path='/signin' element={<Signinpage/>}/>
            <Route path='/signup' element={<Signuppage/>}/>     
          </Routes>
        <Footer/>  
      </Router>
    </div>
    
  )
}

export default App