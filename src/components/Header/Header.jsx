import './header.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { navLinks } from '../../utilities'; // This includes the 'isButton' property for the Contact link
import { CiMenuFries } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import gsap from 'gsap';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  // GSAP Animation
  useState(() => {
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
  }, []);

  // Toggle mobile menu
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
            className={({ isActive }) =>
              `${isActive && 'active'} link ${item.isButton ? 'button-link' : ''}`
            }
            key={item.id}
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      <section className="mobile_nav">
        {!toggle && (
          <CiMenuFries style={{ cursor: 'pointer' }} onClick={active} />
        )}
        {toggle && (
          <section className="toggle_menu">
            <section className="top">
              {toggle && (
                <RxCross2 style={{ cursor: 'pointer' }} onClick={active} />
              )}
            </section>
            <section className="bottom">
              {navLinks.map((item) => (
                <NavLink
                  onClick={active}
                  className={({ isActive }) =>
                    `${isActive && 'active'} link ${item.isButton ? 'button-link' : ''}`
                  }
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
