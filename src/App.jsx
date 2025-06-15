import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style Sheet
import './index.css' 

//Pages
import Home from './pages/Home'
import About from './pages/About'
import WatchLive from './pages/WatchLive'
import Sermon from './pages/Sermon'
import BuildersAcademy from './pages/BuildersAcademy'
import SpecialEvents from './pages/SpecialEvents'

// Dashboard Pages
import AdminLayout from "./pages/dashboard/AdminLayout";
import Overview from "./pages/dashboard/Overview";
import Audio from "./pages/dashboard/Audio";
import AudioUploadForm from "./pages/dashboard/AudioUploadForm";

function App() {

  return (
    <>
      <Router basename="/hgbcinfluencers">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/hgbcinfluencers" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/sermon" element={<Sermon />} />
          <Route path="/builders-academy" element={<BuildersAcademy />} />
          <Route path="/special-events" element={<SpecialEvents/>} />

          {/* Dashboard Pages - Nested Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="audio" element={<Audio />} />
            <Route path="audioupload" element={<AudioUploadForm />} />
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App