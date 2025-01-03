import useTranslations from "../../../hooks/useTranslation";
import useLanguageStore from "../../../stores/languageStore";
import PageHeader from "../../general/PageHeader";
import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Earth.css";

const Earth = () => {
  const language = useLanguageStore((state) => state.language);

  const { data } = useTranslations("earth");

  const earth = data;

  return (
    <section
      className="p-4 md:p-8 rtl:text-right"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <PageHeader
        title={earth?.title}
        description={earth?.description}
        parallaxClass={"parallax-earth-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-earth-2"} />

      <SectionInfo
        title={earth?.formationTitle}
        description={earth?.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-earth-3"} />

      <SectionInfo
        title={earth?.featuresTitle}
        description={earth?.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-earth-4"} />

      <SectionInfo
        title={earth?.appearanceTitle}
        description={earth?.appearanceDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-earth-5"} />

      <SectionInfo
        title={earth?.atmosphereTitle}
        description={earth?.atmosphereDescription}
      />

    <SectionParallaxImage parallaxClass={"parallax-earth-7"} />

<SectionInfo
  title={earth?.moonsTitle}
  description={earth?.moonsDescription}
/>
      <SectionParallaxImage parallaxClass={"parallax-earth-6"} />

      <SectionInfo
        title={earth?.conclusionTitle}
        description={earth?.conclusionDescription}
      />
    </section>
  );
};

export default Earth;
