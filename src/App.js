import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import BlogPreview from "./components/BlogPreview.js";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";

function App() {
  const [page, setPage] = React.useState("about");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar page={page} setPage={setPage} className="navbar"/>
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<BlogPreview />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;