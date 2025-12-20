import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import Consistency from "./pages/Consistency";
import About from "./pages/About";
import AIGuide from "./pages/AIGuide";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen font-sans flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/consistency" element={<Consistency />} />
            <Route path="/about" element={<About />} />
            <Route path="/aiguide" element={<AIGuide />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
