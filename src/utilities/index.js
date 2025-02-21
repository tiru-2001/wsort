import { v4 as uuidv4 } from 'uuid';
import {
  shailesh,
  keertana,
  bhive,
  wecreate,
  ui,
  wd,
  app,
  marketing,
  sa,
  su,
  sm,
  sw,
  shifali,
  tanvi,
  sadhana,
  yakshith,
  tiru,
  jayanth,
  Kishore,
  Prithvin,
  holi,
  india,
  sono,
  boom,
  cmm,
  cngen,
  finn,
  frank,
  vishna,
  blue,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
} from '../assets';

const navLinks = [
  { path: '/', title: 'Home', id: uuidv4() },
  { path: '/services', title: 'Services', id: uuidv4() },
  {
    path: 'https://www.globethrough.com/',
    title: 'Products',
    id: uuidv4(),
    external: true,
  },
  { path: '/projects', title: 'Projects', id: uuidv4() },
  { path: '/internships', title: 'Internships', id: uuidv4() },
  { path: '/about', title: 'About', id: uuidv4() },
  { path: '/contact', title: 'Contact', id: uuidv4(), isButton: true },
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
    alt: 'Website Development Company',
    title: 'Web development',
    linke: '/services',
  },
  {
    id: uuidv4(),
    img: ui,
    alt: 'Website Development Company',
    title: 'UI/UX',
    linke: '/services',
  },
  {
    id: uuidv4(),
    img: app,
    alt: 'Website Development Company',
    title: 'App development',
    linke: '/services',
  },

  {
    id: uuidv4(),
    img: marketing,
    alt: 'Website Development Company',
    title: 'Digital Marketing',
    linke: '/services',
  },
];

const services_page = [
  {
    id: uuidv4(),
    img: sw,
    alt: 'Best Website Builders',
    title: 'Web development',
    desc: 'Building robust, scalable websites with seamless functionality and a focus on enhancing user experience and engagement. Our solutions are designed to adapt to evolving business requirements and technological advancements. We specialize in responsive design, ensuring your site looks and performs great on all devices, and implement the latest security measures to protect your data.',
  },
  {
    id: uuidv4(),
    img: sa,
    alt: 'Best Website Builders',
    title: 'App development',
    desc: 'Crafting high-performance, user-friendly mobile and web applications tailored to your business needs with cutting-edge technologies. From ideation to deployment, we ensure seamless functionality and a superior user experience. Our team excels in developing scalable solutions, maintaining code quality, and providing ongoing support and updates.',
  },
  {
    id: uuidv4(),
    img: su,
    alt: 'Best Website Builders',
    title: 'UI/UX',
    desc: 'Designing intuitive and visually appealing interfaces that provide an engaging and effortless user experience across all devices. We prioritize user feedback and iterative testing to deliver designs that truly resonate with your audience. Our approach integrates user-centered design principles, ensuring that every interaction is both meaningful and delightful.',
  },
  {
    id: uuidv4(),
    img: sm,
    alt: 'Best Website Builders',
    title: 'Digital Marketing',
    desc: 'Implementing innovative digital strategies to increase online visibility, drive traffic, and boost conversions through SEO, PPC, and social media marketing. Our data-driven approach ensures measurable results and continuous improvement. We create customized marketing campaigns tailored to your specific goals, leveraging analytics to optimize performance and maximize ROI.',
  },
];

const team = [
  { img: jayanth, name: 'Jayanth', role: 'Founder, CEO' },
  { img: Prithvin, name: 'Prithvin', role: 'Software Developer' },
  { img: tiru, name: 'Tirumalesha E', role: 'Full stack developer' },
  { img: Kishore, name: 'Kishore', role: 'Full stack developer' },



  { img: shifali, name: 'Shifali U', role: 'UI/UX Designer' },
  { img: yakshith, name: 'Yakshith', role: 'UI/UX Designer' },
  { img: shailesh, name: 'Shailesh I Naik', role: 'Marketing analyst' },
];

