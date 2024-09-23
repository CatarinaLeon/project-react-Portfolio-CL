import { ReactComponent as Fc } from '../images/SVG/icon-social-facebook.svg';
import { ReactComponent as In } from '../images/SVG/icon-social-instagram.svg';
import { ReactComponent as Git } from '../images/SVG/icon-social-github.svg';
import { ReactComponent as Lin } from '../images/SVG/icon-social-linkedin.svg';
import { ReactComponent as Tel } from '../images/SVG/icon-social-telegram.svg';

export const configSocialNetworks = [
  {
    url: 'https://github.com/CatarinaLeon',
    icon: <Git />,
    ariaLabel: 'link to github page',
  },
  {
    url: 'https://www.linkedin.com/in/vasylieva-kateryna/',
    icon: <Lin />,
    ariaLabel: 'link to linkedin page',
  },
  {
    url: 'https://t.me/Catarina_Leon',
    icon: <Tel />,
    ariaLabel: 'link to telegram page',
  },
  {
    url: 'https://www.facebook.com/V.CatarinaLeon/',
    icon: <Fc />,
    ariaLabel: 'link to facebook page',

  },
  {
    url: 'https://www.instagram.com/catarina_leon/',
    icon: <In />,
    ariaLabel: 'link to instagram page',
  },
];