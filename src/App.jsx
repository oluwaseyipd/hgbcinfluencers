import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style Sheet
import './index.css' 

import Loader from './pages/Loader'; 

//Pages
import Home from './pages/Home';
import About from './pages/About';
import WatchLive from './pages/WatchLive';
import Sermon from './pages/Sermon';
import BuildersAcademy from './pages/BuildersAcademy';
import SpecialEvents from './pages/SpecialEvents';
import Give from "./pages/Give";
import PageNotFound from "./pages/PageNotFound";

// Dashboard Pages
import AdminLayout from "./pages/dashboard/AdminLayout";
import Overview from "./pages/dashboard/Overview";
import Audio from "./pages/dashboard/Audio";
import Events from "./pages/dashboard/Events"
import AudioUploadForm from "./pages/dashboard/AudioUploadForm";
import Signin from "./pages/dashboard/Signin";
import AddNewEvent from "./pages/dashboard/AddNewEvent";
import Quotes from "./pages/dashboard/Quotes";
import AddQuote from "./pages/dashboard/AddQuote";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Optional: Add minimum loading time to ensure users see the animation
  useEffect(() => {
    const minLoadingTime = 2000; // 2 seconds minimum
    const timer = setTimeout(() => {
      // This ensures minimum loading time even if everything loads quickly
      if (isLoading) {
        // You can add additional logic here if needed
      }
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Show loader while loading
  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  // Show main app after loading
  return (
    <>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/hgbcinfluencers" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/sermon" element={<Sermon />} />
          <Route path="/builders-academy" element={<BuildersAcademy />} />
          <Route path="/special-events" element={<SpecialEvents/>} />
          <Route path="/give" element={<Give/>} />

          {/* Admin Authentication */}
          <Route path="/signin" element={<Signin />} />

          {/* Dashboard Pages - Nested Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="audio" element={<Audio />} />
            <Route path="events" element={<Events />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="audioupload" element={<AudioUploadForm />} />
            <Route path="addevent" element={<AddNewEvent/>} />
            <Route path="addquote" element={<AddQuote/>} />
            {/* 404 for unmatched admin routes */}
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* Catch-all route for 404 - MUST be last */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App