const project_page = [
  {
    img: holi,
    alt: 'E-commerce Website Development',
    title: 'HOLIDEVISER',
    desc: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.',
    button: {
      path: 'https://www.holideviser.com/',
    },
  },
  {
    img: blue,
    alt: 'E-commerce Website Development',
    title: 'BLUEPRINTai',
    desc: 'Blue Print ai is to empower AI and Deep learning projects with the highest quality enriched data, enabling our clients to create smarter, more accurate, and more efficient AI systems',
    button: {
      path: 'https://www.theblueprintai.com/',
    },
  },
  {
    img: finn,
    alt: 'E-commerce Website Development',
    title: 'FINNABLE',
    desc: 'Finnable is one of the fastest growing financial technology (Fintech) start-up to help employees get hassle free loans.',
    button: {
      path: 'https://www.finnable.com/',
    },
  },
  {
    img: cmm,
    alt: 'E-commerce Website Development',
    title: 'CMMGROUPS',
    desc: 'CMMGROUPS.COM is the only online career resource that offers a behind-the-scenes look at job opportunities with hundreds of companies',
    button: {
      path: 'https://cmmgroups.com/',
    },
  },
  {
    img: sono,
    alt: 'Custom Website Design',
    title: 'SONOVATE',
    desc: 'They built Sonovate to provide fast, flexible, tech-driven finance that fits into any business.Their people make them who they are and define how they can help their business grow.',
    button: {
      path: 'https://www.sonovate.com/',
    },
  },
  {
    img: frank,
    alt: 'Custom Website Design',
    title: 'FRANKBANKER',
    desc: 'FrankBanker is a platform for open dialogue on banking, fintech, and related technologies. Their mission is to share knowledge and encourage candid discussions within the industry',
    button: {
      path: 'https://www.frankbanker.com/',
    },
  },
  {
    img: vishna,
    alt: 'Custom Website Design',
    title: 'VAISHNAVI BUILDERS AND DEVELOPERS',
    desc: 'Vaishnavi Builders & Developers is committed to delivering high-quality services to its clients by providing them with reasonable and valuable property services. ',
    button: {
      path: 'http://vaishnavibuildersanddevelopers.com/',
    },
  },
  {
    img: boom,
    alt: 'Custom Website Design',
    title: 'BOOM BOLT',
    desc: 'Inspired by street culture, Boombolt is an experssion of freedom, a sense of belonging, and that you belong to a larger fraternity of the free minded, experience seeking, unique and original tribe.',
    button: {
      path: 'https://boombolt.in/',
    },
  },
  {
    img: cngen,
    alt: 'Custom Website Design',
    title: 'CNGEN SERVICES',
    desc: 'Cngen bridge the gap between lenders and borrowers , offering a comprehensive suite of services including fund collection, astute financial counsel, meticulous documentation, and beyond',
    button: {
      path: 'https://play.google.com/store/search?q=cngen+services&c=apps&hl=en',
    },
  },
  {
    img: india,
    alt: 'Custom Website Design',
    title: 'INDIA THERAPIST',
    desc: 'At Their Therapy Clinic, they prioritize personalized care and effective solutions, guiding individuals towards holistic well-being with compassion and expertise.',
    button: {
      path: 'https://indiatherapist.com/',
    },
  },
  // {
  //   img: sticky,
  //   title: 'STICKY HR',
  //   desc: 'Elevating HR Management through Innovative, AI-Driven Solutions. Together, lets simplify processes, enhance productivity, and shape the future of work.',
  //   button: {
  //     path: 'https://www.stickyhr.com/',
  //   },

  // },
];

