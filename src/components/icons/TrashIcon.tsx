import { SvgIconType } from './svg.interface';

const TrashIcon: SvgIconType = ({
	width = 12,
	height = 12,
	className = '',
	strokeWidth = 1.3333333,
}) => (
	<svg
		viewBox='0 0 14 14'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		height={height}
		width={width}
	>
		<path
			d='M5 1H9M1 3H13M11.6667 3L11.1991 10.0129C11.129 11.065 11.0939 11.5911 10.8667 11.99C10.6666 12.3412 10.3648 12.6235 10.0011 12.7998C9.58798 13 9.06073 13 8.00623 13H5.99377C4.93927 13 4.41202 13 3.99889 12.7998C3.63517 12.6235 3.33339 12.3412 3.13332 11.99C2.90607 11.5911 2.871 11.065 2.80086 10.0129L2.33333 3M5.66667 6V9.33333M8.33333 6V9.33333'
			stroke='#F70000'
			strokeWidth={strokeWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default TrashIcon;
