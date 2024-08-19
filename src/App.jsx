import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Contact,
  Home,
  Services,
  Parent,
  About,
  Product,
  Internships,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <section>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/internships" element={<Internships />} />
          </Route>
        </Routes>
      </Router>
    </section>
  );
};

export default App;
