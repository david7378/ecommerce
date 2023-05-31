import { CardProps } from '@/common/types/types';

export const Card = ({ title, children }: CardProps) => {
	return (
		<section className=' bg-white flex flex-col gap-3 p-8 rounded-md shadow-sm'>
			<h2 className='font-medium text-lg py-2 border-b-[1px]'>{title}</h2>
			{children}
		</section>
	);
};
