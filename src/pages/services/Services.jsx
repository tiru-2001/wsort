import './services.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { services_page } from '../../utilities';
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
    gsap.utils.toArray('.odd_item .right').forEach((item) =>
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
    gsap.utils.toArray('.even_item .right').forEach((item) =>
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
  });
  return (
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
            if ((1 + ind) % 2 == 0) {
              return (
                <section className="even_item">
                  <section className="left">
                    <img src={singleservice.img} alt="" />
                  </section>
                  <section className="right">
                    <h2>{singleservice.title}</h2>
                    <p>{singleservice.desc}</p>
                  </section>
                </section>
              );
            } else {
              return (
                <section className="odd_item">
                  <section className="left">
                    <img src={singleservice.img} alt="" />
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
      </section>
      <section className="service_section3"></section>
    </section>
  );
};

export default Services;
