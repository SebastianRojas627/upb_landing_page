import about from "../images/about.jpeg";
import dti4 from "../images/dti4.jpeg";
import { Title } from "./Title";

const About = () => {
  return (
    <>
      <section className="section" id="historia">
        <Title title={"historia de "} subtititle={"la carrera"}></Title>

        <div className="section-center about-center">
          <div className="about-img">
            <img src={dti4} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>Nuestra manera de destacar</h3>
            <p>
              La carrera de Ingeniería de Sistemas Computacionales fue la
              primera carrera aprobada por el Ministerio de Educación en la
              naciente Facultad de Ingenierías y Arquitectura del campus La Paz
              de la Universidad Privada Boliviana. El primer graduado de la
              carrera, Álvaro Bilbao la Vieja, se graduó por excelencia en
              agosto del 2015. En 2018 comenzamos a trabajar con una nueva malla
              moderna y adecuada para las necesidades del mercado laboral del
              desarrollo de software, con materias específicas a esta área que
              no existen en otras universidades del medio, como Patrones de
              Diseño y Gestión de proyectos informáticos.
            </p>
            <a href="#" className="btn">
              leer mas
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
