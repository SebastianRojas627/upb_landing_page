import { links } from "../data/data.js";

const SectionLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={`#${link.link}`} className={itemClass}>
              {link.link}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SectionLinks;
