import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
}

export default App;
