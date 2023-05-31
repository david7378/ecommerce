import { Link } from 'react-router-dom';
import { PRODUCT_DETAILS } from '@/common/constants/routeConstants';
import { Product } from '@/common/types/types';
import { HearthButton } from '@/components/Button/HeathButton';

const ProductCard = ({ product }: { product: Product }) => {
	const linkTo = `${PRODUCT_DETAILS}/${product.id}`;
	return (
		<li className='bg-white font-montserrat font-light text-base h-full relative sm:none w-full lg:w-4/6'>
			<div className='py-3 flex flex-row border-b '>
				<div className='py-0 px-3 '>
					<Link to={linkTo}>
						<figure className='max-h-48 min-h-[144px] w-36 flex item'>
							<img
								className='h-auto my-0 mx-auto max-h-40 max-w-full w-auto object-contain'
								src={product.image}
							/>
						</figure>
					</Link>
				</div>
				<div className='absolute left-[106px] top-4 z-10'>
					<HearthButton />
				</div>
				<div className='md:w-[calc(100%_-_220px)] text-gray-950 w-full lg:ml-2 '>
					<Link to={linkTo}>
						<div className='md:text-xl text-sm mb-3 break-words cursor-pointer max-w-full min-w-0'>
							{product.title?.slice(0, 27)}
						</div>
						<div className='md:text-2xl text-xl cursor-pointer w-fit'>${product.price}</div>
					</Link>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
