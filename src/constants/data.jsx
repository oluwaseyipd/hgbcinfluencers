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