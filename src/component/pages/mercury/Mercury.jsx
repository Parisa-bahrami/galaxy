import { mercury } from "../../../consts/mercuryInfo";
import PageHeader from "../../general/PageHeader";

import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Mercury.css";

const Mercury = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={mercury.title}
        description={mercury.description}
        parallaxClass={"parallax-mercury-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-2"} />

      <SectionInfo
        title={mercury.formationTitle}
        description={mercury.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-3"} />

      <SectionInfo
        title={mercury.featuresTitle}
        description={mercury.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-4"} />

      <SectionInfo
        title={mercury.appearanceTitle}
        description={mercury.appearanceDescription}
      />
    </section>
  );
};

export default Mercury;
