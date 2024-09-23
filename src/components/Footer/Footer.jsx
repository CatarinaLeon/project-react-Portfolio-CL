import Container from "../../common/Container/Container";
import ListNav from "../../common/ListNav/ListNav";
import { configSocialNetworks } from "../../data/configSocialNetworks";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container className={s.footerContainer}>
        <div className={s.footerMyInfo}>
          <h3 className={s.footerMyName}>Kateryna Vasylieva</h3>
          <p className={s.footerMyProfession}>Front-end Developer</p>
        </div>

        <div className={s.footerContacts}>
          <a href="tel:+380668767492" className={s.footerMyTell}>
            +38 (066) 8767492
          </a>
          <a
            href="mailto:kateryna.vasylieva.net@gmail.com"
            className={s.footerMyMail}
          >
            kateryna.vasylieva.net@gmail.com
          </a>
        </div>
        <ListNav items={configSocialNetworks} className={s.footerSocialList} />
      </Container>
    </footer>
  );
}
