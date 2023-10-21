import React from "react";
import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import AboutUs from "../components/core/Aboutus";

function Home() {
  return (
    <div className="bg-primary">
      <HeroSection />
      <AboutUs />
      <NewsLetter />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default Home;
