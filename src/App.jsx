import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Login from "./components/Login";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Categories />
            <HowItWorks />
            <Testimonial />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path = '/Restaurant' element={<RestaurantList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
