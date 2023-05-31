import { ProductByCard } from '@/common/types/types';
import { ShoppingBagIcon } from '@/components/icons';
import Divider from '@/components/Separator/Divider';

const ProductBuyCardDestktop = ({ price, handleOnClick }: ProductByCard) => {
	return (
		<div className='col-start-3'>
			<div className='bg-white rounded-lg justify-between p-8 grid grid-cols-1 gap-3 min-w-[269px] md:min-w-[330px] shadow-[0_6px_22px_2px_rgba(0,0,0,.09)]'>
				<div className='font-medium text-lg'>Summary</div>
				<Divider className='opacity-50' />
				<div className='flex justify-between mt-4'>
					<div className='text-transparent/70'>Sub-total</div>
					<div className='font-medium text-lg sm:text-base'>ARS ${price}</div>
				</div>
				<div className='flex justify-between mt-4'>
					<div className='text-transparent/70'>Envio</div>
					<div className='font-medium text-lg sm:text-base'>ARS $0.00</div>
				</div>
				<Divider />
				<div className='flex justify-between py-3'>
					<div className='font-medium uppercase'>Total</div>
					<div className='font-bold text-lg sm:text-base'>ARS ${price}</div>
				</div>
				<button
					className='btn btn-primary flex items-center gap-3 w-full justify-center shadow-lg'
					onClick={() => handleOnClick()}
				>
					<ShoppingBagIcon height={18} width={18} strokeWidth={2.2} />
					<span>Comprar</span>
				</button>
			</div>
		</div>
	);
};

export default ProductBuyCardDestktop;
