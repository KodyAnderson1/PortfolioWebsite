import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { AiFillLinkedin } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <div className="navbar-brand navbar-brand-name">
          <p>Kody Anderson</p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link">
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" className="nav-link">
                experience
              </Link>
            </li>

            <li className="nav-item">
              <a
                rel="noreferrer"
                target="_blank"
                className="nav-link"
                href="https://github.com/KodyAnderson1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                  alt="github logo">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                rel="noreferrer"
                target="_blank"
                className="nav-link"
                href="https://www.linkedin.com/in/kody-anderson/">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
