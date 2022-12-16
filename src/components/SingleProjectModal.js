import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

export function SingleProjectModal(props) {
  const project = props.project;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const additionalInfo = project.additionalDescription ? (
    <>
      {project.additionalDescription.description}
      <ul>
        {project.additionalDescription.ULDescription.map((li, index) => (
          <li key={index}>{li}</li>
        ))}
      </ul>
    </>
  ) : (
    <></>
  );

  const tutorialInfo = project.tutorialName ? (
    <p>
      {project.tutorialName} course{" "}
      <a rel="noreferrer" target="_blank" href={project.tutorialURL}>
        here
      </a>
      .
    </p>
  ) : (
    <></>
  );

  const websiteInfoHeader = project.websiteURL ? (
    <a rel="noreferrer" target="_blank" className="text-black ms-3" href={project.websiteURL}>
      <CgWebsite />
    </a>
  ) : (
    <></>
  );

  const websiteInfoFooter = project.websiteURL ? (
    <a
      rel="noreferrer"
      className="text-white btn btn-primary"
      target="_blank"
      href={project.websiteURL}>
      Website
    </a>
  ) : (
    <></>
  );

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={project.imagePath}
          alt={`img of ${project.projectName} app`}
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {project.projectName}
            {websiteInfoHeader}
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
          {additionalInfo}
          {tutorialInfo}
        </Modal.Body>
        <Modal.Footer>
          <div className="me-auto">
            {websiteInfoFooter}
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
