import { NavLink } from "react-router-dom";
import Container from "../../common/Container/Container";
import ListNav from "../../common/ListNav/ListNav";
import { configNavigation } from "../../data/configNavigation.js";
import { ReactComponent as Logo } from "../../images/SVG/Logo.svg";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <NavLink to="/" className={s.headerLogo}>
          <Logo />
        </NavLink>
        <ListNav items={configNavigation} className={s.headerList}></ListNav>
        <div className={s.headerPart}>
          <p>— HIRE ME</p>
        </div>
      </Container>
    </header>
  );
}
