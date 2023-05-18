import { links } from "../data/data.js";

const FooterSection = () => {
  return (
    <ul className="footer-links" id="footer-links">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={`#${link.link}`} className="footer-link">
              {link.link}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterSection;
