import { PaymentFormInterface } from '@/common/types/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCheckoutState } from '@/context/checkoutContext';
import InputText from '@/components/Input/InputText';
import { Button } from '@/components/Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PaymentForm() {
	const navigate = useNavigate();
	const { setPaymentData, getPaymentFormData } = useCheckoutState();
	const payment = getPaymentFormData();

	const onSubmit: SubmitHandler<PaymentFormInterface> = async (data) => {
		setPaymentData(data);

		if (!payment) {
			toast.info('The payment data was saved...', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1560,
				closeOnClick: true,
				pauseOnHover: false,
			});
		} else {
			toast.info('The payment data was edited...', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1560,
				closeOnClick: true,
				pauseOnHover: false,
			});
		}
		navigate('/checkout');
	};
	const { register, handleSubmit } = useForm<PaymentFormInterface>({
		defaultValues: getPaymentFormData(),
	});

	return (
		<div className='fixed top-20 left-0 bg-gray-100 p-4 z-30 h-full w-full  '>
			<form onSubmit={handleSubmit(onSubmit)} id='checkoutFormMobile'>
				<div className='grid md:grid-cols-2 mb-4 md:gap-6 bg-white rounded-xl p-8 shadow-lg'>
					<InputText
						label='Card Holder Name'
						name='card_holder'
						htmlFor='card_holder'
						type='text'
						register={register}
					/>
					<InputText
						label='Card Number'
						name='card_number'
						htmlFor='card_number'
						type='text'
						register={register}
					/>

					<div className='flex gap-16'>
						<InputText
							label='Expiration'
							name='expiration'
							htmlFor='expiration'
							type='text'
							register={register}
						/>
						<InputText
							label='CVC'
							name='password'
							htmlFor='password'
							type='password'
							register={register}
						/>
					</div>
				</div>

				<Button>{!payment ? 'Save' : 'Edit'}</Button>
			</form>
		</div>
	);
}

export default PaymentForm;
