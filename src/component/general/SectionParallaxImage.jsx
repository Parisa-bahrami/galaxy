/* eslint-disable react/prop-types */

const SectionParallaxImage = ({ parallaxClass }) => {
  return (
    <section className={` rounded-2xl ${parallaxClass}`}>
      <div className="parallax-inner">
        <h1 className="text-8xl text-center text-white text-opacity-40">
          scroll
        </h1>
      </div>
    </section>
  );
};

export default SectionParallaxImage;
