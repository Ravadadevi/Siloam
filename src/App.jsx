import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Locations from './Locations';   
import Events from './Events';
import Team from './Team';
import './Home.css';
import Watchnow from './Watchnow';
import Ourtrust from './Ourtrust';
import Login from './Login';
import Give from './Give';
import Paymentform from './Paymentform';
import Header from './Header';


function App() {
  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/ourtrust" element={<Ourtrust/>} />
        <Route path="/watchnow" element={<Watchnow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/give" element={<Give />} />
        <Route path="/paymentform" element={<Paymentform />} />
        </Routes>
    </Router>
  );
}

export default App;
