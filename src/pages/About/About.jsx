import Container from "../../common/Container/Container";
import Section from "../../common/Section/Section";
import BackgroundLaptop from "../../images/web-apps-laptop.png";
import s from "./About.module.css";

export default function About() {
  return (
    <Section>
      <Container className={s.aboutContainer}>
        <div className={s.aboutDescContainer}>
          <h3 className={s.aboutTitle}>I code things from scratch_</h3>
          <p className={s.aboutText}>
            <span>[and help to create great web apps]</span>
          </p>
          <p className={s.aboutText}>
            / I will help you to create a high-performance Landing Page,
            functional corporate website for your business, interactive web app
            for SaaS, startup, or other services.
          </p>
          <p className={s.aboutText}>
            / My specialization is front-end development — client side of the
            web. But I also have full-stack developer experience.
          </p>
        </div>
        <div className={s.aboutImgContainer}>
          <p className={s.aboutImgText}>WEB</p>
          <img
            src={BackgroundLaptop}
            alt="web apps laptop"
            className={s.aboutImg}
          />
        </div>
        <div className={s.aboutProjectsBar}>
          <p className={s.aboutProjectsCount}>10+</p>
          <p className={s.aboutProjectsText}>completed projects</p>
        </div>
      </Container>
    </Section>
  );
}
