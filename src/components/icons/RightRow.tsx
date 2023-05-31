import { SvgIconType } from './svg.interface';

const RightRowIcon: SvgIconType = ({
	width = 12,
	height = 12,
	className = '',
	strokeWidth = 2,
}) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
	>
		<path
			d='M1 8H15M15 8L8 1M15 8L8 15'
			stroke='white'
			strokeWidth={strokeWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default RightRowIcon;
