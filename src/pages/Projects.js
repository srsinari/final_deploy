import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Please click on the Image </h1>
      <h3>(Please click gently, My baby should not get hurt)</h3>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            
            <ProjectItem id={idx} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
