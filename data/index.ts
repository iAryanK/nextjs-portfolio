import { Home, Laptop2, Mail, NotebookText, User } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const navItems = [
  { name: "Home", link: "/", icon: Home },
  { name: "About", link: "/about", icon: User },
  { name: "Projects", link: "#projects", icon: Laptop2 },
  { name: "Contact", link: "#contact", icon: Mail },
  { name: "Blogs", link: "/blogs", icon: NotebookText },
];

export const FrontendSkills = [
  {
    id: 1,
    skill: "Next JS 14",
    img: "./images/icons/nextjs.svg",
    value: 80,
  },
  {
    id: 2,
    skill: "Tailwind CSS",
    img: "./images/icons/tailwind.svg",
    value: 85,
  },
  {
    id: 3,
    skill: "Javascript",
    img: "./images/icons/javascript.svg",
    value: 75,
  },
  {
    id: 4,
    skill: "Typescript",
    img: "./images/icons/typescript.svg",
    value: 70,
  },
];

export const backendSkills = [
  {
    id: 1,
    skill: "Next JS 14",
    img: "./images/icons/nextjs.svg",
    value: 80,
  },
  {
    id: 2,
    skill: "Node JS",
    img: "./images/icons/nodejs.svg",
    value: 65,
  },
  {
    id: 3,
    skill: "MongoDB",
    img: "./images/icons/mongodb.svg",
    value: 70,
  },
  {
    id: 4,
    skill: "MySQL",
    img: "./images/icons/sql.svg",
    value: 75,
  },
];

export const languageSkills = [
  {
    id: 1,
    skill: "Java",
    img: "./images/icons/java.svg",
    value: 75,
  },
  {
    id: 2,
    skill: "C",
    img: "./images/icons/c.svg",
    value: 80,
  },
  {
    id: 3,
    skill: "C++",
    img: "./images/icons/cpp.svg",
    value: 90,
  },
  {
    id: 4,
    skill: "Typescript",
    img: "./images/icons/typescript.svg",
    value: 70,
  },
  {
    id: 5,
    skill: "Python",
    img: "./images/icons/python.svg",
    value: 65,
  },
  {
    id: 6,
    skill: "Kotlin",
    img: "./images/icons/kotlin.svg",
    value: 70,
  },
];

export const OtherSkills = [
  {
    id: 1,
    skill: "Git & Github",
    img: "./images/icons/git.svg",
    value: 75,
  },
  {
    id: 2,
    skill: "Linux",
    img: "./images/icons/linux.svg",
    value: 70,
  },
];

export const projects = [
  {
    id: 1,
    title: "DevForces",
    des: "DevForces, a Next.JS 14 Full Stack application, is a community driven platform that enables us to ask questions, get answered by others and answer other's questions as well. It also provides us the facility to write beautiful blog articles and post it on DevForces. This peace of work is inspired from the application DevOverflow by javascriptmastery, who helped me create this mega project with highly detailed features.",
    img: "https://github.com/iAryanK/DevOverflow/raw/main/app/opengraph-image.png?raw=true",
    iconLists: [
      "/images/icons/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/images/icons/mongodb.svg",
      "/c.svg",
    ],
    link: "https://devforces.tech",
  },
  {
    id: 2,
    title: "UniPort",
    des: " Uniport serves as a single port where users can seamlessly access and utilize different AI functionalities to enhance their workflows and creative endeavors, hence the name Uniport. The project leverages cutting-edge technologies such as Next.js 14 for both backend and frontend development, React for dynamic user interfaces, Tailwind CSS for sleek and responsive design, and Prisma for seamless connectivity with a MySQL database hosted on Aiven.",
    img: "https://github.com/iAryanK/Uniport/raw/main/public/screenshots/landing.png?raw=true",
    iconLists: [
      "/images/icons/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/images/icons/sql.svg",
      "/c.svg",
    ],
    link: "https://uniport.vercel.app",
  },
  {
    id: 3,
    title: "WhatsFlow",
    des: "A desktop application that sends bulk messages on whatsapp. WhatsFlow is a highly efficient bulk message sender due to its unique algorithm for sending message. Also, the application has some features that makes it stand out from others.",
    img: "https://github.com/iAryanK/WhatsFlow/raw/main/screenshots/ui_light.png?raw=true",
    iconLists: ["/images/icons/python.svg"],
    link: "https://github.com/iAryanK/WhatsFlow",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    des: "None other than the website you are surfing right now! This website respresents my personal portfolio - who I am, My skills, project works and contact details with some blogs that is weaved with my knowledge and information. If this website feels amazing to you, you should try using technologies like Next JS, tailwind CSS, Aceternity UI, shadcn UI and my favourite, GSAP for animations.",
    img: "/images/portfolio-project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/gsap.svg"],
    link: "https://github.com/iAryanK/portfolio",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Aryan was a great experience. His technical acumen and ability to troubleshoot complex issues were crucial to our project's success.",
    name: "Jyotika Rana",
    profession: "Frontend Developer",
    image: "/git.svg",
  },
  {
    quote:
      "Aryan's passion for technology and commitment to delivering high-quality work make him an exceptional developer. I would gladly work with him again.",
    name: "Veena Pal",
    profession: "UI/UX Designer",
    image: "/git.svg",
  },
  {
    quote:
      "Aryan brought a wealth of knowledge and experience to our project. His innovative solutions and technical expertise were instrumental in achieving our goals.",
    name: "Ajay Kumar",
    profession: "Cyber Security Analyst",
    image: "/git.svg",
  },
  {
    quote:
      "I highly recommend Aryan for any development project. His creativity and technical proficiency ensured the delivery of an outstanding product.",
    name: "Aman Kumar Sharma",
    profession: "Presentation Creator",
    image: "/git.svg",
  },
  {
    quote:
      "Aryan's dedication and attention to detail were key factors in the success of our project. His technical skills and problem-solving abilities are top-notch.",
    name: "Banta Singh",
    profession: "Java Developer",
    image: "/git.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: FaGithub,
    link: "https://github.com/iAryanK",
  },
  {
    id: 2,
    img: FaLinkedinIn,
    link: "https://www.linkedin.com/in/iaryan/",
  },
  {
    id: 3,
    img: FaXTwitter,
    link: "https://x.com/i_AryanK",
  },
];
