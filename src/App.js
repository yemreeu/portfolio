import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app reset flex-wrapper">
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <div className="content"><Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes></div>
        <div className="footer"><Footer /></div>

        
      </Router>
    </div>
  );
}

export default App;
