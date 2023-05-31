import { HeartIcon } from '@/components/icons';
import { ButtonProps } from '@/common/types/types';

export const HearthButton = ({ onClick }: ButtonProps) => {
	return (
		<button
			className='p-[6px] rounded-full bg-gray-100 drop-shadow-sm hover:bg-white'
			onClick={onClick}
		>
			<HeartIcon width={18} height={18} strokeWidth={1.4} />
		</button>
	);
};
