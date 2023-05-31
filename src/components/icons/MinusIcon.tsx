import { SvgIconType } from './svg.interface';

const Minus: SvgIconType = ({ width = 12, height = 12, className = '' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className={className}
		width={width}
		height={height}
	>
		<path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
	</svg>
);

export default Minus;
