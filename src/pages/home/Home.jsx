import React, { useEffect } from 'react';
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
} from '../../assets/index';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const collaboration = React.useMemo(() => [
    {
      id: v4(),
      icon: <FaPhoneAlt className="icon" />,
      title: 'Regular Communication',
      desc: 'We establish open lines of communication through emails, phone calls, video conferences, or in-person meetings.',
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
      desc: 'We understand your goals, preferences, timelines, deliverables and provide optimized solutions.',
    },
  ], []);

  useGSAP(() => {
    let t1 = gsap.timeline();

    gsap.from(".home_section1 .bottom p", {
      x: -900,
      opacity: 0,
      duration: 2,
      delay: 0.3,
      ease: "power2.inOut",
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

  return (
    <>
      <Helmet>
        <title>Websort | Leading IT Solutions for Your Business</title>
        <meta
          name="description"
          content="Websort provides top-quality IT solutions, including web development, software development, and IT consulting services. Discover how we can help your business thrive."
        />

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
        <link rel="canonical" href="https://www.thewebsort.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta
          name="keywords"
          content="IT solutions, web development, software development, IT consulting, business IT services, Websort, IT company"
        />
      </Helmet>

      <section className="home">
        <section className="home_section1">
          <section className="bottom">
            <h2>Websort-Your Premier Web Development and Design Partner</h2>
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
            {services.map((item) => (
              <section key={item.id} className="service_items">
                <section className="top">
                  <section className="top_top">
                    <img src={item.img} alt={item.alt} loading="lazy" />
                  </section>
                  <section className="top_bottom">
                    <h1 className="heading_font">{item.title}</h1>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>

        <section className="home_section3">
          <section className="left">
            <img className="team_image" src={team} alt="Team" loading="lazy" />
          </section>
          <section className="right home_section3_right">
            <h1>Synergy Architects</h1>
            <p>
              Our Synergy Architects blend creativity and collaboration to craft
              cutting-edge software solutions. United by a common goal, we
              leverage diverse talents to innovate and excel. Together, we build
              the future of technology.
            </p>
          </section>
        </section>

        <section className="home_section4">
          <h1>How We Collaborate</h1>
          <section className="bottom">
            {collaboration.map((item) => (
              <section key={item.id} className="item_container">
                <section className="item">
                  <section className="left">{item.icon}</section>
                  <section className="right">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
