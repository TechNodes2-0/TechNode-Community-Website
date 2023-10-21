import React from 'react'
import ProjectCards from '../components/ProjectCards'


function Projects() {

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
      image:
        "",

      heading: "Contentify",
      description:
        "Contentify is a versatile content creation, social media management, and educational resources platform. It provides users with a comprehensive set of tools to excel in content creation, streamline social media management, and access valuable educational resources.",
      github: "https://github.com/TechNodes2-0/Contentify",
      link: "https://contentifys.netlify.app/",
    },
    {
      image:
        "",

      heading: "Laughhub",
      description:
        "Laugh Hub is a hilarious bot with advanced AI voice assistance that offers fun conversations, funny stories, a meme generator, and three to four entertaining games. It's the perfect destination for anyone looking for a good laugh and a break from their daily routine.",
      github: "https://github.com/TechNodes2-0/Laughhub",
      link: "https://laughhub.tech/",
    },
    {
      image:
        "",

      heading: "CodeHUb",
      description:
        "CodeHubs is an online platform that fosters collaboration and learning among coding enthusiasts, particularly students. It serves as a hub for coding events, problem statements, and collaborative projects, providing a vibrant community for individuals passionate about programming.",
      github: "https://github.com/TechNodes2-0/CodeHUb",
      link: "https://codehubs.netlify.app/",
    },
  ];

  return (
    <div className="p-10 pt-20 bg-primary">
        <p className='text-3xl font-bold text-center'>PROJECTS</p>
        <div className="flex justify-start flex-wrap max-w-4xl mx-auto">
            {cardData.map(({ image, heading, description,github , link }) => (
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
  )
}

export default Projects
