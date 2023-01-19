import portfolioWebsite from "../images/project_imgs/portfolio-website.png";
import trainReservations from "../images/project_imgs/train-reservations.png";
import taskifyPicture from "../images/project_imgs/taskify.png";
import gradeCalculator from "../images/project_imgs/grade-calculator.png";
import student from "../images/project_imgs/student_full_stack.png";
import notesApp from "../images/project_imgs/Notes_markdown_app.png";
import sudokuImg from "../images/project_imgs/java_sudoku.png";
import jobTacker from "../images/project_imgs/ApplicationTracker.png";

export const projects = [
  {
    projectName: "Grade Calculator",
    websiteURL: "https://grade-calculator-uwf.web.app/courses",
    githubURL: "https://github.com/KodyAnderson1/GradeTracker",
    stack: ["React", "JavaScript", "NoSQL"],
    imagePath: gradeCalculator,
  },
  {
    projectName: "Portfolio Website",
    websiteURL: "https://kanderson.dev/",
    githubURL: "https://github.com/KodyAnderson1/PortfolioWebsite",
    imagePath: portfolioWebsite,
    stack: ["Bootstrap", "React", "JavaScript"],
  },
  {
    projectName: "Job/Application Tracker",
    githubURL: "https://github.com/KodyAnderson1/ApplicationTracker",
    imagePath: jobTacker,
    stack: ["React", "Express", "MongoDB"],
  },
  {
    projectName: "Student Management Full Stack",
    githubURL: "https://github.com/KodyAnderson1/StudentDatabaseFullStack",
    imagePath: student,
    stack: ["React", "Java", "MySQL"],
  },
  {
    projectName: "Taskify",
    websiteURL: "https://taskify-a2209.web.app/",
    githubURL: "https://github.com/KodyAnderson1/taskify",
    imagePath: taskifyPicture,
    stack: ["Bootstrap", "TypeScript", "React"],
  },
  {
    projectName: "Notes App",
    websiteURL: "https://notesapp-c9688.web.app/",
    githubURL: "https://github.com/KodyAnderson1/MarkdownNotesApp",
    imagePath: notesApp,
    stack: ["CSS", "TypeScript", "React"],
  },
  {
    projectName: "Sudoku",
    githubURL: "https://github.com/KodyAnderson1/SudokuDesktopJava",
    imagePath: sudokuImg,
    stack: ["Java"],
  },
  {
    projectName: "Train Reservation System",
    githubURL: "https://github.com/KodyAnderson1/TrainReservationSystem",
    imagePath: trainReservations,
    stack: ["Java"],
  },
  // {
  //   projectName: "TV / Movies Search",
  //   websiteURL: "",
  //   githubURL: "https://github.com/KodyAnderson1/FavoriteMotionPictures",
  //   imagePath: "",
  //   stack: ["TypeScript", "React", "Bootstrap"],
  // },

  // {
  //   projectName: "No.West Collective",
  //   githubURL: "https://github.com/KodyAnderson1/",
  //   description: noWestCollectiveDescription,
  //   imagePath: "",
  // },
];
