import { PlaceOrder } from '@/common/types/types';

export const PlaceOrderCard = ({
	isAbleToPlaceOrder,
	handlePlaceOrder,
	loading,
}: PlaceOrder) => {
	return (
		<div className='bg-white z-10 w-full fixed bottom-0 left-0 rounded-t-3xl shadow-[0_1px_5px_-1px_rgba(0,0,0,0.35)]'>
			<div className='flex justify-end px-8 py-4'>
				<button
					disabled={!isAbleToPlaceOrder}
					onClick={() => handlePlaceOrder()}
					className='text-white btn-primary w-full  uppercase hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center'
				>
					{!loading ? 'Place Order' : 'Loading...'}
				</button>
			</div>
		</div>
	);
};
