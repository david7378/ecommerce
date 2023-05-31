import { CreditCardIcon, TruckIcon } from '../icons';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useCheckoutState } from '@/context/checkoutContext';
import { PaymentFormInterface, ShippingFormInterface } from '@/common/types/types';
type CompleteForm = ShippingFormInterface & PaymentFormInterface;

export function CheckoutFormDesktop() {
	const { setLoading } = useCheckoutState();
	const { register, handleSubmit } = useForm<CompleteForm>();

	const onSubmit = (data: any) => {
		setLoading(true);
		setTimeout(() => {
			console.log('The order was placed successfuly', data);
			toast.success('The order was placed successfuly');
			setLoading(false);
		}, 1700);
	};

	return (
		<div className='bg-white p-4 rounded-md shadow-sm'>
			<form onSubmit={handleSubmit(onSubmit)} id='checkoutForm'>
				<div className='flex gap-1 w-40 place-items-center mb-1'>
					<TruckIcon width={20} height={20} className='text-slate-600' strokeWidth={1.2} />
					<h2 className='text-xl font-semibold uppercase text-slate-700'>Shipping</h2>
				</div>

				<div className='grid md:grid-cols-2 md:gap-x-16'>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='complete_name'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('complete_name')}
						/>
						<label
							htmlFor='complete_name'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Complete Name
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='tel'
							pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
							id='phone'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=''
							required
							{...register('phone')}
						/>
						<label
							htmlFor='phone'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Phone
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='state'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('state')}
						/>
						<label
							htmlFor='state'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							State
						</label>
					</div>

					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='city'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('city')}
						/>
						<label
							htmlFor='city'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							City
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='zip_code'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('zip_code')}
						/>
						<label
							htmlFor='zip_code'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Code Zip
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='street_address'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('street_address')}
						/>
						<label
							htmlFor='street_address'
							className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Address
						</label>
					</div>
				</div>
				<div className='flex gap-1 w-40 place-items-center  mb-1'>
					<CreditCardIcon width={20} height={20} className='text-slate-600' strokeWidth={1.2} />
					<h2 className='text-xl font-semibold uppercase text-slate-700'>Payment</h2>
				</div>

				<div className='grid md:grid-cols-2 md:gap-x-16'>
					<div className='relative z-0 w-full mb-6 group col-span-2'>
						<input
							type='text'
							id='card_holder'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('card_holder')}
						/>
						<label
							htmlFor='card_holder'
							className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Card Holder Name
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='text'
							id='card_number'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
							{...register('card_number')}
						/>
						<label
							htmlFor='card_number'
							className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Card Number
						</label>
					</div>
					<div className='flex gap-16'>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='text'
								id='expiration'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
								{...register('expiration')}
							/>
							<label
								htmlFor='expiration'
								className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								Expiration
							</label>
						</div>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='password'
								id='cvc'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
								{...register('cvc')}
							/>
							<label
								htmlFor='cvc'
								className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								CVC
							</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
