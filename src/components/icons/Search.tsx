import { SvgIconType } from './svg.interface';

const SearchIcon: SvgIconType = ({
	width = 6,
	height = 6,
	className = '',
	strokeWidth = 1.5,
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={strokeWidth}
		stroke='currentColor'
		width={width}
		height={height}
		className={className}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
		/>
	</svg>
);

export default SearchIcon;
