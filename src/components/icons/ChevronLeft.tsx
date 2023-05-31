import { SvgIconType } from './svg.interface';

const CloseIcon: SvgIconType = ({
	width = 6,
	height = 6,
	className = '',
	strokeWidth = 1.5,
	color,
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
			color={color}
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M8.25 4.5l7.5 7.5-7.5 7.5'
		/>
	</svg>
);

export default CloseIcon;
