import { ProductByCard } from '@/common/types/types';
import Divider from '@/components/Separator/Divider';
import { ShoppingBagIcon } from '@/components/icons';

export const ProductBuyCardMobile = ({ price, handleOnClick }: ProductByCard) => {
	return (
		<footer className='sticky z-10 bottom-[0vh] bg-gray-50 w-full gap-1 justify-between p-4 border-t-2 grid grid-cols-1 shadow-[0_-4px_8px_rgba(0,0,0,.04)]'>
			<div className='flex justify-between'>
				<div className='text-transparent/70'>Sub-total</div>
				<div className='font-medium text-lg'>ARS ${price}</div>
			</div>
			<Divider className='opacity-50' />
			<div className='flex justify-between py-2'>
				<div className='font-medium uppercase'>Total</div>
				<div className='font-bold text-lg'>ARS ${price}</div>
			</div>
			<button
				className='btn btn-primary flex items-center gap-3 w-full justify-center shadow-lg'
				onClick={() => handleOnClick()}
			>
				<ShoppingBagIcon height={18} width={18} strokeWidth={2.2} />
				<span>Comprar</span>
			</button>
		</footer>
	);
};
