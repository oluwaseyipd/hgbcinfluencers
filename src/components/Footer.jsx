import logo from "../assets/images/logo.png";
import { footerLinks, socialLinks } from "../constants/data";
import { Link } from "react-router-dom";
import footerImage from "../assets/images/hero/footer.jpg";

const Footer = () => {
  return (
    <footer 
      className="relative pt-16 pb-5 text-gray-100"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 lg:px-[200px] flex flex-col md:flex-row gap-8 justify-between">
        {/* Logo & Info */}
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-20 mb-3" />
          <h3 className="text-white text-xl font-semibold">
            HIGHER GROUND BAPTIST CHURCH
          </h3>
          <p className="text-white">...Building men of Influence</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl lg:text-2xl text-white font-bold mb-3">Quick Links</h3>
          <ul>
            {footerLinks.map((item, index) => (
              <li key={index} className="my-2">
                <Link
                  to={item.path}
                  className="text-lg text-gray-200 hover:text-orange-500 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-xl lg:text-2xl text-white font-bold mb-3">Follow Us</h3>
          <ul className="flex gap-5">
            {socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl lg:text-3xl hover:text-orange-500"
                >
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10">
        <hr className="border-t border-white mt-10" />
        <p className="text-white text-center mt-6 text-sm">
          © All rights reserved {new Date().getFullYear()} | Higher Ground Baptist Church, Ogbomoso.
        </p>
      </div>
    </footer>
  );
};

export default Footer;