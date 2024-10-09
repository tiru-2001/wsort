import './services.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { services_page } from '../../utilities';
import { Helmet } from 'react-helmet';
import { clock, girllap, hammer, remote } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.to('.service_section1 .bottom', {
      left: '50%',
      transform: 'translate(-50%,-50%)',
      duration: 1,
      ease: 'sine',
      scrollTrigger: {
        trigger: '.service_section1 .bottom',
        start: 'top 12%',
        end: 'top 3%',
        scrub: 2,
      },
    });

    gsap.utils.toArray('.service_section2 .left img').forEach((item) =>
      gsap.from(item, {
        scale: 0.4,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 2,
        },
      })
    );

    gsap.utils.toArray('.odd_item .right, .even_item .right').forEach((item) =>
      gsap.from(item, {
        scale: 0.4,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 2,
        },
      })
    );

    const gridItem1Image = document.querySelector('.grid-item1 .image');
    const gridItem2Image = document.querySelector('.grid-item2 .image');
    const gridItem3Image = document.querySelector('.grid-item3 .image1');
    const gridItem4Image = document.querySelector('.grid-item4 .image');

    const handleMouseEnterHorizontal = (target) => {
      gsap.to(target, {
         x: -50,
         duration: 0.3 
      });
    };
    const handleMouseLeaveHorizontal = (target) => {
      gsap.to(target, {
         x: 0,
         duration: 0.3 
      });
    };

    const handleMouseEnterVertical = (target) => {
      gsap.to(target, {
         y: -40, 
         duration: 0.3
      });
    };
    const handleMouseLeaveVertical = (target) => {
      gsap.to(target, { 
         y: 0,
         duration: 0.3
      });
    };

    if (gridItem1Image) {
      gridItem1Image.addEventListener('mouseenter', () => handleMouseEnterHorizontal(gridItem1Image));
      gridItem1Image.addEventListener('mouseleave', () => handleMouseLeaveHorizontal(gridItem1Image));
    }

    if (gridItem4Image) {
      gridItem4Image.addEventListener('mouseenter', () => handleMouseEnterHorizontal(gridItem4Image));
      gridItem4Image.addEventListener('mouseleave', () => handleMouseLeaveHorizontal(gridItem4Image));
    }

    if (gridItem2Image) {
      gridItem2Image.addEventListener('mouseenter', () => handleMouseEnterVertical(gridItem2Image));
      gridItem2Image.addEventListener('mouseleave', () => handleMouseLeaveVertical(gridItem2Image));
    }

    if (gridItem3Image) {
      gridItem3Image.addEventListener('mouseenter', () => handleMouseEnterVertical(gridItem3Image));
      gridItem3Image.addEventListener('mouseleave', () => handleMouseLeaveVertical(gridItem3Image));
    }

    return () => {
      if (gridItem1Image) {
        gridItem1Image.removeEventListener('mouseenter', handleMouseEnterHorizontal);
        gridItem1Image.removeEventListener('mouseleave', handleMouseLeaveHorizontal);
      }
      if (gridItem4Image) {
        gridItem4Image.removeEventListener('mouseenter', handleMouseEnterHorizontal);
        gridItem4Image.removeEventListener('mouseleave', handleMouseLeaveHorizontal);
      }
      if (gridItem2Image) {
        gridItem2Image.removeEventListener('mouseenter', handleMouseEnterVertical);
        gridItem2Image.removeEventListener('mouseleave', handleMouseLeaveVertical);
      }
      if (gridItem3Image) {
        gridItem3Image.removeEventListener('mouseenter', handleMouseEnterVertical);
        gridItem3Image.removeEventListener('mouseleave', handleMouseLeaveVertical);
      }
    };
  });

  return (
    <>
      <Helmet>
        <title>Our Services | Websort - Comprehensive IT Solutions</title>
        <meta
          name="description"
          content="Explore Websort's wide range of IT services, including web development, software development, IT consulting, and more. Tailored solutions to meet your business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services | Websort - Comprehensive IT Solutions" />
        <meta property="og:description" content="Explore Websort's wide range of IT services, including web development, software development, IT consulting, and more. Tailored solutions to meet your business needs." />
        <meta property="og:url" content="https://www.thewebsort.com/services" />
        <link rel="canonical" href="https://www.thewebsort.com/services" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta name="keywords" content="IT services, web development, software development, IT consulting, business IT solutions, Websort services, IT company" />
      </Helmet>
      <section className="service">
        <section className="service_section1">
          <section className="top">
            <h1>
              Our <span>Services</span>
            </h1>
          </section>
          <section className="bottom"></section>
        </section>

        <section className="service_section2">
          <h1>
            What <span>we do</span>
          </h1>
          <section className="bottom">
            {services_page.map((singleservice, ind) => {
              if ((1 + ind) % 2 === 0) {
                return (
                  <section className="even_item" key={ind}>
                    <section className="left">
                      <img src={singleservice.img} alt={singleservice.alt} loading="lazy" />
                    </section>
                    <section className="right">
                      <h2>{singleservice.title}</h2>
                      <p>{singleservice.desc}</p>
                    </section>
                  </section>
                );
              } else {
                return (
                  <section className="odd_item" key={ind}>
                    <section className="left">
                      <img src={singleservice.img} alt="" loading="lazy" />
                    </section>
                    <section className="right">
                      <h2>{singleservice.title}</h2>
                      <p>{singleservice.desc}</p>
                    </section>
                  </section>
                );
              }
            })}
          </section>

          <section className="service_section_grids">
            <h2 className="section-heading">Why Choose Us !!</h2>
            <div className="grid-container">
              <div className="grid-item grid-item1">
                <h2>High-quality results, prompt service, and affordable pricing.</h2>
                <p>At WebSort, we prioritize delivering high-quality results on time and within budget. Our commitment to punctuality, affordability, and excellence sets us apart in the industry, ensuring client satisfaction on every project. We combine expertise and reliability to consistently provide top-notch service, making us a trusted partner in every endeavor.
                </p>
                <img src={clock} alt="Top Notch" className="griditem1 image" loading="lazy" />
              </div>

              <div className="grid-right">
                <div className="grid-item grid-item2">
                  <h2>Industry Specialists with Hands-On Expertise</h2>
                  <p>
                  With extensive industry experience and deep domain knowledge, we provide our clients with exceptional insights and expertise. Our hands-on approach ensures tailored solutions that address specific challenges, delivering unmatched value and results. 
                  </p>
                  <img src={remote} alt="Domain Experts" className="griditem2 image" loading="lazy" />
                </div>

                <div className="grid-horizontal">
                  <div className="grid-item grid-item3">
                    <h2>Excellence Across Diverse Domains</h2>
                    <p>
                      World-class team mastering challenges across diverse domains, delivering excellence through expertise and innovation.
                    </p>
                    <img src={girllap} alt="Diverse Domains" className="griditem3 image1" loading="lazy" />
                  </div>

                  <div className="grid-item grid-item4">
                    <h2>Future-Ready Development</h2>
                    <p>
                      Our design-centered approach ensures a wow factor, delivering superior user experiences that are future-focused.
                    </p>
                    <img src={hammer} alt="Future-Ready" className="griditem4 image" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="service_section3"></section>
      </section>
    </>
  );
};

export default Services;
