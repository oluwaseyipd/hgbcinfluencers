import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestSermon from "../components/LatestSermon";
import WeeklyQoute from "../components/WeeklyQoute";
import GiveSection from "../components/GiveSection";
import ContactSection from "../components/ContactSection";
import LocationSection from "../components/LocationSection";
import OverflowBanner from "../components/OverflowBanner";
import UpComingEvent from "../components/UpComingEvent";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Main Body */}
      <Hero />
    <OverflowBanner />
      <LatestSermon />
      <UpComingEvent />
      <WeeklyQoute />
    <GiveSection />
    <ContactSection />
    <LocationSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;
