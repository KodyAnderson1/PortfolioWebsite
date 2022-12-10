import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import trainReservations from "../../images/train-reservations.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

export function TrainReservationsModal() {
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
            Grade Calculator
            {/* <a
              rel="noreferrer"
              target="_blank"
              className="text-black ms-3"
              href="https://github.com/KodyAnderson1/">
              <CgWebsite />
            </a> */}
            <a
              rel="noreferrer"
              className="text-black ms-3"
              target="_blank"
              href="https://github.com/KodyAnderson1/TrainReservationSystem">
              <AiFillGithub />
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This project was built in concert with Andrew Rabinowitz, Dillon Vaughan, Chase Sisson,
            and Anthony Welter during a semester-long group project in Software Engineering.
          </p>
          <p>
            We utilized agile methodology, and more specifically, SCRUM for project management
            methodology. We also used Trello as a project management tool and Github (heavily) as
            version control, and Java as our programming language.
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
