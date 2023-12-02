import React from "react";
import Logo from "@/components/svgs/Logo";
import { services } from "./data/services";
import { Blog, Service } from "./types";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import image1 from '@/public/imgs/cover1.png';
import image2 from '@/public/imgs/cover2.png';
import image3 from '@/public/imgs/cover3.png';

export const links = [
  {
    title: "Home",
    color: "home-bg",
    url: "/",
  },
  {
    title: "Services",
    color: "services-bg",
    url: "/services",
    subServices: services
  },
  {
    title: "About Us",
    color: "about-bg",
    url: "/about",
  },
  {
    title: "Contact",
    color: "contact-bg",
    url: "/contact",
  },
  {
    title: "Blog",
    color: "blog-bg",
    url: "/blog",
  },
];

export const initialMainServicesData: Service = { id: "", title: "title", description: "description", img: "null", url: "/" }

export const urlHomePageVideo = "https://res.cloudinary.com/dcmthd8bn/video/upload/v1694723512/react-base-vid/Beauty_of_sea_beach_nature_WhatsApp_status_relaxing_video_shorts_bpesvs.mp4"

export const missionSectionData = {
  title: `What we \n want the \n world to be`,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum eaque. Veritatis cupiditate officia neque aliquid dolorum mollitia eius quidem officiis. Optio tempore ex ab?",
  img: image1
}

export const massageSectionData = {
  title: `Lorem ipsum dolor sit amet`,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum eaque. Veritatis cupiditate officia neque aliquid dolorum mollitia eius quidem officiis. Optio tempore ex ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum eaque. Veritatis cupiditate officia neque aliquid dolorum mollitia eius quidem officiis. Optio tempore ex ab?",
  img: image2
}

export const blogsSectionData: Blog[] = [
  {
    date: "August, 2021",
    author: "Diano",
    img: image1,
    title: "How to become a full-stack developer",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    date: "August, 2021",
    author: "Diano",
    img: image1,
    title: "How to become a full-stack developer",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    date: "August, 2021",
    author: "Diano",
    img: image1,
    title: "How to become a full-stack developer",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    date: "August, 2021",
    author: "Diano",
    img: image1,
    title: "How to become a full-stack developer",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

export const NFImage = image3
export const NFLink = "/"

export const feedBackData = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
]

export const quoteSectionData = {
  quote: "“ Lorem ipsum, dolor sit amet consectetur -IMG- adipisicing elit. Assumenda dolorum quidem consectetur porro est nam ipsa? Perspiciatis -IMG- illum quibusdam laudantium! ”",
  someone: "Someone",
  imgs: [
    image1,
    image2
  ]
}

export const contactUsDescription = `If you have any general enquires or would like to arrange a
consultation with Dr Rafael please contact us by filling the
following form.`

export const LoginDescription = `If you have any general enquires or would like to arrange a
consultation with Dr Rafael please contact us by filling the
following form.`

export const footerData = {
  logo: React.createElement(Logo),
  tableTitles: { contact: "Contact Us", services: "Services", sections: "Sections" },
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, porro.",
  contactUsData: [
    { title: "Address", description: "Address Address Address Address Address " },
    { title: "Phone", description: "Phone Phone Phone Phone Phone Phone " },
    { title: "Email", description: "Email Email Email Email Email Email " },
  ],
  sectionsData: links.map(item => ({ title: item.title, url: item.url })),
  servicesData: services.map(item => ({ title: item.title, url: item.url })),
  note: `About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.`
}

export const socialMediaData = [
  {
    icon: React.createElement(AiFillYoutube),
    link: "https:/ / www.youtube.com"
  },
  {
    icon: React.createElement(AiFillFacebook),
    link: "https:/ / www.facebook.com"
  },
  {
    icon: React.createElement(AiFillInstagram),
    link: "https:/ / www.instagram.com"
  },
]