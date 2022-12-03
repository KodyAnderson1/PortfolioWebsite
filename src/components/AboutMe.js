import React from "react";
import headshot from "../headshot.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrapper mb-5">
            <img className="profile-img" src={headshot} alt="author's headshot" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading">About Me</h2>
          {/* <p>
            My name is Kody Anderson, I am a senior graduating in December 2023 with a major in
            Software Design & Development. My skills include Java, C++, JavaScript (with Node.js &
            MongoDB), as well as experience using git / GitHub, and SQL (Apache Derby). I am eager
            to enter the workforce and practice the skills I have learned (and continue to learn)
            and I look forward to becoming an invaluable asset to my employer as a software
            developer!
          </p> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque perferendis.
            Dicta dolor fugiat animi laudantium debitis excepturi a impedit iusto, accusantium aut
            nam blanditiis accusamus laborum quaerat, reiciendis ut, aperiam corporis praesentium
            minus dignissimos quae. Qui nam ipsum quisquam ab porro? Dolorum repudiandae perferendis
            aliquid enim explicabo tempora laborum molestiae error et provident! Odit, reiciendis
            atque ut, quasi rerum nemo praesentium minima quis dignissimos fuga magni repudiandae
            nam! Incidunt voluptas animi quis? Recusandae laborum sed officia ab itaque quos
            doloribus saepe consectetur necessitatibus sit? Accusantium sunt doloremque eligendi
            atque animi similique velit rem repellendus! Numquam officia fuga quia consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor sit porro,
            fuga obcaecati perspiciatis placeat molestias, alias dolorum reprehenderit amet beatae
            nostrum in est! Eaque ipsa commodi saepe maxime sit iure rerum mollitia minima magnam
            nam numquam iusto atque veniam magni incidunt, est velit porro vero neque officia ex
            illum, ab vel qui. Officia repellat deleniti dicta provident illum neque omnis,
            cupiditate aliquid id reprehenderit amet nemo, beatae dolor incidunt aut quidem cumque
            tempora labore quisquam similique. Labore sint atque, veniam optio sunt neque aut
            nesciunt blanditiis totam. Rerum sed magni earum quaerat aliquam, quia aperiam obcaecati
            deserunt porro recusandae explicabo quidem beatae neque adipisci ipsa eveniet quis
            error, provident corporis numquam nesciunt nihil. Possimus necessitatibus laboriosam qui
            ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
