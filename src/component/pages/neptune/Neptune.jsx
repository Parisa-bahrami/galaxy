import { neptune } from "../../../consts/neptuneInfo";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Neptune.css";

const Neptune = () => {
  return (
    <section className="p-4 md:p-8 rtl:text-right" dir="rtl">
      <PageHeader
        title={neptune.title}
        description={neptune.description}
        parallaxClass={"parallax-neptune-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-neptune-2"} />

      <SectionInfo
        title={neptune.formationTitle}
        description={neptune.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-neptune-3"} />

      <SectionInfo
        title={neptune.featuresTitle}
        description={neptune.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-neptune-4"} />

      <SectionInfo
        title={neptune.appearanceTitle}
        description={neptune.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-neptune-5"} />

      <SectionInfo
        title={neptune.atmosphereTitle}
        description={neptune.atmosphereDescription}
      />
    </section>
  );
};

export default Neptune;
