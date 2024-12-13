import { venus } from "../../../consts/venusInfo";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Venus.css";

const Venus = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={venus.title}
        description={venus.description}
        parallaxClass={"parallax-venus-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-venus-2"} />

      <SectionInfo
        title={venus.formationTitle}
        description={venus.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-venus-3"} />

      <SectionInfo
        title={venus.featuresTitle}
        description={venus.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-venus-4"} />

      <SectionInfo
        title={venus.appearanceTitle}
        description={venus.appearanceDescription}
      />
    </section>
  );
};

export default Venus;