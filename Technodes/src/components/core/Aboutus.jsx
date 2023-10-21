import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://ouch-cdn2.icons8.com/xnmdBf_mEe40un3QHP3WETZ7GfHwjfuPy8UrTNeLSOA/rs:fit:368:265/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEx/L2ZmMWYyZjE1LWU3/ODItNGY3Yi05MjE4/LTQxYTlhZWQ1MjZl/Ny5wbmc.png"
              alt="A beautiful landscape"
              className="relative object-cover w-full h-96 rounded-3xl"
            />
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
              About Us
            </h2>
            <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              Technode's is a dynamic and inclusive community fostering
              collaboration among students. Our mission is to empower students
              through technology and open-source solutions. Together, we build a
              platform for knowledge-sharing, problem-solving, and innovation.
            </p>
            <div className="flex flex-row flex-wrap items-center mb-10 gap-x-4">
              <a
                href="https://discord.gg/7p4cnGUK"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
              >
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">Discord</span>
              </a>
              <a
                href="https://github.com/TechNodes2-0"
                className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
              >
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
