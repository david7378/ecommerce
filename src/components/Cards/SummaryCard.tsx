import { SummaryCheckout } from '@/common/types/types';
import { Card } from '@/components/Cards/Card';

export const SummaryCheckoutCard = ({
	totalPrice,
	itemsQuantity,
	withButton,
	loading,
}: SummaryCheckout) => {
	return (
		<Card title='Summary'>
			<div className='flex flex-col gap-8 justify-center h-full'>
				<div className='flex flex-col gap-2 text-gray-600 '>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<h2 className='font-medium'>Subtotal</h2>
						</div>
						<div className=' text-gray-500 font-medium'>ARS ${totalPrice}</div>
					</div>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<h2 className='font-medium'>Shipping</h2>
						</div>
						<div className=' text-gray-500 font-medium'>$0.00</div>
					</div>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<h2 className='font-medium'>Tax</h2>
						</div>
						<div className=' text-gray-500 font-medium'>$0.00</div>
					</div>
				</div>
				<div className='flex items-center justify-between gap-4'>
					<div className='flex items-center gap-3'>
						<h2 className='text-sm tracking-normal font-medium text-gray-500'>{itemsQuantity}</h2>
					</div>
					<div className='flex items-center gap-4 border-t-[1px]'>
						<div className=' text-gray-700 uppercase font-medium'>Total:</div>
						<div className='font-semibold'>ARS ${totalPrice}</div>
					</div>
				</div>

				{withButton && (
					<button
						type='submit'
						form='checkoutForm'
						className='text-white bg-slate-500 uppercase hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{!loading ? 'Place Order' : 'Loading...'}
					</button>
				)}
			</div>
		</Card>
	);
};
