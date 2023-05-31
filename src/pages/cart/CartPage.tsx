import { useCart } from '@/hooks/useCart';
import ItemCart from '@/components/Cards/ItemCart';
import SummaryCartCard from '@/components/Cards/SummaryCartCard';

function CartPage() {
	const { totalPrice, items } = useCart();
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-8 md:max-w-6xl md:mx-auto mt-20 lg:mt-0'>
			<ul className='grid grid-cols-1 sm:col-span-2 gap-3 md:gap-3 p-3 lg:p-4 content-start min-h-[calc(100vh_-_257px)] sm:min-h-full bg-inherit'>
				{items.length > 0 &&
					items.map((item) => {
						return (
							<li key={item?.id}>
								<ItemCart item={item} />
							</li>
						);
					})}
			</ul>
			<SummaryCartCard totalPrice={totalPrice} />
		</div>
	);
}

export default CartPage;
