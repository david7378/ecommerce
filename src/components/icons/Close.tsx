import { SvgIconType } from './svg.interface';

const CloseIcon: SvgIconType = ({
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
		<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
	</svg>
);

export default CloseIcon;
