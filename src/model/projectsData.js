import portfolioWebsite from "../images/project_imgs/portfolio-website.png";
import trainReservations from "../images/project_imgs/train-reservations.png";
import taskifyPicture from "../images/project_imgs/taskify.png";
import gradeCalculator from "../images/project_imgs/grade-calculator.png";
import student from "../images/project_imgs/student_full_stack.png";

const portfolioWebsiteDescription =
  "This website was built with React and Bootstrap and primarily made following a tutorial on Udemy. I Mainly learned CSS styling (using custom classes) and making minor changes using Bootstrap shorthand. The Experience & Timeline section is a prominent example of new concepts: z-index, text manipulation, and predefined colors.";
const TrainReservationsDescription =
  "This project was built in concert with four others during a semester-long group project in Software Engineering. We utilized agile methodology, specifically SCRUM, for our project management methodology. We also used Trello as a project management tool, Github (heavily) as version control, and Java as our programming language.";
const taskifyDescription =
  "This website was built with React and Typescript and was primarily made to familiarize myself with typescript following a youtube tutorial. I also learned how to create drag-and-drop components during the process—hosted by firebase.";
const GCDescription =
  "This website was built as a class project for Client-Side Programming. We learned HTML, CSS, Javascript, and Bootstrap with a significant focus on React. We also learned about Firebase Hosting, it's real-time database, and user authentication. All of which is integrated into the app.";
const GCAdditional = "To view with prefilled data:";
const GcUlList = [
  'Click "Sign in with email"',
  "Email: gradecalculator@example.com",
  "Password: 123456",
];
const StudentDescription =
  "This project is a simple full-stack application built with Java Spring(boot), React (with Materials Icon for prebuilt UI components), and MySQL. This project is a WIP, and I plan to expand on it to create a student management application for students, faculty, and admins. To see installation instructions, view the readme for the project on GitHub.";

const noWestCollectiveDescription =
  "This is a website for a club at The University of West Florida (UWF). The site was built with React and Tailwind CSS.";

export const projects = [
  {
    projectName: "Grade Calculator",
    websiteURL: "https://grade-calculator-uwf.web.app/courses",
    githubURL: "https://github.com/KodyAnderson1/GradeTracker",
    description: GCDescription,
    additionalDescription: {
      description: GCAdditional,
      ULDescription: GcUlList,
    },
    imagePath: gradeCalculator,
  },
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
  {
    projectName: "Portfolio Website",
    githubURL: "https://github.com/KodyAnderson1/StudentDatabaseFullStack",
    description: StudentDescription,
    imagePath: student,
    tutorialName: "Youtube",
    tutorialURL: "https://www.youtube.com/watch?v=O_XL9oQ1_To",
  },
  // {
  //   projectName: "No.West Collective",
  //   githubURL: "https://github.com/KodyAnderson1/",
  //   description: noWestCollectiveDescription,
  //   imagePath: "",
  // },
];
