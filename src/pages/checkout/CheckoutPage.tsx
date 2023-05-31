import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSemiMidScreen } from '@/hooks/useSemiMidScreen';
import { useMobile } from '@/hooks/useMobile';
import { useAppSelector } from '@/app/reduxHooks';
import { selectTotal, selectItemsQuantity } from '@/features/cart/cartSlice';
import { CheckoutFormDesktop } from '@/components/CheckoutFormDesktop/index';
import { SummaryCheckoutCard } from '@/components/Cards/SummaryCard';
import { ShippingCard } from '@/components/Cards/ShippingCard';
import { PaymentCard } from '@/components/Cards/PaymentCard';
import { PlaceOrderCard } from '@/components/Cards/PlaceOrderCard';
import { useCheckoutState } from '@/context/checkoutContext';
import { PaymentFormInterface, ShippingFormInterface } from '@/common/types/types';

const CheckoutPage = () => {
	const isMobile = useMobile();
	const isSemiMidScreen = useSemiMidScreen();
	const totalPrice = useAppSelector(selectTotal);
	const items = useAppSelector(selectItemsQuantity);
	const itemsQuantity = `${items} Item${items > 1 ? 's' : ''}`;
	const { getShippingFormData, getPaymentFormData, loading, setLoading } =
		useCheckoutState();
	const shipping = getShippingFormData() as ShippingFormInterface;
	const payment = getPaymentFormData() as PaymentFormInterface;
	const isAbleToPlaceOrder = shipping !== undefined && payment !== undefined ? true : false;

	const handlePlaceOrder = () => {
		setLoading(true);
		setTimeout(() => {
			if (isAbleToPlaceOrder) {
				const mergedObject = Object.assign({}, shipping, payment);
				console.log('mergedObject', mergedObject);
				toast.success('The order was placed successfuly');
				setLoading(false);
			}
		}, 2500);
	};

	return (
		<>
			{isMobile || isSemiMidScreen ? (
				<section className='mt-20 h-[calc(100vh_-_158px)] mx-auto py-10 px-4 grid grid-cols-1  items-start w-full max-w-md justify-center'>
					<ShippingCard shipping={shipping} />
					<PaymentCard payment={payment} />
					<SummaryCheckoutCard
						totalPrice={totalPrice}
						itemsQuantity={itemsQuantity}
						withButton={false}
					/>
					<PlaceOrderCard
						isAbleToPlaceOrder={isAbleToPlaceOrder}
						loading={loading}
						handlePlaceOrder={handlePlaceOrder}
					/>
				</section>
			) : (
				<div className='grid grid-cols-3 mt-20 lg:mt-0 gap-8 md:p-4 lg:p-8 md:gap-4 lg:gap-10 lg:max-w-7xl lg:mx-auto'>
					<div className='col-span-2'>
						<CheckoutFormDesktop />
					</div>
					<SummaryCheckoutCard
						loading={loading}
						totalPrice={totalPrice}
						itemsQuantity={itemsQuantity}
						withButton={true}
					/>
				</div>
			)}

			<Outlet />
		</>
	);
};

export default CheckoutPage;
