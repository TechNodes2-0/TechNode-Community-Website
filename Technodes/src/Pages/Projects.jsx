import React, { useState } from "react";
import ProjectCards from "../components/ProjectCards";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Best Match");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const cardData = [
    {
      image:
        "https://user-images.githubusercontent.com/85815172/272357345-a113ed3c-5611-4eb2-81b4-9896db64cfdc.png",
      heading: "ElectiveHub",
      description:
        "ElectiveHub is an Education Management System designed to simplify and enhance the management of student information and elective subject selection in educational institutions. It offers a suite of applications for students, teachers, and administrators, providing a user-friendly platform.",
      github: "https://github.com/TechNodes2-0/ElectiveHub",
      link: "https://electivehub.onrender.com/",
    },
    {
      image: "",

      heading: "Contentify",
      description:
        "Contentify is a versatile content creation, social media management, and educational resources platform. It provides users with a comprehensive set of tools to excel in content creation, streamline social media management, and access valuable educational resources.",
      github: "https://github.com/TechNodes2-0/Contentify",
      link: "https://contentifys.netlify.app/",
    },
    {
      image: "",

      heading: "Laughhub",
      description:
        "Laugh Hub is a hilarious bot with advanced AI voice assistance that offers fun conversations, funny stories, a meme generator, and three to four entertaining games. It's the perfect destination for anyone looking for a good laugh and a break from their daily routine.",
      github: "https://github.com/TechNodes2-0/Laughhub",
      link: "https://laughhub.tech/",
    },
    {
      image: "",

      heading: "CodeHUb",
      description:
        "CodeHubs is an online platform that fosters collaboration and learning among coding enthusiasts, particularly students. It serves as a hub for coding events, problem statements, and collaborative projects, providing a vibrant community for individuals passionate about programming.",
      github: "https://github.com/TechNodes2-0/CodeHUb",
      link: "https://codehubs.netlify.app/",
    },
  ];

  return (
    <div className="p-5 pt-20 bg-primary">
      <p className="text-3xl font-bold text-center">PROJECTS</p>

      <div className="flex justify-center items-center my-10 h-10 max-w-4xl mx-auto">
        <input
          key="random1"
          value=""
          className="max-w-72 border-0 rounded-md bg-white p-1 font-normal placeholder:text-gray-800"
          placeholder={"search Project"}
          onChange=""
        />

        <div className="relative inline-block text-left ml-5">
          <button
            onClick={toggleDropdown}
            type="button"
            className="py-1 px-2 border-2 border-main_primary rounded-[5px] text-[12px] lg:text-[14px] hover:bg-gray-700 "
            id="options-menu"
            aria-haspopup="listbox"
            aria-expanded="true"
          >
            Sort by: {sortOption}
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 bg-main_secondary"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                {[
                  "Best Match",
                  "Most Stars",
                  "Least Stars",
                  "Most Forks",
                  "Least Forks",
                ].map((option) => (
                  <a
                    key={option}
                    onClick=""
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    {option}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center flex-wrap max-w-4xl mx-auto">
        {cardData.map(({ image, heading, description, github, link }) => (
          <ProjectCards
            key={heading}
            image={image}
            heading={heading}
            description={description}
            github={github}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
