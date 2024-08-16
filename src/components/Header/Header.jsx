import './header.scss';
import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { navLinks } from '../../utilities';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import gsap from 'gsap';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from('.logo', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'bounce',
    });
    t1.from('.link', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.5,
      ease: 'bounce',
    });
  });
  const active = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        {navLinks.map((item) => (
          <NavLink
            className={({ isActive }) => `${isActive && 'active'} link`}
            key={item.id}
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      {/* mobile nav  */}
      <section className="mobile_nav">
        {!toggle && <CiMenuFries onClick={active} />}
        {toggle && (
          <section className="toggle_menu">
            <section className="top">
              {toggle && <RxCross2 onClick={active} />}
            </section>
            <section className="bottom">
              {navLinks.map((item) => (
                <NavLink
                  onClick={active}
                  className={({ isActive }) => `${isActive && 'active'} link`}
                  key={item.id}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              ))}
            </section>
          </section>
        )}
      </section>
    </header>
  );
};

export default Header;
