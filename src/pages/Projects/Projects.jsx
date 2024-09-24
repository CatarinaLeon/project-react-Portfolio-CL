import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import ItemsList from "../../common/ItemsList/ItemsList";

import { configPersonalProjects } from "../../data/configPersonalProjects";
import { configTeamProjects } from "../../data/configTeamProjects";

import s from "./Projects.module.css";

export default function Projects() {
  return (
    <Section>
      <Container>
        <div className={s.projectPersonalCont}>
          <h3 className={s.projectTitle}>My personal _projects</h3>
          <ItemsList items={configPersonalProjects} />
        </div>
        <div className={s.projectTeamCont}>
          <h3 className={s.projectTitle}>Teamwork _projects</h3>
          <ItemsList items={configTeamProjects} />
        </div>
      </Container>
    </Section>
  );
}
