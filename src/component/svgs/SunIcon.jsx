const SunIcon = (props) => (
    <svg
    width={83}
    height={81}
    viewBox="0 0 83 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_ddii_105_30)">
      <circle cx={39.0856} cy={37.0857} r={36.2347} fill="#FED62E" />
    </g>
    <defs>
      <filter
        id="filter0_ddii_105_30"
        x={0.435213}
        y={-1.5647}
        width={82.132}
        height={83.9437}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2.41565} dy={4.22738} />
        <feGaussianBlur stdDeviation={2.41565} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_105_30"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.41565} />
        <feGaussianBlur stdDeviation={1.20782} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_105_30"
          result="effect2_dropShadow_105_30"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_105_30"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1.81174} dy={2.41565} />
        <feGaussianBlur stdDeviation={1.20782} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.995677 0 0 0 0 1 0 0 0 0 0.930833 0 0 0 0.61 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect3_innerShadow_105_30"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-3.01956} />
        <feGaussianBlur stdDeviation={1.20782} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.704167 0 0 0 0 0.602266 0 0 0 0 0.174281 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect3_innerShadow_105_30"
          result="effect4_innerShadow_105_30"
        />
      </filter>
    </defs>
  </svg>
);
export default SunIcon;
