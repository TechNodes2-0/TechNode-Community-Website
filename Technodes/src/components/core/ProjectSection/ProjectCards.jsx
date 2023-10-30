import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const eventsData2 = [
  {
    title: "ElectiveHub",
    description:
      "ElectiveHub is an Education Management System designed to simplify and enhance the management of student information and elective subject selection in educational institutions. It offers a suite of applications for students, teachers, and administrators, providing a user-friendly platform.",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJvb2tzfGVufDB8fDB8fHww",
    url: "https://github.com/TechNodes2-0/ElectiveHub",
    btnText: "Know more",
    deploylink : "https://electivehub.onrender.com/", 
  },
  {
    title: "BioDrop",
    description:
      "Connect to your audience with a single link. Showcase the content you create and your projects in one place. Make it easier for people to find, follow and subscribe.",
    image:
      "https://user-images.githubusercontent.com/624760/230707268-1f8f1487-6524-4c89-aae2-ab45f0e17f39.png",
    url: "https://github.com/EddieHubCommunity/BioDrop",
    btnText: "Know more",
    deploylink : "https://biodrop.io/",
  },
  // Add more project data here if needed
];

export default function ProjectCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // You can use 'asc' or 'desc'

  const filteredProjects = eventsData2.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProjects = filteredProjects.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <section id="events" className="bg-[#293140]">
      <div className="layout py-20">
        <h1 className="h1">Projects</h1>
        <hr className="styled-hr my-6" />
        <div className="mb-6 text-center">
          <div className="relative mb-4 w-full flex flex-row items-stretch">
            <input
              type="search"
              className="border rounded-l px-3 py-1 text-base text-black focus:outline-none w-full"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="rounded-r border-2 border-secondary px-6 py-2 text-white font-medium uppercase text-base transition duration-150 ease-in-out hover:bg-secondary hover:bg-opacity-75 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-full space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project) => (
              <ProjectCard {...project} key={project.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



