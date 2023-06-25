import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HeroSection />
      <NewsLetter />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
