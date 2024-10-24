import React, { useEffect, useRef } from 'react';
import './about.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { mission } from '../../assets';
import { team } from '../../utilities';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  useGSAP(() => {
    gsap.to('.about_section1 .content', {
      top: 0,
      duration: 1,
      ease: 'back',
      scrollTrigger: {
        trigger: '.about_section1 .content',
        start: 'top 35%',
        end: 'top 10%',
        scrub: 2,
      },
    });
  });

  const goToBlog = () => {
    navigate('/blog');
  };

  // Lazy loading sections
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionRefs]);

  return (
    <>
      <Helmet>
        <title>About Us | Websort - Your IT Solutions Partner</title>
        <meta
          name="description"
          content="Learn more about Websort, our mission, vision, and the team behind our success. We are dedicated to providing top-notch IT solutions and services."
        />
      </Helmet>
      <section className="about">
        <section className="about_section1" ref={(el) => (sectionRefs.current[0] = el)}>
          <section className="content">
            <h1>
              About <span>Us</span>
            </h1>
          </section>
        </section>
        <section className="about_section2" ref={(el) => (sectionRefs.current[1] = el)}>
          <h2>
            Our <span>Mission</span>
          </h2>
          <section className="section2_content">
            <section className="left">
              <img src={mission} alt="Website Development" loading="lazy" />
            </section>
            <section className="right">
              <p>
                At Websort, we turn ideas into exceptional digital experiences...
              </p>
            </section>
          </section>
        </section>
        <section className="about_section3" ref={(el) => (sectionRefs.current[2] = el)}>
          <h2>Team</h2>
          <section className="section3_content">
            {team.map((item) => (
              <section className="members" key={item.name}>
                <section className="top">
                  <div height={200} offset={100}>
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>
                </section>
                <section className="bottom">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className="about_section4" ref={(el) => (sectionRefs.current[3] = el)}>
          <h1>Explore our blogs here</h1>
          <button onClick={goToBlog}>GoTo Blog</button>
        </section>
        <section className="about_section5"></section>
      </section>
    </>
  );
};

export default About;
