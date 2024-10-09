import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import React, { useState, Suspense } from "react";
import gsap from "gsap";
import logo from '../../assets/images/logo.png';

const IoMdHome = React.lazy(() => import("react-icons/io").then(module => ({ default: module.IoMdHome })));
const MdMiscellaneousServices = React.lazy(() => import("react-icons/md").then(module => ({ default: module.MdMiscellaneousServices })));
const MdOutlineFlightTakeoff = React.lazy(() => import("react-icons/md").then(module => ({ default: module.MdOutlineFlightTakeoff })));
const IoIosSchool = React.lazy(() => import("react-icons/io").then(module => ({ default: module.IoIosSchool })));
const BsBuildingsFill = React.lazy(() => import("react-icons/bs").then(module => ({ default: module.BsBuildingsFill })));
const FaPhoneAlt = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaPhoneAlt })));
const FaProjectDiagram = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaProjectDiagram })));

const navLinks = [
  { id: 1, title: "Home", path: "/", icon: <IoMdHome /> },
  { id: 2, title: "Services", path: "/services", icon: <MdMiscellaneousServices /> },
  { id: 3, title: "Products", path: "https://www.globethrough.com/", icon: <MdOutlineFlightTakeoff />, external: true },
  { id: 4, title: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { id: 5, title: "Internships", path: "/internships", icon: <IoIosSchool /> },
  { id: 6, title: "About", path: "/about", icon: <BsBuildingsFill /> },
  { id: 7, title: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const Header = () => {
  useState(() => {
    let t1 = gsap.timeline();
    t1.from(".logo", {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "bounce",
    });
    t1.from(".link", {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.5,
      ease: "bounce",
    });
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" loading="lazy" />
      </Link>
      <nav>
        {navLinks.map((item) =>
          item.external ? (
            <a
              className="link"
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `${isActive && "active"} link ${item.isButton ? "button-link" : ""}`
              }
              key={item.id}
              to={item.path}
            >
              <Suspense fallback={<div>Loading...</div>}>
                {item.title}
              </Suspense>
            </NavLink>
          )
        )}
      </nav>
      <section className="mobile_nav">
        {navLinks.map((item) =>
          item.external ? (
            <a
              className="nav_link"
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </Suspense>
            </a>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `${isActive && "active"} nav_link ${item.isButton ? "button-link" : ""}`
              }
              key={item.id}
              to={item.path}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </Suspense>
            </NavLink>
          )
        )}
      </section>
    </header>
  );
};

export default Header;
