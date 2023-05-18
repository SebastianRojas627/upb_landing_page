import SectionLinks from "./SectionLinks";
import { SocialLinks } from "./SocialLinks";
import { socialLinks } from "../data/data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <div className="footer-icons">
          <SectionLinks parentClass="footer-links" itemClass="footer-link" />
        </div>

        <ul className="footer-icons">
          {socialLinks.map((link) => {
            console.log(link);
            return (
              <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>

        <p className="copyright">
          copyright &copy; Universidad Privada Boliviana
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
