import { FaGithub } from "react-icons/fa";
import ProjectCards from "./ProjectCards";

const ProjectCard = ({ image, title, description, url, btnText, git , deploylink}) => {
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-content/5 p-4 bg-[#181a1e]">
        <img
          src={image}
          className="aspect-video w-full rounded-lg object-cover object-center sm:mb-0"
          alt={title + "banner"}
        />
        <div className="pt-6 pb-3">
          <h3>{title}</h3>
          <p className="mt-2">{description}</p>
          {/* <div className="mt-4 flex gap-2">
            <a
              href={url}
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-secondary rounded-md  sm:w-auto sm:mb-0"
              data-primary="green-400"
              data-rounded="rounded-2xl"
              data-primary-reset="{}"
            >
              Get Started 
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div> */}
          <div className="mt-4 flex gap-2">
          <a
          href={url} // Replace url1 with the URL you want for the second button
          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-secondary rounded-md sm:w-auto sm:mb-0"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          data-primary-reset="{}"
          >
            Get Started 
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          
          <a
            href={deploylink} // Replace url2 with the URL for your second button
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-primary rounded-md sm:w-auto sm:mb-0" // Modify the classes as needed
            data-primary="blue-400" // Modify the data attributes as needed
            data-rounded="rounded-2xl" // Modify the data attributes as needed
            data-primary-reset="{}" // Modify the data attributes as needed
          >
            Online Platform 
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        </div>
      </div>
    </>
  );
};

export default ProjectCard;
