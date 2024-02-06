import React from "react";
import projects from"../../projects.json"
import Wrapper from "../../Components/Wrapper";
import Project from "../../Components/Project";
function ProjectGallery(){
    return (
        <>
        <div className="project">
        <h1 className="title">MMyy Prrojjectts</h1>
        </div>
    
          <Wrapper>
            {projects.map((project) => (
              <Project
              name={project.name}
              key={project.id}
              image={project.image}
              github={project.github}
              deployedapp={project.deployedapp}
              />
            ))}
          </Wrapper>
        </>
        
        );
}
export default ProjectGallery