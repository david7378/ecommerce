import { useParams, useNavigate } from 'react-router-dom';
import { useMobile } from '@/hooks/useMobile';
import { useProductDetail } from '@/hooks/useProductDetail';
import { CART } from '@/common/constants/routeConstants';
import { ProductBuyCardMobile } from '@/components/Cards/ProductBuyCardMobile';
import ProductBuyCardDestktop from '@/components/Cards/ProductBuyCardDestktop';

const ProductDetails = () => {
	const { id } = useParams();
	const parsedId = parseInt(id as string);
	const history = useNavigate();
	const isMobile = useMobile();
	const { product, addItem } = useProductDetail(parsedId);
	const { description, image, price, title } = product;

	const handleOnClick = () => {
		addItem();
		history(CART);
	};

	return (
		<>
			<section className='grid grid-cols-1 sm:grid-cols-2 bg-gray-100 mt-20 lg:mt-0 p-4 sm:p-6 sm:items-start sm:max-w-6xl sm:mx-auto gap-4 sm:gap-4 sm:h-full'>
				<div className='sm:col-span-2 grid grid-cols-1 content-start bg-transparent md:bg-white md:shadow-sm md:p-8'>
					<div className='border border-gray-500/10 p-2 rounded-lg flex place-content-center sm:col-span-2 sm:rounded-lg sm:shadow-sm h-full'>
						<img className='object-contain h-96 sm:h-[420px] w-full' src={image} alt='image' />
					</div>
					<div className='sm:col-span-2 h-full mt-4 lg:mt-7'>
						<h2 className='text-2xl font-semibold lg:font-bold text-gray-700 leading-9 '>
							{title?.slice(0, 25)}
						</h2>
						<div className='font-Merriweather break-words font-normal text-base leading-6 text-gray-500 py-4'>
							{description}
						</div>
					</div>
				</div>
				{!isMobile && <ProductBuyCardDestktop handleOnClick={handleOnClick} price={price} />}
			</section>
			{isMobile && <ProductBuyCardMobile handleOnClick={handleOnClick} price={price} />}
		</>
	);
};

export default ProductDetails;
