import { mars } from "../../../consts/marsInfo";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Mars.css";

const Mars = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={mars.title}
        description={mars.description}
        parallaxClass={"parallax-mars-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-mars-2"} />

      <SectionInfo
        title={mars.formationTitle}
        description={mars.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mars-3"} />

      <SectionInfo
        title={mars.featuresTitle}
        description={mars.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mars-4"} />

      <SectionInfo
        title={mars.appearanceTitle}
        description={mars.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mars-5"} />

      <SectionInfo
        title={mars.atmosphereTitle}
        description={mars.atmosphereDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mars-6"} />

      <SectionInfo
        title={mars.conclusionTitle}
        description={mars.conclusionDescription}
      />
    </section>
  );
};

export default Mars;
