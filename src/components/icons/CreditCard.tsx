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
		stroke='currentColor'
		className={className}
		width={width}
		height={height}
		strokeWidth={strokeWidth}
	>
		<path
			color={color}
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
		/>
	</svg>
);

export default CloseIcon;
