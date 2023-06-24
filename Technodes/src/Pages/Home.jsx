import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NewsLetter />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
