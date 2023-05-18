import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";
import { Title } from "./Title";
import { tours } from "../data/data";
import { Tour } from "./Tour";

const Tours = () => {
  return (
    <>
      <section className="section" id="eventos">
        <Title title={"eventos "} subtititle={"estudiantiles"}></Title>

        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
