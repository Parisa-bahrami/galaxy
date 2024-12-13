// import mercury1 from "../../image/mercury/mercury1.jpg";
// import mercury2 from "../../image/mercury/mercury2.jpg";
// import mercury3 from "../../image/mercury/mercury3.jpg";

import "./Mercury.css";

import { mercury } from "../../consts/mercuryInfo";

const Mercury = () => {
  return (
    <section className="p-4 md:p-8" dir="rtl">
      <section className="parallax-mercury-1">
        <div className="parallax-mercury-inner">
          <h1>{mercury.title}</h1>
        </div>
      </section>

      <h2>{mercury.title}</h2>

      <p>{mercury.description}</p>

      <section className="parallax-mercury-2">
        <div className="parallax-mercury-inner">
          <h1>scroll</h1>
        </div>
      </section>

      <h2>{mercury.formationTitle}</h2>

      <p>{mercury.formationDescription}</p>

      <section className="parallax-mercury-3">
        <div className="parallax-mercury-inner">
          <h1>scroll</h1>
        </div>
      </section>

      <h2>{mercury.featuresTitle}</h2>

      <p>{mercury.featuresDescription}</p>

      <section className="parallax-mercury-4">
        <div className="parallax-mercury-inner">
          <h1>scroll</h1>
        </div>
      </section>

      <h2>{mercury.appearanceTitle}</h2>

      <p>{mercury.appearanceDescription}</p>
    </section>
  );
};

export default Mercury;
