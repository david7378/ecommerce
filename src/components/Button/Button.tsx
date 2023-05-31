import { ButtonInterface } from '@/common/types/types';

export const Button = ({ children, onClick }: ButtonInterface) => {
	return (
		<button
			onClick={onClick}
			type='submit'
			className='text-white bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
		>
			{children}
		</button>
	);
};
