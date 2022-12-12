import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import trainReservations from "../../images/train-reservations.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { AiFillGithub } from "react-icons/ai";

export function TrainReservationsModal() {
  const githubURL = "https://github.com/KodyAnderson1/TrainReservationSystem";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="portfolio-image-box col d-flex justify-content-center" onClick={handleShow}>
        <img
          className="portfolio-image"
          src={trainReservations}
          alt="Grade Tracker Project with React and Bootstrap and firebase"
        />

        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Train Reservation System
            <a rel="noreferrer" className="text-black ms-3" target="_blank" href={githubURL}>
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This project was built in concert with four others during a semester-long group project
            in Software Engineering.
          </p>
          <p>
            We utilized agile methodology, specifically SCRUM, for our project management
            methodology. We also used Trello as a project management tool, Github (heavily) as
            version control, and Java as our programming language.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <a
            rel="noreferrer"
            className="text-white btn btn-primary me-auto"
            target="_blank"
            href={githubURL}>
            Github
          </a>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
