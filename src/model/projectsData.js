import portfolioWebsite from "../images/project_imgs/portfolio-website.png";
import trainReservations from "../images/project_imgs/train-reservations.png";
import taskifyPicture from "../images/project_imgs/taskify.png";

const portfolioWebsiteDescription =
  "This website was built with React and Bootstrap and primarily made following a tutorial on Udemy. I Mainly learned CSS styling (using custom classes) and making minor changes using Bootstrap shorthand. The Experience & Timeline section is a prominent example of new concepts: z-index, text manipulation, and predefined colors.";
const TrainReservationsDescription =
  "This project was built in concert with four others during a semester-long group project in Software Engineering. We utilized agile methodology, specifically SCRUM, for our project management methodology. We also used Trello as a project management tool, Github (heavily) as version control, and Java as our programming language.";
const taskifyDescription =
  "This website was built with React and Typescript and was primarily made to familiarize myself with typescript following a youtube tutorial. I also learned how to create drag-and-drop components during the process—hosted by firebase.";

export const projects = [
  {
    projectName: "Portfolio Website",
    websiteURL: "https://kanderson.dev/",
    githubURL: "https://github.com/KodyAnderson1/PortfolioWebsite",
    description: portfolioWebsiteDescription,
    imagePath: portfolioWebsite,
    tutorialName: "Udemy",
    tutorialURL: "https://www.udemy.com/course/build-portfolio-with-reactjs-and-bootstrap/",
  },
  {
    projectName: "Train Reservation System",
    githubURL: "https://github.com/KodyAnderson1/TrainReservationSystem",
    description: TrainReservationsDescription,
    imagePath: trainReservations,
  },
  {
    projectName: "Taskify",
    websiteURL: "https://taskify-a2209.web.app/",
    githubURL: "https://github.com/KodyAnderson1/taskify",
    description: taskifyDescription,
    imagePath: taskifyPicture,
    tutorialName: "Youtube",
    tutorialURL: "https://www.youtube.com/watch?v=FJDVKeh7RJI",
  },
  // {
  //   projectName: "No.West Collective",
  //   githubURL: "https://github.com/KodyAnderson1/",
  //   description: TrainReservationsDescription,
  //   imagePath: trainReservations,
  // },
];
