import { Title } from "./Title";
import { services } from "../data/data";
import { Service } from "./Service";

const OurServices = () => {
  return (
    <>
      <section className="section services" id="perfil">
        <Title title={"perfil de  "} subtititle={"estudiante"}></Title>

        <div className="section-center services-center">
          {services.map((service) => {
            return <Service {...service} key={service.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default OurServices;
