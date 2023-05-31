import { incrementProduct, decrementProduct } from '@/features/cart/cartSlice';
import { useAppDispatch } from '@/app/reduxHooks';
import { IncrementDecrementProps } from '@/common/types/types';

const IncrementDecrement = ({ item }: IncrementDecrementProps) => {
	const { cartQuantity } = item;
	const dispatch = useAppDispatch();
	return (
		<div className='h-7 w-16 bg-slate-100 font-light rounded-lg flex justify-evenly items-center'>
			<button
				onClick={() => dispatch(decrementProduct(item))}
				className='flex items-center text-xl w-[11px]'
			>
				-
			</button>
			<div className='text-lg font-semibold'>{cartQuantity}</div>
			<button
				onClick={() => dispatch(incrementProduct(item))}
				className='flex items-center text-xl'
			>
				+
			</button>
		</div>
	);
};

export default IncrementDecrement;
