import React from "react";
import { projects } from "../model/projectsData";
import { SingleProjectModal } from "./SingleProjectModal";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Projects</h1>
          <div className="image-box-wrapper row">
            {projects.map((project) => (
              <SingleProjectModal key={project.projectName} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
