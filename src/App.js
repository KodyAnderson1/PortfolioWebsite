import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
    </>
  );
}

export default App;
