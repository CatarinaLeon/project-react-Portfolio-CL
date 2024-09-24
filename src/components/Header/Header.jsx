import { NavLink, Link } from "react-router-dom";
import Container from "../../common/Container/Container";
import ListNav from "../../common/ListNav/ListNav";

import { configNavigation } from "../../data/configNavigation.js";

import { ReactComponent as Logo } from "../../images/SVG/Logo.svg";
import MyPDF from "../../images/res-Vasylieva.pdf";

import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <NavLink to="/" className={s.headerLogo}>
          <Logo />
          Portfolio
        </NavLink>
        <ListNav items={configNavigation} className={s.headerList} />
        <div className={s.headerPart}>
          <Link
            to={MyPDF}
            target="_blank"
            download="resume-Vasylieva"
            className={s.headerPartFile}
          >
            — HIRE ME
          </Link>
        </div>
      </Container>
    </header>
  );
}
