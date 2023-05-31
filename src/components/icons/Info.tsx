import { SvgIconType } from './svg.interface';

const Info: SvgIconType = ({ width = 12, height = 12, className = '' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 6C6.75 5.58579 6.41421 5.25 6 5.25H4.125C3.71079 5.25 3.375 5.58579 3.375 6C3.375 6.41421 3.71079 6.75 4.125 6.75H5.25V9.75C5.25 10.1642 5.58579 10.5 6 10.5C6.41421 10.5 6.75 10.1642 6.75 9.75V6ZM3 0H9C10.6569 0 12 1.34315 12 3V9C12 10.6569 10.6569 12 9 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0ZM6 4.125C6.62132 4.125 7.125 3.62132 7.125 3C7.125 2.37868 6.62132 1.875 6 1.875C5.37868 1.875 4.875 2.37868 4.875 3C4.875 3.62132 5.37868 4.125 6 4.125Z"
      fill="#3AA5DC"
    />
  </svg>
);

export default Info;
