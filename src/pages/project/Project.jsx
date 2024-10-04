import './project.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { project_page } from '../../utilities';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);
import img from '../../assets/images/project.png';

const Projects = () => {
  
  useGSAP(() => {
    gsap.fromTo(
      '.project_section1 .image', 
      { x: '-100%', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 2, ease: 'power1.inOut', 
        scrollTrigger: {
          trigger: '.project_section1',
          start: 'top 50%',
          end: 'top 50%',
          scrub: 2,
          toggleActions: 'play reverse play reverse', 
          yoyo: true,
        },
      }
    );
    gsap.fromTo(
      '.project_section1 .text', 
      { x: '100%', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 1, stagger: true, ease: 'power1.inOut', 
        scrollTrigger: {
          trigger: '.project_section1',
          start: 'top 50%',
          end: 'top 50%',
          scrub: 2,
          toggleActions: 'play reverse play reverse', 
          yoyo: true,
        },
      }
    );

    gsap.utils.toArray('.even_item').forEach((item) => {
      gsap.fromTo(
        item.querySelector('.left img'), 
        { scale: 0.4, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.inOut', scrollTrigger: {
            trigger: item.querySelector('.left'),
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );

      gsap.fromTo(
        item.querySelector('.right'), 
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power1.inOut', scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );
    });

    gsap.utils.toArray('.odd_item').forEach((item) => {
      gsap.fromTo(
        item.querySelector('.left img'), 
        { scale: 0.4, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.inOut', scrollTrigger: {
            trigger: item.querySelector('.left'),
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );

      gsap.fromTo(
        item.querySelector('.right'), 
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power1.inOut', scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );
    });

    const image = document.querySelector('.project_section1 .image img');

    if (image) {
      gsap.to(image, {
        y: '-50px', 
        duration: 0.5,
        ease: 'bounce.inout',
        repeat: -1, 
        yoyo: true, 
      });
    }
  });

  return (
    <>
      <Helmet>
        <title>Our Projects | Websort - Innovative IT Solutions</title>
        <meta
          name="description"
          content="Explore Websort's wide range of completed projects, including web development, software solutions, and more. Our projects reflect innovation and creativity tailored to client needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Projects | Websort - Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Explore Websort's wide range of completed projects, including web development, software solutions, and more. Our projects reflect innovation and creativity tailored to client needs."
        />
        <meta property="og:url" content="https://www.thewebsort.com/projects" />
        <link rel="canonical" href="https://www.thewebsort.com/projects" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta
          name="keywords"
          content="IT projects, web development, software solutions, client projects, Websort projects, IT company"
        />
      </Helmet>
      <section className="project">
        <section className="project_section1">
          <section className="text">
            <h1>Creating Success Stories,<span> One Step at a Time</span></h1>
            <p>
              Websort fosters a positive, encouraging, and inclusive atmosphere where you can make a meaningful difference.
            </p>
          </section>
          <section className="image">
            <img src={img} alt="Success Story" />
          </section>
        </section>

        <section className="project_section2">
          <h1>
            Our <span>Projects</span>
          </h1>
          <section className="bottom">
            {project_page.map((singleProject, ind) => {
              if ((1 + ind) % 2 === 0) {
                return (
                  <section className="even_item" key={ind}>
                    <section className="left">
                      <img src={singleProject.img} alt="" />
                    </section>
                    <section className="right">
                      <h2>{singleProject.title}</h2>
                      <p>{singleProject.desc}</p>
                      <button onClick={() =>  window.open(singleProject.button.path, "_blank")}>
                        SEE MORE
                      </button>
                    </section>
                  </section>
                );
              } else {
                return (
                  <section className="odd_item" key={ind}>
                    <section className="left">
                      <img src={singleProject.img} alt="" />
                    </section>
                    <section className="right">
                      <h2>{singleProject.title}</h2>
                      <p>{singleProject.desc}</p>
                      <button onClick={() =>  window.open(singleProject.button.path, "_blank")}>
                        SEE MORE
                      </button>
                    </section>
                  </section>
                );
              }
            })}
          </section>
        </section>
        <section className="project_section3"></section>
      </section>
    </>
  );
};

export default Projects;
