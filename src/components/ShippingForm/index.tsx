import { ShippingFormInterface } from '@/common/types/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCheckoutState } from '@/context/checkoutContext';
import InputText from '@/components/Input/InputText';
import { Button } from '../Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ShippingForm = () => {
	const navigate = useNavigate();
	const { setShippingData, getShippingFormData } = useCheckoutState();
	const { register, handleSubmit } = useForm<ShippingFormInterface>({
		defaultValues: getShippingFormData(),
	});
	const shipping = getShippingFormData();

	const onSubmit: SubmitHandler<ShippingFormInterface> = (data) => {
		setShippingData(data);

		if (!shipping) {
			toast.info('The shipping data was saved...', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1560,
				closeOnClick: true,
				pauseOnHover: false,
			});
		} else {
			toast.info('The shipping data was edited...', {
				position: toast.POSITION.BOTTOM_CENTER,
				autoClose: 1560,
				closeOnClick: true,
				pauseOnHover: false,
			});
		}
		navigate('/checkout');
	};

	return (
		<div className='fixed top-20 left-0 bg-gray-100 p-4 z-30 h-full w-full'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid md:grid-cols-2 md:gap-x-16 bg-white p-8 rounded-xl shadow-lg'
			>
				<InputText
					label='Comlete Name'
					name='complete_name'
					htmlFor='complete_name'
					type='text'
					register={register}
				/>
				<InputText label='Phone' name='phone' htmlFor='phone' type='text' register={register} />
				<InputText label='State' name='state' htmlFor='state' type='text' register={register} />
				<InputText label='City' name='city' htmlFor='city' type='text' register={register} />
				<InputText
					label='Zip Code'
					name='zip_code'
					htmlFor='zip_code'
					type='text'
					register={register}
				/>
				<InputText
					label='Address'
					name='street_address'
					htmlFor='street_address'
					type='text'
					register={register}
				/>
				<Button>{!shipping ? 'Save' : 'Edit'}</Button>
			</form>
		</div>
	);
};

export default ShippingForm;
