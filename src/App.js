import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Headshot from "./components/Headshot";
import Contact from "./components/Contact";

import "./assets/reset.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="bgc-darkblue d-f fxd-c">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <section className="ai-c d-f fx-wr jc-c p">
                <AboutMe />
                <Headshot />
              </section>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
