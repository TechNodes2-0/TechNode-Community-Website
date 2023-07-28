import React from "react";

export default function HeroSection() {
  return (
    <div>
      <section className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl flex flex-col-reverse md:flex-row justify-between">
            <div className="text-center md:text-left max-md:mt-10">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Innovate, Collaborate,
                <span className="sm:block"> Impact </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-textcolor">
                Uniting tech enthusiasts to promote open-source collaboration,
                knowledge sharing, and problem-solving for positive impact.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-textcolor hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-textcolor hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="m-auto px-5">
              <img className="w-96 h-72 object-cover border-0 rounded-md" src="https://th.bing.com/th/id/R.f1650d0c876866292eb3f6f3115675e0?rik=V2FPs0dzHP9YYA&riu=http%3a%2f%2fontheway.cafe%2fwp-content%2fuploads%2f2016%2f04%2fbigstock-purchased-114599852.jpg&ehk=rNjFEl8Wd%2fqTDdrm%2fZ%2f1bDRZJccwGsin8noT6H7WSh0%3d&risl=&pid=ImgRaw&r=0" title="community image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
