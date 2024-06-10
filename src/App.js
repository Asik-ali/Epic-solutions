import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Carrer from "./Pages/Carrer";
import Services from "./Pages/Services";
import Score from "./Pages/Score";
import ArticlePage from "./Pages/Article";
// import Sitemap from "./sitemap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* These routes render with Navbar and Footer */}
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>} />
        <Route path="/services" element={<>
          <Navbar />
          <Services />
          <Footer />
        </>} />
        <Route path="/About" element={<>
          <Navbar />
          <About />
          <Footer />
        </>} />
        <Route path="/Contact" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>} />
        <Route path="/Client" element={<>
          <Navbar />
          <Client />
          <Footer />
        </>} />
        <Route path="/Carrers" element={<>
          <Navbar />
          <Carrer />
          <Footer />
        </>} />
        {/* This route renders without Navbar and Footer */}
        <Route path="/score" element={ <><Navbar /><Score />  <Footer /></>} />
        <Route path="/article/:id" element={<><Navbar /><ArticlePage />  <Footer /></>} />
        {/* <Route path="/sitemap.xml" element={<Sitemap />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
