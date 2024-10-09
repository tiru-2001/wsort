import './footer.scss';
import { navLinks } from '../../utilities';
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';

// Lazy load the icon components
const FaLinkedin = React.lazy(() => import('../../assets/icons/index').then(module => ({ default: module.FaLinkedin })));
const FaFacebookF = React.lazy(() => import('../../assets/icons/index').then(module => ({ default: module.FaFacebookF })));
const FaInstagram = React.lazy(() => import('../../assets/icons/index').then(module => ({ default: module.FaInstagram })));

const Footer = () => {
  return (
    <footer>
      <section className="footer_top">
        <section className="footertop_childs">
          <h3>
            Expert Website Development & Digital Marketing Services in Bangalore
            Websort is your go-to IT solutions partner in Bangalore,
            specializing in website development and digital marketing.
          </h3>
        </section>
        <section className="footertop_childs middle">
          <h3>Popular Searches</h3>
          <p>
            Web developement, Professional Website Development, Custom Website
            and App developement, Responsive Web and Mobile Design, E-commerce
            Website Development, Mobile App Development Services, Digital
            Marketing Solutions, SEO and Digital Marketing Services, Internships
            in Web Development, IT Training and Internships
          </p>
        </section>
        <section className="footertop_childs">
          <h3 className='quicklink'>QuickLinks</h3>
          <section className="quick_links">
            {navLinks.map((item) => (
              <Link className="footerlink link" key={item.id} to={item.path}>
                {item.title}
              </Link>
            ))}
          </section>
        </section>
        <section className="footertop_childs">
          <h3>Follow us</h3>
          <section className="social_media">
            <Suspense fallback={<div>Loading...</div>}>
              <a
                className="link footerlink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100095299999373"
              >
                <FaFacebookF
                  fontSize={'1.6rem'}
                  style={{
                    fontSize: '1.6rem',
                    borderBottom: '2px solid black',
                    paddingBottom: '2px ',
                  }}
                />
              </a>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <a
                className="link footerlink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/web-sort/mycompany/"
              >
                <FaLinkedin
                  fontSize={'1.6rem'}
                  style={{
                    fontSize: '1.6rem',
                    borderBottom: '2px solid black',
                    paddingBottom: '2px ',
                  }}
                />
              </a>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <a
                className="link footerlink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/websort_/"
              >
                <FaInstagram
                  fontSize={'1.6rem'}
                  style={{
                    fontSize: '1.6rem',
                    borderBottom: '2px solid black',
                    paddingBottom: '2px ',
                  }}
                />
              </a>
            </Suspense>
          </section>
        </section>
      </section>
      <section className="footer_bottom"></section>
    </footer>
  );
};

export default Footer;
