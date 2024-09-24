import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
// import Photo from "../../images/My_photo.jpg";
import Photo from "../../images/My_photo-2.jpg";
import BackgroundImageLaptop from "../../images/SVG/laptop.svg";
import s from "./Home.module.css";

export default function Home() {
  return (
    <Section>
      <Container className={s.containerWrapper}>
        <div className={s.containerHomePageInfo}>
          <img
            src={Photo}
            alt="Kateryna Vasylieva"
            className={s.homePagePhoto}
          />
          <h1 className={s.homePageMyName}>
            Kateryna <br />
            Vasylieva
          </h1>
          <h2 className={s.homePageProfession}>
            <span className={s.homePageProfessionPartLeft}>[Front-end]</span>
            <span className={s.homePageProfessionPartRight}>_DEVELOPER</span>
          </h2>
          <p className={s.homePageDescription}>
            / Using HTML, CSS, JavaScript, and React I help to build websites,
            small and medium web apps for business
          </p>
          <NavLink to="/projects" className={s.homePageBtn}>
            See my recent works —
          </NavLink>
          <img
            src={BackgroundImageLaptop}
            alt="Background Image-Laptop"
            className={s.homePageBackgroundImage}
          />
        </div>
        <div className={s.containerExperience}>
          <h3 className={s.experienceTitle}>My Coding Skills & Experience</h3>
          <ul className={s.experienceList}>
            <li className={s.containerExperience}>HTML5</li>
            <li>CSS3/SASS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>React-Native</li>
            <li>Vue.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={s.containerAboutMe}>
          <h3 className={s.aboutMeTitle}>
            About me <br />
            in 2 minutes
          </h3>
          <button type="button" className={s.aboutMeBtn}>
            Play
          </button>
        </div>
      </Container>
    </Section>
  );
}
