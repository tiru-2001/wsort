import './home.scss';
import gsap from 'gsap';
import { v4 } from 'uuid';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { services } from '../../utilities';
import { Helmet } from 'react-helmet';
import {
  team,
  FaPhoneAlt,
  BsTransparency,
  FaPeopleCarry,
  FaSackDollar,
  // herobg1,
  // herobg2,
} from '../../assets/index';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useGSAP(() => {
    let t1 = gsap.timeline();
    // gsap.to('.top_left', {
    //   x: -800,
    //   ease: 'power3.out',
    //   scrollTrigger: {
    //     trigger: '.top_left',
    //     start: 'top 1%',
    //     end: 'top -20%',
    //     scrub: 1,
    //   },
    // });

    // gsap.to(".top_right", {
		// 	x: 800,
		// 	ease: "power3.out",
		// 	scrollTrigger: {
		// 		trigger: ".top_right",
		// 		start: "top 1%",
		// 		end: "top -20%",
		// 		scrub: 1,
		// 	},
		// });
    gsap.fromTo(".home_section1 .bottom h1", {
      opacity: 0,
      duration: 2, 
      ease: "power2.out"
    }, {
      opacity: 1, 
      duration: 2,
      delay:1, 
      scrollTrigger: {
        trigger: ".home_section1 .bottom h1",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        onLeave: () => {
          gsap.to(".home_section1 .bottom h1", { opacity: 0, duration: 1 });
        }
      }
    });
    
    ScrollTrigger.create({
      trigger: ".home_section1 .bottom p",
      start: "top 70%",  
      onEnter: () => {
        new TypeIt(".home_section1 .bottom p", {
          speed: 40,     
          waitUntilVisible: true,  
        }).go();
      }
    });
		gsap.from(".team_image", {
			x: -900,
			duration: 1,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".team_image",
				start: "top 95%",
				end: "top 50%",
				scrub: 2,
			},
		});
    gsap.from('.home_section3_right', {
      x: 500,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.home_section3_right',
        start: 'top 60%',
        end: 'top 30%',
        scrub: 2,
      },
    });
    t1.from('.home_section4 h1', {
      x: 300,
      opacity: 0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.home_section4 h1',
        start: 'top 95%',
        end: 'top 20%',
        scrub: 2,
      },
    });
    t1.from('.item_container', {
      y: 150,
      opacity: 0,
      stagger: 1,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.item_container',
        start: 'top 95%',
        end: 'top 20%',
        scrub: 2,
      },
    });
  });
  const collaboration = [
    {
      id: v4(),
      icon: <FaPhoneAlt className="icon" />,
      title: 'Regular Communication',
      desc: 'we establish open lines of communication through emails, phone calls, video conferences, or in-person meetings.',
    },
    {
      id: v4(),
      icon: <FaSackDollar className="icon" />,
      title: 'Value-added Services',
      desc: 'We offer value-added services beyond the scope of the initial project to exceed your expectations.',
    },
    {
      id: v4(),
      icon: <BsTransparency className="icon" />,
      title: 'Transparency',
      desc: 'We maintain transparency throughout the collaboration process by providing clear information about timelines, budgets, and deliverables.',
    },
    {
      id: v4(),
      icon: <FaPeopleCarry className="icon" />,
      title: 'Understanding your needs',
      desc: 'We understand your goal,preferences,timelines,deliverables and come out with optimized solution',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Websort | Leading IT Solutions for Your Business</title>
        <meta
          name="description"
          content="Websort provides top-quality IT solutions, including web development, software development, and IT consulting services. Discover how we can help your business thrive."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Websort | Leading IT Solutions for Your Business"
        />
        <meta
          property="og:description"
          content="Websort provides top-quality IT solutions, including web development, software development, and IT consulting services. Discover how we can help your business thrive."
        />
        <meta property="og:url" content="https://www.thewebsort.com/" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.thewebsort.com/" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta
          name="keywords"
          content="IT solutions, web development, software development, IT consulting, business IT services, Websort, IT company"
        />
      </Helmet>

      <section className="home">
        <section className="home_section1">
          <section className="top">
            {/* <section className="top_left">
              <img src={herobg1} alt="herobg1" />
            </section>
            <section className="top_right">
              <img src={herobg2} alt="herobg2" />
            </section> */}
          </section>
          <section className="bottom">
            <h1>Websort-Your Premier Web Development and Design Partner</h1>
            <p>
              At WebSort, we are passionate about crafting exceptional digital
              experiences. Whether you're a startup looking to establish a
              strong online presence or an established business aiming to revamp
              your website, our expert team is here to bring your vision to
              life.
            </p>
          </section>
        </section>
        <section className="home_section2">
          <h1>We Provide the Best-Services for you</h1>
          <section className="section2_subsection">
            {services.map((item) => {
              return (
                <section key={item.id} className="service_items">
                  <section className="top">
                    <section className="top_top">
                      <img src={item.img} alt={item.alt} />
                    </section>
                    <section className="top_bottom">
                      <h1 className="heading_font">{item.title}</h1>
                    </section>
                  </section>
                </section>
              );
            })}
          </section>
        </section>
        <section className="home_section3">
          <section className="left">
            <img className="team_image" src={team} alt="image" />
          </section>
          <section className="right home_section3_right">
            <h1> Synergy Architects</h1>
            <p>
              Our Synergy Architects blend creativity and collaboration to craft
              cutting-edge software solutions. United by a common goal, we
              leverage diverse talents to innovate and excel. Together, we build
              the future of technology.
            </p>
          </section>
        </section>

        <section className="home_section4">
          <h1>how we collaborate</h1>
          <section className="bottom">
            {collaboration.map((item) => {
              return (
                <section key={item.id} className="item_container">
                  <section className="item">
                    <section className="left">{item.icon}</section>
                    <section className="right">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </section>
                  </section>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
