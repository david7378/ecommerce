import ProductCard from '@/components/Cards/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { selectSearchTerm } from '@/features/filter/filterSlice';
import { useAppSelector } from '@/app/reduxHooks';

export const ProductList = () => {
	const { products } = useProducts();
	const searchTerm = useAppSelector(selectSearchTerm);

	return (
		<>
			{products?.length > 0 ? (
				<ul className='flex flex-col gap-0 md:gap-2 list-none mt-20 lg:mt-10 bg-white/5 backdrop-blur-lg w-full items-center'>
					{products
						.filter((item) => {
							if (searchTerm.trim() === '') return item;
							return item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
						})
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</ul>
			) : (
				<h2 className='mt-20 text-4xl p-4 text-slate-700 font-black'>Loading...</h2>
			)}
		</>
	);
};
