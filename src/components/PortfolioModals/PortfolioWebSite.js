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
            <a
              rel="noreferrer"
              target="_blank"
              className="text-black ms-3"
              href="https://github.com/KodyAnderson1/">
              <CgWebsite />
            </a>
            <a
              rel="noreferrer"
              className="ms-3 text-black"
              target="_blank"
              href="https://github.com/KodyAnderson1/PortfolioWebsite">
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This website was built with React and Bootstrap. Primarily built following a tutorial on
            Udemy. Primarily learned CSS styling using custom classes, with small changes using
            Bootstrap's. The Experience section's timeline as a large example. Using z-index, and
            text manipulation as well as predefined colors were all great concepts learned from
            building this website.
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
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
