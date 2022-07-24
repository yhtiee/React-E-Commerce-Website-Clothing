import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Major Components/App';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Cart from './Major Components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
 <BrowserRouter>
    <Routes>
        <Route path='/home' element={<App/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
 
 </BrowserRouter>
    
    


);