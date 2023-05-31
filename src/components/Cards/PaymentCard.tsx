import { Link } from 'react-router-dom';
import { PaymentFormInterface } from '@/common/types/types';
import { ChevronLeftIcon, CreditCardIcon } from '@/components/icons';

export const PaymentCard = ({ payment }: { payment: PaymentFormInterface }) => {
	const finalDigitsCard = 4;
	return (
		<section className='mb-4 bg-white flex flex-col gap-3 p-4 rounded-md shadow-sm'>
			<h2 className='font-medium text-lg uppercase'>Payment</h2>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-3'>
					<div>
						<CreditCardIcon width={22} height={24} strokeWidth={1.4} color='#b1b1b1' />
					</div>
					{!payment ? (
						<h2 className=' text-gray-400 text-sm tracking-normal font-medium'>
							Add payment info
						</h2>
					) : (
						<section className='text-sm text-slate-500 font-medium'>
							<div>
								<h2>
									<span>{payment?.card_holder}</span>
								</h2>
							</div>
							<div>
								<h2>
									VISA:{' '}
									<span>
										**** {payment?.card_number?.slice(payment?.card_number.length - finalDigitsCard)}
									</span>
								</h2>
							</div>
							<div>
								<h2>
									Exp: <span>{payment?.expiration}</span>
								</h2>
							</div>
						</section>
					)}
				</div>
				<div className='flex items-center gap-4'>
					<div>
						<Link to='/checkout/payment'>
							<button className='px-5 py-2 font-normal shadow-sm transition ease-in-out duration-300 rounded-md leading-snug whitespace-nowrap text-base text-white bg-slate-500 hover:bg-slate-600'>
								{payment ? 'Edit' : 'Add'}
							</button>
						</Link>
					</div>
					<ChevronLeftIcon color='#b1b1b1' width={20} height={20} />
				</div>
			</div>
		</section>
	);
};
