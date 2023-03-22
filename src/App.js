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
    <Router>
      <div className="app reset">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
