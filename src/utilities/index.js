import { v4 as uuidv4 } from 'uuid';
import {
  bhive,
  wecreate,
  ui,
  wd,
  app,
  dm,
  sa,
  su,
  sm,
  sw,
  shifali,
  tanvi,
  sadhana,
  yakshith,
} from '../assets';
const navLinks = [
  { path: '/', title: 'Home', id: uuidv4() },
  { path: '/services', title: 'Services', id: uuidv4() },
  { path: '/product', title: 'Product', id: uuidv4() },
  { path: '/about', title: 'About', id: uuidv4() },

  { path: '/contact', title: 'Contact', id: uuidv4() },
];
const address = [
  {
    id: uuidv4(),
    img: bhive,
    mainLocation: 'Bengaluru',
    locUrl: 'https://maps.app.goo.gl/9pRESGmdssmgoGr2A',
    addressDetails: [
      'BTM layout Bengaluru',
      '+91-9380583373',
      'info@thewebsort.com',
    ],
  },
  {
    id: uuidv4(),
    img: wecreate,
    mainLocation: 'Mysore',
    locUrl: 'https://maps.app.goo.gl/natJ7F5BRW89AnBH9',
    addressDetails: [
      '658,Vishwamanava double road,Saraswatipuram , Mysore ',
      '+91-9380583373',
      'info@thewebsort.com',
    ],
  },
];

const services = [
  {
    id: uuidv4(),
    img: wd,
    title: 'Web development',
    linke: '/services',
  },
  {
    id: uuidv4(),
    img: ui,
    title: 'UI/UX',
    linke: '/services',
  },
  {
    id: uuidv4(),
    img: app,
    title: 'App development',
    linke: '/services',
  },

  {
    id: uuidv4(),
    img: dm,
    title: 'Digital Marketing',
    linke: '/services',
  },
];

const services_page = [
  {
    id: uuidv4(),
    img: sw,
    title: 'Web development',
    desc: ' Building robust, scalable websites with seamless functionality and a focus on enhancing user experience and engagement. Our solutions are designed to adapt to evolving business requirements and technological advancements. We specialize in responsive design, ensuring your site looks and performs great on all devices, and implement the latest security measures to protect your data.',
  },
  {
    id: uuidv4(),
    img: sa,
    title: 'App development',
    desc: 'Crafting high-performance, user-friendly mobile and web applications tailored to your business needs with cutting-edge technologies. From ideation to deployment, we ensure seamless functionality and a superior user experience. Our team excels in developing scalable solutions, maintaining code quality, and providing ongoing support and updates.',
  },
  {
    id: uuidv4(),
    img: su,
    title: 'UI/UX',
    desc: 'Designing intuitive and visually appealing interfaces that provide an engaging and effortless user experience across all devices. We prioritize user feedback and iterative testing to deliver designs that truly resonate with your audience. Our approach integrates user-centered design principles, ensuring that every interaction is both meaningful and delightful',
  },
  {
    id: uuidv4(),
    img: sm,
    title: 'Digital Marketing',
    desc: 'Implementing innovative digital strategies to increase online visibility, drive traffic, and boost conversions through SEO, PPC, and social media marketing. Our data-driven approach ensures measurable results and continuous improvement. We create customized marketing campaigns tailored to your specific goals, leveraging analytics to optimize performance and maximize ROI.',
  },
];

const team = [
  { img: shifali, name: 'Shifali U', role: 'UI/UX' },
  { img: tanvi, name: 'Tanvi', role: 'Frontend Developer' },
  { img: sadhana, name: 'Sadhana', role: 'Frontend developer' },
  { img: yakshith, name: 'Yakshith', role: 'UI/UX' },
];
export { navLinks, address, services, services_page, team };
