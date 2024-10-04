import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense, lazy } from 'react';

const Contact = lazy(() => import('./pages/contact/Contact'));
const Home = lazy(() => import('./pages/home/Home'));
const Services = lazy(() => import('./pages/services/Services'));
const Parent = lazy(() => import('./pages/parent/Parent'));
const About = lazy(() => import('./pages/about/About'));
const Project = lazy(() => import('./pages/project/Project'));
const Internships = lazy(() => import('./pages/internships/Internships'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const IndiBlog = lazy(() => import('./pages/indiBlog/IndiBlog'));

const App = () => {
  return (
    <section>
      <ToastContainer />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Parent />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/blog" element={<Blog />} />
              <Route path ="/indiBlog" element={<IndiBlog/>}/>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </section>
  );
};

export default App;
