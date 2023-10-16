const CircleArrowLeft = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-left"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color ? color : "#2c3e50"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
    <path d="M8 12l4 4" />
    <path d="M8 12h8" />
    <path d="M12 8l-4 4" />
  </svg>
);

const CircleArrowRight = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-circle-arrow-right"
    width={size ? size : "24"}
    height={size ? size : "24"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color ? color : "#2c3e50"}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
    <path d="M16 12l-4 -4" />
    <path d="M16 12h-8" />
    <path d="M12 16l4 -4" />
  </svg>
);

export { CircleArrowLeft, CircleArrowRight };
