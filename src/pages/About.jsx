import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader 
        title="About Higher Ground Baptist Church"
        breadcrumb="Who We Are"
        subtitle="Discover our mission, vision, and the heart behind our ministry"
      />

      
      <Footer />
    </div>
  )
}

export default About;
