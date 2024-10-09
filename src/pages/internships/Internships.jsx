import './internships.scss';
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Internships = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' } 
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Certified IT Internship Program | Websort</title>
        <meta
          name="description"
          content="Join Websort's certified IT internship program and gain real-time project experience in various IT domains. Register now to kickstart your IT career!"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Certified IT Internship Program | Websort"
        />
        <meta
          property="og:description"
          content="Join Websort's certified IT internship program and gain real-time project experience in various IT domains. Register now to kickstart your IT career!"
        />
        <meta
          property="og:url"
          content="https://www.thewebsort.com/internships"
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.thewebsort.com/internships" />
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta
          name="keywords"
          content="IT internships, real-time project experience, startup India, Websort, IT career, certified internship, web development internship, software development internship"
        />
      </Helmet>
      
      <section className="internship" ref={containerRef}>
        <section className="section1">
        </section>
        
        <section className="section2">
          <div className="card">
            <h1>
              Certified Internship Program in IT Sectors: Real-Time Project
              Experience
            </h1>
            <p>
              Websort, a Startup India certified company, offers internships
              across various IT domains, designed to equip students with hands-on
              experience in real-time projects. Our program provides comprehensive
              guidance, helping interns develop practical skills and deep
              understanding by working on live projects that mirror industry
              standards. This certification adds credibility to our commitment to
              nurturing future IT professionals, ensuring students are
              well-prepared for their careers with valuable insights and
              experience in their chosen fields.
            </p>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/11faL9W-811QqsA1VU88emNshYrrXec8K2B8U5Gt0ndY/edit?chromeless=1"
              rel="noreferrer"
            >
              Register now
            </a>
          </div>
        </section>
        <section className='section3'>

        </section>
      </section>
    </>
  );
};

export default Internships;
