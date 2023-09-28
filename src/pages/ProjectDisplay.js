import React from "react";
import {Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const linkstyle={color:"white", textDecoration:"none"}
  return (
    <div className="project">
      
      <img src={project.image} />
      <h1> {project.name}</h1>
      <button className="backbutton" ><Link style={linkstyle}  to="/projects">Back</Link></button>
      
      </div>
  );
}

export default ProjectDisplay;
