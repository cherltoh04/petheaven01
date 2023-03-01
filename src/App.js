import NavBar from './components/NavBar';
import './App.css';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import Adoption from './components/Adoption';
import Register from './components/Register';
import Release from './components/Release';
import AdoptionGallery from './components/AdoptionGallery';
import {
  
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
    <Router>
   
      <NavBar />
     
      <div   className='container'>
     
          <Routes>
            <Route path='/about' element={ <About /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path= '/signup' element = { <Registration /> } />
            <Route path='/register' element={<Register />} />
            <Route path='/releaseform' element={<Release />} />
            <Route path='/AdoptionGallery' element={<AdoptionGallery />} />
            <Route path='/adoptionform' element={<Adoption />} />
            </Routes>
       
      </div>
      </Router>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We really do love and care for animals. Do follow us on our social media sites to find out more about us and the pets!</p>
            <div className="contactUs">
            <h2>Social Media</h2>
            <div className="address">
              <FaFacebook size={25} />
              <p> &nbsp;Facebook</p>
            </div>
            <div className="address">
              <FaInstagram size={25} />
              <p> &nbsp;Instagram</p>
            </div>
            <div className="address">
              <FaTiktok size={25} />
              <p> &nbsp;TikTok &nbsp; &nbsp; &nbsp; &nbsp;</p>
            </div>
          </div>
          </div>
          </div>
          
      </footer>
      <div className='bottom'>
        <p>Pet Heaven © 2023 All Rights Reserved.</p>
      </div>
    </>
    
  );
  
}

export default App;
