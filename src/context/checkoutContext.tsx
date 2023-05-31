import { createContext, ReactNode, useState, useContext } from 'react';
import { ICheckoutContext } from '@/common/types/types';
import { useShippingPaymentForm } from '@/hooks/useShippingPaymentForm';

const CheckoutContext = createContext({} as ICheckoutContext);

function CheckoutProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const { getPaymentFormData, getShippingFormData, setPaymentData, setShippingData } =
		useShippingPaymentForm();

	return (
		<CheckoutContext.Provider
			value={{
				getShippingFormData,
				setShippingData,
				getPaymentFormData,
				setPaymentData,
				loading,
				setLoading,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
}

// custom hook
const useCheckoutState = () => {
	const context = useContext(CheckoutContext);
	if (!context) {
		throw new Error('useCheckoutState must be used within a CheckoutContext');
	}
	return context;
};

export { CheckoutProvider, useCheckoutState };
