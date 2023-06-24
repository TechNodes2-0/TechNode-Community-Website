import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import NewsLetter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <NewsLetter />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
