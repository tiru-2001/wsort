import './contact.scss';
import { AddressComponent } from '../../components';
import { address } from '../../utilities';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { toast } from 'react-toastify';
import { sendEmail } from '../../utilities/email';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from('h1', {
      opacity: 0,
      x: -200,
      duration: 0.9,
      ease: 'power3.out',
    });

    t1.from('input,button', {
      opacity: 0,
      x: 100,
      duration: 0.9,
      ease: 'power3.out',
    });
    gsap.from('#b', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#b',
        start: 'top 50%',
        end: 'top 20%',
        scrub: 1,
      },
    });
    gsap.from('#a', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#a',
        start: 'top 50%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    gsap.from('.h2', {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.h2',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
      },
    });
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await sendEmail({
        ...formData,
        message: `You got a message from ${formData.firstname} and the message is ${formData.message} ${formData.phone}`,
      });
      if (response) {
        toast.success('Form submitted successfully');
        setLoading(false);
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
      }
    } catch (e) {
      toast.error('Something went wrong');
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Websort - Get in Touch with Us</title>
        <meta
          name="description"
          content="Reach out to Websort for any inquiries or support. We are here to help you with all your IT needs. Contact us via phone, email, or our contact form."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Us | Websort - Get in Touch with Us"
        />
        <meta
          property="og:description"
          content="Reach out to Websort for any inquiries or support. We are here to help you with all your IT needs. Contact us via phone, email, or our contact form."
        />
        <meta
          property="og:url"
          content="https://www.thewebsort.com/contact-us"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.thewebsort.com/contact" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Websort" />
        <meta
          name="keywords"
          content="contact Websort, IT support, customer service, IT solutions, get in touch, IT inquiries, contact form"
        />
      </Helmet>
      <section className="contact_container">
        <h1>Contact Us</h1>

        <section className="form_section">
          <form onSubmit={handleSubmit}>
            <input
              value={formData.firstname}
              name="firstname"
              type="text"
              onChange={handleChange}
              placeholder=" firstname"
            />
            <input
              onChange={handleChange}
              value={formData.lastname}
              name="lastname"
              type="text"
              placeholder=" lastname"
            />
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder=" email"
            />
            <input
              onChange={handleChange}
              value={formData.phone}
              name="phone"
              type="tel"
              placeholder=" number"
            />
            <input
              onChange={handleChange}
              value={formData.message}
              name="message"
              type="text"
              placeholder="message"
            />
            <button>{loading ? 'loading...' : 'submit'}</button>
          </form>
        </section>
        <h2 className="h2">Our Office locations</h2>
        {address.map((item) => (
          <AddressComponent key={item.id} {...item} />
        ))}
              <section className='last_section'></section>

      </section>
    </>
  );
};

export default Contact;