const blogsection = [
  {
    img: blog1,
    alt: 'WebSite Development Services',
    desc: 'Maximize Your Online Presence with These Tips!',
    content1: `Search engine optimization (SEO) is the foundation of online
							visibility. By using relevant keywords, optimizing meta tags, and
							creating high-quality content, you can improve your site's ranking
							on search engines like Google. Ensure your website is mobile
							friendly, loads quickly, and provides a great user experience to
							keep visitors engaged.`,
    content2: `Social media is a powerful tool for increasing your reach and
							engaging with your audience. Use platforms like Instagram,
							Facebook, LinkedIn, and Twitter to share valuable content, promote
							products, and interact with followers. Consistency is key post
							regularly, respond to comments, and use hashtags strategically to
							connect with the right people.`,
    content3: `Content is king. Blog posts, videos, podcasts, and infographics
							are all great ways to provide value to your audience. Focus on
							creating content that answers your audience's questions, solves
							their problems, or entertains them. High-quality content can
							position you as an expert in your field and drive more traffic to
							your site.`,
    content4: `Email marketing remains one of the most effective ways to nurture
							relationships with your audience. Send regular newsletters with
							personalized content, exclusive offers, or product updates.
							Segment your email list to deliver more targeted content, and
							include clear calls to action (CTAs) to drive conversions.`,
    id: uuidv4(),
  },
  {
    img: blog2,
    alt: 'Affordable Web Development',
    desc: 'Master the Art of Seamless User Experience.',
    content1: `Search engine optimization (SEO) is the foundation of online
							visibility. By using relevant keywords, optimizing meta tags, and
							creating high-quality content, you can improve your site's ranking
							on search engines like Google. Ensure your website is mobile
							friendly, loads quickly, and provides a great user experience to
							keep visitors engaged.`,
    content2: `Social media is a powerful tool for increasing your reach and
							engaging with your audience. Use platforms like Instagram,
							Facebook, LinkedIn, and Twitter to share valuable content, promote
							products, and interact with followers. Consistency is key post
							regularly, respond to comments, and use hashtags strategically to
							connect with the right people.`,
    content3: `Content is king. Blog posts, videos, podcasts, and infographics
							are all great ways to provide value to your audience. Focus on
							creating content that answers your audience's questions, solves
							their problems, or entertains them. High-quality content can
							position you as an expert in your field and drive more traffic to
							your site.`,
    content4: `Email marketing remains one of the most effective ways to nurture
							relationships with your audience. Send regular newsletters with
							personalized content, exclusive offers, or product updates.
							Segment your email list to deliver more targeted content, and
							include clear calls to action (CTAs) to drive conversions.`,
    id: uuidv4(),
  },
  {
    img: blog3,
    alt: 'Web Development',
    desc: 'Transform Your Ideas into Stunning Websites.',
    content1: `Search engine optimization (SEO) is the foundation of online
							visibility. By using relevant keywords, optimizing meta tags, and
							creating high-quality content, you can improve your site's ranking
							on search engines like Google. Ensure your website is mobile
							friendly, loads quickly, and provides a great user experience to
							keep visitors engaged.`,
    content2: `Social media is a powerful tool for increasing your reach and
							engaging with your audience. Use platforms like Instagram,
							Facebook, LinkedIn, and Twitter to share valuable content, promote
							products, and interact with followers. Consistency is key post
							regularly, respond to comments, and use hashtags strategically to
							connect with the right people.`,
    content3: `Content is king. Blog posts, videos, podcasts, and infographics
							are all great ways to provide value to your audience. Focus on
							creating content that answers your audience's questions, solves
							their problems, or entertains them. High-quality content can
							position you as an expert in your field and drive more traffic to
							your site.`,
    content4: `Email marketing remains one of the most effective ways to nurture
							relationships with your audience. Send regular newsletters with
							personalized content, exclusive offers, or product updates.
							Segment your email list to deliver more targeted content, and
							include clear calls to action (CTAs) to drive conversions.`,
    id: uuidv4(),
  },
  {
    img: blog4,
    alt: 'Affordable Web Development',
    desc: 'Web Development Made Simple and Effective.',
    content1: `Search engine optimization (SEO) is the foundation of online
							visibility. By using relevant keywords, optimizing meta tags, and
							creating high-quality content, you can improve your site's ranking
							on search engines like Google. Ensure your website is mobile
							friendly, loads quickly, and provides a great user experience to
							keep visitors engaged.`,
    content2: `Social media is a powerful tool for increasing your reach and
							engaging with your audience. Use platforms like Instagram,
							Facebook, LinkedIn, and Twitter to share valuable content, promote
							products, and interact with followers. Consistency is key post
							regularly, respond to comments, and use hashtags strategically to
							connect with the right people.`,
    content3: `Content is king. Blog posts, videos, podcasts, and infographics
							are all great ways to provide value to your audience. Focus on
							creating content that answers your audience's questions, solves
							their problems, or entertains them. High-quality content can
							position you as an expert in your field and drive more traffic to
							your site.`,
    content4: `Email marketing remains one of the most effective ways to nurture
							relationships with your audience. Send regular newsletters with
							personalized content, exclusive offers, or product updates.
							Segment your email list to deliver more targeted content, and
							include clear calls to action (CTAs) to drive conversions.`,
    id: uuidv4(),
  },
  {
    img: blog5,
    alt: 'Affordable Web Development',
    desc: 'Innovative Solutions for a Modern Web.',
    content1: `Search engine optimization (SEO) is the foundation of online
							visibility. By using relevant keywords, optimizing meta tags, and
							creating high-quality content, you can improve your site's ranking
							on search engines like Google. Ensure your website is mobile
							friendly, loads quickly, and provides a great user experience to
							keep visitors engaged.`,
    content2: `Social media is a powerful tool for increasing your reach and
							engaging with your audience. Use platforms like Instagram,
							Facebook, LinkedIn, and Twitter to share valuable content, promote
							products, and interact with followers. Consistency is key post
							regularly, respond to comments, and use hashtags strategically to
							connect with the right people.`,
    content3: `Content is king. Blog posts, videos, podcasts, and infographics
							are all great ways to provide value to your audience. Focus on
							creating content that answers your audience's questions, solves
							their problems, or entertains them. High-quality content can
							position you as an expert in your field and drive more traffic to
							your site.`,
    content4: `Email marketing remains one of the most effective ways to nurture
							relationships with your audience. Send regular newsletters with
							personalized content, exclusive offers, or product updates.
							Segment your email list to deliver more targeted content, and
							include clear calls to action (CTAs) to drive conversions.`,
    id: uuidv4(),
  },
];
export {
  navLinks,
  address,
  services,
  services_page,
  team,
  project_page,
  blogsection,
};
