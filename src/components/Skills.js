import { imgObjs } from "./urlData";

const languageSkills = imgObjs.map((language) => {
  return (
    <div className="col-4" key={language.name}>
      <div className="row">
        <img
          src={language.url}
          alt={`SVG img of ${language.name}`}
          className="skills-img-wrapper"
        />
      </div>
      <h3 className="row text-white d-flex justify-content-center mt-3 skills-img-text">
        {language.name}
      </h3>
    </div>
  );
});

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skills-wrapper bg-dark">
          <h2 className="skills-heading d-flex justify-content-center py-5">skills</h2>
          <div className="container container-fluid">
            <div className="row">{languageSkills}</div>
          </div>
        </div>
      </section>
    </>
  );
};
