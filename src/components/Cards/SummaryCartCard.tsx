import { Link } from 'react-router-dom';
import { CHECKOUT } from '@/common/constants/routeConstants';
import { SummaryCart } from '@/common/types/types';
import { useMobile } from '@/hooks/useMobile';
import { RightRowIcon } from '@/components/icons';
import Divider from '@/components/Separator/Divider';

const SummaryCartCard = ({ totalPrice }: SummaryCart) => {
	const fixedTotalPrice = totalPrice.toFixed(2);
	const isMobile = useMobile();
	return (
		<>
			{isMobile ? (
				<footer className='sticky z-10 bottom-[0vh] bg-gray-100 w-full justify-between px-8 py-4 gap-2 border-t-2 grid grid-cols-1 shadow-[0_-4px_8px_rgba(0,0,0,.07)]'>
					<div className='flex justify-between '>
						<div className='text-transparent/70'>Sub-total</div>
						<div className='font-normal text-lg'>ARS ${fixedTotalPrice}</div>
					</div>
					<Divider />
					<div className='flex justify-between py-2'>
						<div className='font-medium'>Total</div>
						<div className='font-medium text-lg'>ARS ${fixedTotalPrice}</div>
					</div>
					<Link to={CHECKOUT}>
						<button className='btn btn-primary flex items-center gap-3 w-full justify-center shadow-lg'>
							Checkout
							<RightRowIcon height={16} width={16} strokeWidth={2.4} />
						</button>
					</Link>
				</footer>
			) : (
				<div className='col-start-3 py-4 pr-4'>
					<div className='bg-white rounded-lg justify-between p-8 grid grid-cols-1 gap-2 min-w-[269px] md:min-w-[330px] shadow-lg'>
						<div className='font-medium text-lg'>Summary</div>
						<Divider className='opacity-50' />
						<div className='flex justify-between mt-4'>
							<div className='text-transparent/70'>Sub-total</div>
							<div className='font-medium text-lg sm:text-base'>ARS ${fixedTotalPrice}</div>
						</div>
						<div className='flex justify-between mt-4'>
							<div className='text-transparent/70'>Envio</div>
							<div className='font-medium text-lg sm:text-base'>ARS $0.01</div>
						</div>
						<Divider className='' />
						<div className='flex justify-between py-3'>
							<div className='font-medium uppercase'>Total</div>
							<div className='font-bold text-lg sm:text-base'>ARS ${fixedTotalPrice}</div>
						</div>
						<Link
							to={CHECKOUT}
							className='btn btn-primary flex items-center gap-3 w-full justify-center shadow-lg'
						>
							<span>Checkout</span>
							<RightRowIcon height={16} width={16} strokeWidth={2.4} />
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default SummaryCartCard;
