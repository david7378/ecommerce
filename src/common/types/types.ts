import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

// TYPE

export type InputProps = {
	label: string;
	id?: string;
	htmlFor: string;
	name: string;
	type: string;
	register: any;
};

export type DividerProps = {
	className?: string;
};

export type Product = {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: Partial<number>;
	cartQuantity: number;
};

export type CardProps = {
	title?: string;
	children?: ReactNode;
};

export type ButtonProps = {
	onClick?: () => void;
};

export type ProductByCard = {
	price?: number;
	handleOnClick: () => void;
};

export type IncrementDecrementProps = {
	item: Product;
};

// INTERFACE

export interface ProductState {
	product: Partial<Product>;
	loadingState: LoadingStatus;
	error: string;
}

export interface ProductslState {
	products: Array<Product>;
	totalElements: number;
	loadingState: LoadingStatus;
	error: string;
}

export interface ItemCart {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: Partial<number>;
	cartQuantity: number;
}

export interface PlaceOrder {
	isAbleToPlaceOrder: boolean;
	loading: boolean;
	handlePlaceOrder: () => void;
}

export interface UseOutsideClickProps {
	refs: RefObject<HTMLElement>[];
	initialState: boolean;
	onClickOutside: () => void;
}

export interface PaymentFormInterface {
	card_holder: string;
	card_number: string;
	expiration: string;
	cvc: string;
}

export interface ShippingFormInterface {
	complete_name: string;
	phone: string;
	state: string;
	city: string;
	zip_code: string;
	street_address: string;
}

export interface ICheckoutContext {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	getShippingFormData: () => {} | undefined | ShippingFormInterface;
	setShippingData: (formData: ShippingFormInterface) => void;
	getPaymentFormData: () => {} | undefined | PaymentFormInterface;
	setPaymentData: (formData: PaymentFormInterface) => void;
}

export interface ButtonInterface {
	children: ReactNode;
	onClick?: () => void;
}

export interface Item {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	cartQuantity: number;
	rating: Partial<number>;
}

export interface Item {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	cartQuantity: number;
	rating: Partial<number>;
}

export interface CartState {
	value: number;
	items: Item[];
	loading: boolean;
	totalPrice: number;
	cartItemsCount: number;
	errorMessage: string;
	cartTotalPrice: number;
	cartTotalQuantity: number;
}

export interface ItemCartProps {
	item: Item;
}

export interface SummaryCart {
	totalPrice: number;
}

export interface SummaryCheckout {
	totalPrice: number;
	itemsQuantity: string;
	withButton: boolean;
	handlePlaceOrderDesktop?: (data: any) => void;
	loading?: boolean;
}

export interface ShippingForm {
	complete_name: string;
	phone: string;
	state: string;
	city: string;
	zip_code: string;
	street_address: string;
}

export interface PaymentForm {
	card_holder: string;
	card_number: string;
	expiration: string;
	cvc: string;
}

// enum
export enum LoadingStatus {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
	SUCCESS = 'SUCCESS',
}
