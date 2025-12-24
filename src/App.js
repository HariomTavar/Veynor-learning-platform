import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import Consistency from "./pages/Consistency";
import Experts from "./pages/Experts";
import Profile from "./pages/Profile";
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
            <Route path="/aiguide" element={<AIGuide />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
