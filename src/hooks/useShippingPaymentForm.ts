import { PaymentFormInterface, ShippingFormInterface } from '@/common/types/types';
import { useState } from 'react';

export const useShippingPaymentForm = () => {
	const [shippingFormData, setShippingFormData] = useState<Partial<ShippingFormInterface>>();
	const [paymentFormData, setPaymentFormData] = useState<Partial<PaymentFormInterface>>();

	const getShippingFormData = () => {
		return shippingFormData ? shippingFormData : undefined;
	};

	const setShippingData = (shipData: ShippingFormInterface) => {
		setShippingFormData(shipData);
	};

	const getPaymentFormData = () => {
		return paymentFormData;
	};

	const setPaymentData = (paymentData: PaymentFormInterface) => {
		setPaymentFormData(paymentData);
	};

	return { getShippingFormData, setShippingData, getPaymentFormData, setPaymentData };
};
