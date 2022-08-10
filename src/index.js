import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Major Components/App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Major Components/Cart/Cart';
import Signinpage from './Major Components/Signinpage';
import Navbar from './Minor Components/Navbar/Navbar';
import Footer from './Minor Components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
 <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='*' element={<App/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signin' element={<Signinpage/>}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
    
);