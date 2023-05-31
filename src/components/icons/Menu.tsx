import { SvgIconType } from './svg.interface';

const MenuIcon: SvgIconType = ({
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
		className={className}
		width={width}
		height={height}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
		/>
	</svg>
);

export default MenuIcon;
