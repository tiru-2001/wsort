import './parent.scss';
import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
gsap.registerPlugin(ScrollSmoother);
const Parent = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      content: 'main',
      wrapper: '.parent_maincontainer',
      smooth: 2,
      // effects: true,
    });
  });
  return (
    <section className="parent_maincontainer heading_font">
      <main>
        <Header />

        <Outlet />

        <Footer />
      </main>
    </section>
  );
};

export default Parent;
