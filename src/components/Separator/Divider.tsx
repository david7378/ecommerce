import { DividerProps } from '@/common/types/types';

const Divider = ({ className }: DividerProps) => {
	return (
		<div className={className}>
			<div className='h-[1px] bg-gray-300 w-full flex justify-center mx-auto'></div>
		</div>
	);
};

export default Divider;
