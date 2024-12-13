import useTranslations from "../../../hooks/useTranslation";
import useLanguageStore from "../../../stores/languageStore";
import PageHeader from "../../general/PageHeader";

import SectionInfo from "../../general/SectionInfo";
import SectionParallaxImage from "../../general/SectionParallaxImage";

import "./Mercury.css";

const Mercury = () => {
  const language = useLanguageStore((state) => state.language);

  const { data } = useTranslations("mercury");

  const mercury = data;
  return (
    <section
      className="p-4 md:p-8 rtl:text-right"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <PageHeader
        title={mercury?.title}
        description={mercury?.description}
        parallaxClass={"parallax-mercury-1"}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-2"} />

      <SectionInfo
        title={mercury?.formationTitle}
        description={mercury?.formationDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-3"} />

      <SectionInfo
        title={mercury?.featuresTitle}
        description={mercury?.featuresDescription}
      />

      <SectionParallaxImage parallaxClass={"parallax-mercury-4"} />

      <SectionInfo
        title={mercury?.appearanceTitle}
        description={mercury?.appearanceDescription}
      />
    </section>
  );
};

export default Mercury;
