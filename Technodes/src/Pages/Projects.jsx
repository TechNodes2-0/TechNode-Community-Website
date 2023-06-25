import React from 'react'
import ProjectCards from '../components/ProjectCards'

function Projects() {
  return (
    <div className="p-10 mt-20">
        <p className='text-5xl font-bold text-center'>PROJECTS</p>
        <div className='p-10 flex flex-wrap justify-center items-center'>\
            <div>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
            </div>
        </div>
    </div>
  )
}

export default Projects
