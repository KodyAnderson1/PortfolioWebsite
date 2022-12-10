import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import gradeCalculator from "../../images/grade-calculator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

export function GradeTrackerModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={gradeCalculator}
          alt="Grade Tracker Project with React and Bootstrap and firebase"
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Grade Calculator
            <a
              rel="noreferrer"
              target="_blank"
              className="text-black ms-3"
              href="https://grade-calculator-uwf.web.app/courses">
              <CgWebsite />
            </a>
            <a
              rel="noreferrer"
              className="text-black ms-3"
              target="_blank"
              href="https://github.com/KodyAnderson1/GradeTracker">
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This website was built as a class project for Client-Side Programming. We learned HTML,
            CSS, Javascript, and Bootstrap with a significant focus on React. We also learned about
            Firebase Hosting, it's real-time database, and user authentication. All of which is
            integrated into the app. This project was created primarily by myself with assistance
            from Cam Ball and Brandon Biello.
          </p>
          <p>
            To view the app with prefilled data
            <ul>
              <li>Click "Sign in with email"</li>
              <li>Email: gradecalculator@example.com</li>
              <li>Password: 123456</li>
            </ul>
            Otherwise, feel free to create an account and start from scratch!
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
