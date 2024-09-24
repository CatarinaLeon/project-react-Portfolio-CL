import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import s from "./Contacts.module.css";
// import ListNav from "../../common/ListNav/ListNav";
// import { configSocialNetworks } from "../../data/configSocialNetworks";

export default function Contacts() {
  return (
    <Section>
      <Container className={s.contactsContainer}>
        <h3>Odesa, Ukraine</h3>
        {/* <ListNav
          items={configSocialNetworks}
          className={s.contactsListSocial}
        ></ListNav>
        <div></div> */}
      </Container>
    </Section>
  );
}
