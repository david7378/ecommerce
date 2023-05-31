import { ShippingFormInterface } from '@/common/types/types';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, TruckIcon } from '@/components/icons';

export function ShippingCard({ shipping }: { shipping: ShippingFormInterface }) {
	return (
		<section className='mb-4 bg-white flex flex-col gap-3 justify-evently p-4 rounded-md shadow-sm'>
			<h2 className='font-medium text-lg uppercase'>Shipping</h2>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-3'>
					<div>
						<TruckIcon width={22} height={24} strokeWidth={1.4} color='#b1b1b1' />
					</div>

					{!shipping ? (
						<h2 className=' text-gray-400 text-sm tracking-normal font-medium'>
							Add shipping address
						</h2>
					) : (
						<section className='text-sm text-slate-500 font-medium'>
							<h2>
								State: <span>{shipping?.state}</span>
							</h2>
							<h2>
								City: <span>{shipping?.city}</span>
							</h2>
							<h2>
								Avn: <span>{shipping?.street_address}</span>
							</h2>
						</section>
					)}
				</div>
				<div className='flex items-center gap-4'>
					<div>
						<Link to='/checkout/shipping'>
							<button className='px-5 py-2 font-normal shadow-sm transition ease-in-out duration-300 rounded-md leading-snug whitespace-nowrap text-base text-white bg-slate-500 hover:bg-slate-600'>
								{shipping ? 'Edit' : 'Add'}
							</button>
						</Link>
					</div>
					<ChevronLeftIcon color='#b1b1b1' width={20} height={20} />
				</div>
			</div>
		</section>
	);
}
