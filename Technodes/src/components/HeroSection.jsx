import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="flex h-screen items-center justify-center text-center">
        <div className="layout max-w-4xl">
          <h1 className="heading">Innovate Collaborate Impact </h1>
          <h2 className="h3 my-5 font-medium text-content">
            Uniting tech enthusiasts to promote open-source collaboration,
            knowledge sharing, and problem-solving for positive impact.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-x-6">
          <a href="https://github.com/TechNodes2-0" className="rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="https://github.com/TechNodes2-0/TechNode-Community-Website" className="rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn More</a>
       
        </div>
        </div>
      </section>
    </div>
  );
}
