/* eslint-disable react/prop-types */

const PageHeader = ({ title, description, parallaxClass }) => {
  return (
    <div className="w-full">
      <section
        className={`parallax-mercury-1 h-[calc(100dvh-40px)] flex items-center justify-center rounded-3xl ${parallaxClass}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white text-opacity-90 tracking-tight">
          {title}
        </h1>
      </section>

      <p className="w-full text-base text-gray-600 text-justify leading-relaxed py-20">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
