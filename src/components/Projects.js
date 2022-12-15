import React from "react";
import { GradeTrackerModal } from "./ProjectModals/GradeTracker";
import { projects } from "../model/projectsData";
import { SingleProjectModal } from "./ProjectModals/SingleProjectModal";
// import { NoWestCollectiveModal } from "./PortfolioModals/NoWestCollective";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Projects</h1>
          <div className="image-box-wrapper row">
            <GradeTrackerModal />

            {projects.map((project) => (
              <SingleProjectModal project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
