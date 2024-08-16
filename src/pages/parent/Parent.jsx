import './parent.scss';
import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

const Parent = () => {
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
