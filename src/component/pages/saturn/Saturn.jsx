import { saturn } from "../../../consts/saturnInfo";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Saturn.css";

const Saturn = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={saturn.title}
        description={saturn.description}
        parallaxClass={"parallax-saturn-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-2"} />

      <SectionInfo
        title={saturn.formationTitle}
        description={saturn.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-3"} />

      <SectionInfo
        title={saturn.featuresTitle}
        description={saturn.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-4"} />

      <SectionInfo
        title={saturn.appearanceTitle}
        description={saturn.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-5"} />

      <SectionInfo
        title={saturn.ringsTitle}
        description={saturn.ringsDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-6"} />

      <SectionInfo
        title={saturn.moonsTitle}
        description={saturn.moonsDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-saturn-7"} />

      <SectionInfo
        title={saturn.conclusionTitle}
        description={saturn.conclusionDescription}
      />
    </section>
  );
};

export default Saturn;