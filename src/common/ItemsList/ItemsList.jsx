import uuid from "react-uuid";
import { ReactComponent as Dots } from "../../images/SVG/dots-horizontal.svg";
import s from "./ItemsList.module.css";

export default function ItemsList({ items, children, className }) {
  return (
    <ul className={`${s.list} ${className}`}>
      {items.map((item) => (
        <li className={s.listItem} key={uuid()}>
          <div className={s.listItemContainerImg}>
            <Dots className={s.listItemDots} />
            <img
              src={item.img_desktop_1x}
              alt={item.alt}
              className={s.listItemImg}
            />
          </div>
          <div className={s.listItemContainerTechno}>
            <p className={s.listItemTechnoText}>
              Technology:
              <span className={s.listItemTechno}>{item.text}</span>
            </p>
            <button type="button" className={s.listItemBtn}>
              More details —
            </button>
          </div>
          {children}
        </li>
      ))}
    </ul>
  );
}
