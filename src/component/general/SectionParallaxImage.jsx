/* eslint-disable react/prop-types */

const SectionParallaxImage = ({ parallaxClass }) => {
  return (
    <section className={` rounded-2xl ${parallaxClass}`}>
      <div className="parallax-inner h-48 md:h-72 lg:h-96"></div>
    </section>
  );
};

export default SectionParallaxImage;
