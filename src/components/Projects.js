import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { projects } from "../model/projectsData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <h1 className="text-uppercase row d-flex justify-content-center py-5">Projects</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3500}
          centerMode={false}
          className="p-2"
          containerClass="container-with-dots"
          dotListClass=""
          // draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          {projects.map((project) => (
            <ProjectCard key={project.projectName} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;

function ProjectCard(props) {
  const project = props.project;

  const websiteInfoHeader = project.websiteURL ? (
    <>
      <Col xs={1} className="d-flex justify-content-end icon-link">
        <a rel="noreferrer" target="_blank" href={project.githubURL}>
          <AiFillGithub size={28} color="white" />
        </a>
      </Col>
      <Col xs={1} className="ms-2 d-flex justify-content-end">
        <a rel="noreferrer" target="_blank" className="text-black" href={project.websiteURL}>
          <CgWebsite size={28} color="white" className="" />
        </a>
      </Col>
    </>
  ) : (
    <Col xs={3} className="d-flex justify-content-end">
      <a rel="noreferrer" target="_blank" href={project.githubURL}>
        <AiFillGithub size={28} color="white" className="me-2" />
      </a>
    </Col>
  );

  return (
    <Col className="d-flex justify-content-center">
      <Card className="bg-dark text-white project-card">
        <Card.Img src={project.imagePath} onClick={() => window.open(`${project.githubURL}`)} />
        <Card.Title className="mt-4 ms-2">
          <Row>
            <Col xs={9} className="d-flex justify-content-start">
              {project.projectName}
            </Col>
            {websiteInfoHeader}
          </Row>
        </Card.Title>
        <Row xs={4} className="d-flex justify-content-center mt-3">
          {project.stack.map((element, index) => {
            return (
              <span bg="secondary-outline" key={element + index} className="project-card-stack">
                {element}
              </span>
            );
          })}
        </Row>
      </Card>
    </Col>
  );
}
