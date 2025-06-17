import { FaXTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";
import hero1 from "../assets/images/hero/showcase.png";
import hero2 from "../assets/images/hero/commitment.jpg";
import hero3 from "../assets/images/hero/holiness.jpg";
import hero4 from "../assets/images/hero/excellence.jpg";
import hero5 from "../assets/images/hero/love.jpg";
import hero6 from "../assets/images/hero/integrity.jpg";
import quote1 from "../assets/images/quote/image-1.jpg";
import quote2 from "../assets/images/quote/image-2.jpg";
import quote3 from "../assets/images/quote/image-3.jpg";
import give1 from "../assets/images/image-2.jpg";
import give2 from "../assets/images/photizo.jpg";

import { FaCalendarDays, FaGlobe,FaBuilding } from "react-icons/fa6";


export const navLinks = [
    {name: "Who We Are", path: "/about"},
    {name: "Watch Live", path: "/watch-live"},
    {name: "Sermon", path: "/sermon"},
    {name: "The Builders Academy", path: "/builders-academy"},
    {name: "Special Events", path: "/special-events"},
];

export const footerLinks = [
    {name: "Give", path: "/give"},
    {name: "Sermon", path: "/sermon"},
    {name: "Who We Are", path: "/about"},
    {name: "Watch Live", path: "/watch-live"},
    {name: "The Builders Academy", path: "/builders-academy"},
    {name: "Special Events", path: "/special-events"},
]

export const socialLinks = [
    {icon: FaFacebookF, path: "https://facebook.com/hgbcinfluencers"},
    {icon: FaInstagram, path: "https://instagram.com/hgbcinfluencers"},
    {icon:FaXTwitter, path: "https://x.com/hgbcinfluencers"},
    {icon: FaYoutube , path: "https://youtube.com/@hgbcinfluencers"},
];

//HOmepage

export const heroTexts = [

    {
        title: "We are Influencers",
        subtitle: "Welcome to the City of Refuge, The Court of Kings and Queens. It is an honour to have you visit our page. Have a wonderful time exploring!",
        img: hero1
    },
    {
        title: "Commitment",
        subtitle: "We are people of dedication and professional reliability. We are committed to God so our plans can be established (Proverbs 16:3).",
        img: hero2
    },
    {
        title: "Holiness",
        subtitle: " Just as we were commanded by God (Leviticus 19:2), we are holy people for He who called us is holy.",
        img: hero3
    },
    {
        title: "Excellence",
        subtitle: "  We strive to do the best we can. Our maker is an outstandingly supreme being, so, we strive to be like Him with the gift of the Holy Spirit.",
        img: hero4
    },
    {
        title: "Love",
        subtitle: "As stated in the Scripture, God is Love and whoever abides in love abides in God. We are loving people for we know our God and we abide in Him.",
        img: hero5
    },
    {
        title: "Integrity",
        subtitle: "Being uncompromisingly just and abiding by strong moral principles? Yes! That's what we are.",
        img: hero6
    }
]


export const weeklyQuote = [
    {
        id: 1, 
        img: quote2
    },
    {
        id: 2, 
        img: quote1
    },
    {
        id: 3, 
        img: quote2
    },
    {
        id: 4, 
        img: quote3
    },
];


export const upcomingEvent = [
  {
    day: "20",
    month: "AUG",
    title: "Leaders Retreat",
    content: "An opportunity to gather the church's leaders for duty checks, personal development checks and spiritual development evaluation.",
    icon: FaCalendarDays,
    tag: "Leadership Development",
    img: give1,
    color: "purple",
    link: "/events/leaders-retreat"
  },
  {
    day: "31",
    month: "SEP",
    title: "GLS 2025 - Global Leadership Summit",
    content: "The Global Leadership Summit (GLS) is an annual event by the Global Leadership Network that equips leaders to inspire change in their communities. It reaches over 120 countries and offers year-round resources to support leaders in ministry, business, and beyond.",
    icon: FaGlobe,
    tag: "Global Leadership Summit",
    img: give2,
    color: "blue",
    link: "/events/gls-2025"
  },
  {
    day: "7",
    month: "NOV",
    title: "BISUM 2024 - Business & Investment Summit",
    content: "Business and Investment Summit is an interdenominational yearly event aimed at raising leaders with influence in all spheres of life.",
    icon: FaBuilding,
    tag: "Business & Ministry",
    img: give1,
    color: "emerald",
    link: "/events/bisum-2024"
  }
];


// About Page

export const coreValues = [
    {
      letter: 'C',
      title: 'Commitment',
      description: 'Dedicated to serving God and our community with unwavering devotion and faithful stewardship of His calling.',
      icon: 'C',
      color: 'from-red-500 to-pink-500'
    },
    {
      letter: 'H',
      title: 'Holiness',
      description: 'Living set apart for God, pursuing righteousness and spiritual purity in all aspects of life and ministry.',
      icon: 'H',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      letter: 'E',
      title: 'Excellence',
      description: 'Striving for the highest standards in worship, service, and spiritual growth, giving our best for God\'s glory.',
      icon: 'E',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      letter: 'L',
      title: 'Love',
      description: 'Demonstrating Christ\'s unconditional love through compassionate service and genuine care for one another.',
      icon: 'L',
      color: 'from-pink-500 to-rose-500'
    },
    {
      letter: 'I',
      title: 'Integrity',
      description: 'Walking in truth and authenticity, maintaining moral uprightness and transparency in all our dealings.',
      icon: 'I',
      color: 'from-green-500 to-emerald-500'
    }
  ];

 export const pastors = [
    {
      name: 'Samson Oluwaseun Ayangoke',
      role: 'Lead Pastor',
      image: '/assets/img/pastors/pastor-1.png',
      social: {
        facebook: 'https://web.facebook.com/samsonayangoke',
        twitter: 'https://twitter.com/samsonayangoke_',
        linkedin: 'https://www.linkedin.com/in/samsonayangoke',
        instagram: 'https://www.instagram.com/samsonayangoke/?hl=en'
      }
    },
    {
      name: 'Victory Tolulope Ayangoke',
      role: 'Associate Pastor',
      image: '/assets/img/pastors/pastor-2.png',
      social: {
        facebook: 'https://web.facebook.com/victoryayangoke',
        linkedin: 'https://www.linkedin.com/in/victoryayangoke',
        instagram: 'https://www.instagram.com/victoryayangoke/'
      }
    },
    {
      name: 'Rev\'d Felicien Juh',
      role: 'Associate Pastor',
      image: '/assets/img/pastors/image-1.jpeg',
      social: {
        facebook: 'https://web.facebook.com/felicien.ngirnyu.3'
      }
    },
    {
      name: 'Ayanfe Fakunle',
      role: 'Associate Pastor',
      image: '/assets/img/pastors/image-1.jpeg',
      social: {
        facebook: 'https://web.facebook.com/fakunle.ayanfesamuel/',
        linkedin: 'https://www.linkedin.com/in/ayanfe',
        instagram: 'https://www.instagram.com/oluwasegunfunmi_amusan/'
      }
    },
    {
      name: 'Stephen Taiwo Bamigbola',
      role: 'Associate Pastor',
      image: '/assets/img/pastors/pastor-6.png',
      social: {
        facebook: 'https://web.facebook.com/bamigbola.stephenkingdomstar',
        instagram: 'https://www.instagram.com/kingdomstar_/'
      }
    },
    {
      name: 'Tanko Shekwa\'aga',
      role: 'Associate Pastor',
      image: '/assets/img/pastors/pastor-7.png',
      social: {
        facebook: 'https://web.facebook.com/tanko.shekwaaga'
      }
    }
  ];

 export const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'University Graduate',
      content: 'HGBC transformed my life completely. The discipleship programs and spiritual guidance I received here prepared me not just for my career, but for life itself. The community became my family.',
      rating: 5
    },
    {
      name: 'David Adebayo',
      role: 'Business Owner',
      content: 'Through BISUM and the Investment Club, I learned practical skills that helped me establish my business. The church doesn\'t just focus on spiritual growth but holistic development.',
      rating: 5
    },
    {
      name: 'Grace Okonkwo',
      role: 'Alumni',
      content: 'The sound biblical teaching and emphasis on excellence at HGBC shaped my character. Years after graduation, I still carry the values I learned here into my professional life.',
      rating: 5
    },
    {
      name: 'Emmanuel Peters',
      role: 'Current Member',
      content: 'From worshipping in open fields to having our own facility, I\'ve witnessed God\'s faithfulness through HGBC. This church truly lives up to its name - we\'re going to higher ground!',
      rating: 5
    }
  ];
