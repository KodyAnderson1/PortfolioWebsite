import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import taskifyPicture from "../../images/project_imgs/taskify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
// AiFillGithub

export function TaskifyModal() {
  const websiteURL = "https://taskify-a2209.web.app/";
  const githubURL = "https://github.com/KodyAnderson1/taskify";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={taskifyPicture}
          alt="Taskify Project with Typescript, and React."
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Taskify
            <a rel="noreferrer" target="_blank" className="text-black ms-3" href={websiteURL}>
              <CgWebsite />
            </a>
            <a rel="noreferrer" className="ms-3 text-black" target="_blank" href={githubURL}>
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This website was built with React and Typescript and was primarily made to familiarize
            me with typescript following a youtube tutorial. I also learned how to create
            drag-and-drop components during the process—hosted by firebase.
          </p>
          <p>
            Youtube link{" "}
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=FJDVKeh7RJI">
              here
            </a>
            .
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="me-auto">
            <a
              rel="noreferrer"
              className="text-white btn btn-primary"
              target="_blank"
              href={websiteURL}>
              Website
            </a>
            <a
              rel="noreferrer"
              className="text-white btn btn-primary ms-1"
              target="_blank"
              href={githubURL}>
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
