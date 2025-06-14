import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Style Sheet
import './index.css' 

//Pages
import Home from './pages/Home'
import About from './pages/About'
import WatchLive from './pages/WatchLive'
import Sermon from './pages/Sermon'
import BuildersAcademy from './pages/BuildersAcademy'
import SpecialEvents from './pages/SpecialEvents'


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/sermon" element={<Sermon />} />
          <Route path="/builders-academy" element={<BuildersAcademy />} />
          <Route path="/special-events" element={<SpecialEvents/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
