import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import portfolioWebsite from "../../images/project_imgs/portfolio-website.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
// AiFillGithub

export function SingleProjectModal(props) {
  const project = props.project;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={project.imagePath}
          alt={`img of ${project.projectName}`}
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {project.projectName}
            {project.websiteURL ? (
              <a
                rel="noreferrer"
                target="_blank"
                className="text-black ms-3"
                href={project.websiteURL}>
                <CgWebsite />
              </a>
            ) : (
              <></>
            )}
            <a
              rel="noreferrer"
              className="ms-3 text-black"
              target="_blank"
              href={project.githubURL}>
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{project.description}</p>
          {project.tutorialName ? (
            <p>
              {project.tutorialName} course{" "}
              <a rel="noreferrer" target="_blank" href={project.tutorialURL}>
                here
              </a>
              .
            </p>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="me-auto">
            {project.websiteURL ? (
              <a
                rel="noreferrer"
                className="text-white btn btn-primary"
                target="_blank"
                href={project.websiteURL}>
                Website
              </a>
            ) : (
              <></>
            )}
            <a
              rel="noreferrer"
              className="text-white btn btn-primary ms-1"
              target="_blank"
              href={project.githubURL}>
              Github
            </a>
          </div>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
