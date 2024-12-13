/* eslint-disable react/prop-types */

const SectionInfo = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-4 py-10">
      <h2 className="text-4xl text-start text-gray-700 dark:text-gray-100 font-bold">
        {title}
      </h2>

      <p className="w-full text-base text-gray-600 dark:text-gray-50 text-justify leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionInfo;
