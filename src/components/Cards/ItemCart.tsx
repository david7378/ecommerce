import { Item, ItemCartProps } from '@/common/types/types';
import { useCart } from '@/hooks/useCart';
import { MinusIcon, PlusIcon, TrashIcon } from '@/components/icons';

const ItemCart = ({ item }: ItemCartProps) => {
	const { remove, decrement, increment } = useCart();
	const pricePerUnit = item?.price;
	const itemQuantity = item?.cartQuantity;
	const priceFixed = (pricePerUnit * itemQuantity).toFixed(2);

	const handleClick = (item: Item, action: (item: Item) => void) => {
		if (action === decrement && item.cartQuantity === 1) return;
		action(item);
	};

	return (
		<div className='grid grid-cols-4 shadow-sm bg-white rounded-lg md:rounded-none p-3 lg:p-6 gap-3 h-full min-h-[90px] md:h-full'>
			<div className='max-h-16 max-w-[64px] sm:max-h-16 sm:max-w-[80px] md:w-auto md:h-16 flex-shrink-0 overflow-hidden'>
				<img
					src={item?.image}
					className='object-contain object-center w-full h-full'
					alt='img'
				/>
			</div>

			<div className='col-start-2 col-span-2'>
				<div className='flex flex-col h-full justify-between'>
					<div className='text-sm font-medium -tracking-wider'>{item?.title?.slice(0, 19)}</div>
					<div className='font-medium text-xs w-fit text-gray-500'>${pricePerUnit}</div>
					<div className='font-semibold text-sm w-fit'>ARS ${priceFixed}</div>
				</div>
			</div>

			<div className='flex justify-end'>
				<div className='flex flex-col justify-between h-full'>
					<div className='flex justify-end'>
						<button
							className='flex justify-end cursor-pointer w-fit hover:bg-gray-200/90 hover:shadow-[0_8px_9px_-4px_#799bd133,0_4px_18px_0_#7596ca2b] active:bg-gray-50 active:shadow-[0_8px_9px_-4px_#aeb3b94b,0_4px_18px_0_#8899b433]'
							onClick={() => handleClick(item, remove)}
						>
							<TrashIcon width={14} height={14} />
						</button>
					</div>

					<div className='flex justify-between items-center gap-1  '>
						<button
							className='transition ease-in-out duration-150 focus:outline-none focus:ring-0 hover:bg-gray-100 hover:shadow-[0_2px_5px_-4px_#254e9033,0_4px_18px_0_#47546945] active:bg-gray-300 active:shadow-[0_8px_9px_-4px_#5180ca4c,0_4px_18px_0_#4570b633] shadow-[0_2px_5px_-2px_#686868] border border-gray-400/80 p-1 rounded-sm cursor-pointer'
							onClick={() => handleClick(item, decrement)}
						>
							<MinusIcon />
						</button>
						<div className='min-w-[22px] sm:min-w-[24px] md:min-w-[32px] flex justify-center'>
							{item.cartQuantity}
						</div>
						<button
							className='transition ease-in-out duration-150 focus:outline-none focus:ring-0 hover:bg-gray-100 hover:shadow-[0_2px_5px_-4px_#254e9033,0_4px_18px_0_#47546945] active:bg-gray-300 active:shadow-[0_8px_9px_-4px_#5180ca4c,0_4px_18px_0_#4570b633] shadow-[0_2px_5px_-2px_#686868] border border-gray-400/80 p-1 rounded-sm cursor-pointer'
							onClick={() => handleClick(item, increment)}
						>
							<PlusIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCart;
