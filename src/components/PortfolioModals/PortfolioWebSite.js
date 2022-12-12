import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import portfolioWebsite from "../../images/portfolio-website.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
// AiFillGithub

export function PortfolioWebsiteModal() {
  const websiteURL = "https://github.com/KodyAnderson1/";
  const githubURL = "https://github.com/KodyAnderson1/PortfolioWebsite";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={portfolioWebsite}
          alt="Grade Tracker Project with React and Bootstrap and firebase"
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Portfolio Website
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
            This website was built with React and Bootstrap and primarily made following a tutorial
            on Udemy. I Mainly learned CSS styling (using custom classes) and making minor changes
            using Bootstrap shorthand. The Experience & Timeline section is a prominent example of
            new concepts: z-index, text manipulation, and predefined colors.
          </p>
          <p>
            Udemy course{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.udemy.com/course/build-portfolio-with-reactjs-and-bootstrap/">
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
