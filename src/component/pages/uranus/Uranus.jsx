import { uranus } from "../../../consts/uranusInfo";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Uranus.css";

const Uranus = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={uranus.title}
        description={uranus.description}
        parallaxClass={"parallax-uranus-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-2"} />

      <SectionInfo
        title={uranus.formationTitle}
        description={uranus.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-3"} />

      <SectionInfo
        title={uranus.featuresTitle}
        description={uranus.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-4"} />

      <SectionInfo
        title={uranus.appearanceTitle}
        description={uranus.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-5"} />

      <SectionInfo
        title={uranus.atmosphereTitle}
        description={uranus.atmosphereDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-6"} />

      <SectionInfo
        title={uranus.ringsTitle}
        description={uranus.ringsDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-uranus-7"} />

      <SectionInfo
        title={uranus.moonsTitle}
        description={uranus.moonsDescription}
      />
    </section>
  );
};

export default Uranus;