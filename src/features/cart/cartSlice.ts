import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { toast } from 'react-toastify';
import { CartState } from '@/common/types/types';

const initialState: CartState = {
	value: 0,
	items: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems') || '')
		: [],
	loading: false,
	totalPrice: 0,
	cartItemsCount: 0,
	cartTotalQuantity: 0,
	cartTotalPrice: 0,
	errorMessage: '',
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const existItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (existItemIndex >= 0) {
				state.items[existItemIndex] = {
					...state.items[existItemIndex],
					cartQuantity: state.items[existItemIndex].cartQuantity + 1,
				};
				toast.info(`increased ${state.items[existItemIndex].title} cart quantity`, {
					position: 'bottom-left',
				});
			} else {
				const tempItem = { ...action.payload, cartQuantity: 1 };
				state.items.push(tempItem);
				toast.success(`${action.payload.title} added to cart`, {
					position: 'bottom-left',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
		incrementProduct: (state, action) => {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (state.items[itemIndex].cartQuantity >= 1) {
				state.items[itemIndex].cartQuantity += 1;
			}
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
		decrementProduct: (state, action) => {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
			if (state.items[itemIndex].cartQuantity > 1) {
				state.items[itemIndex].cartQuantity -= 1;
				localStorage.setItem('cartItems', JSON.stringify(state.items));
			}
		},
		removeItem: (state, action) => {
			const nextCartItems = state.items.filter((item) => item.id !== action.payload.id);
			state.items = nextCartItems;
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
		clearCart: (state) => {
			state.items = [];
			localStorage.setItem('cartItems', JSON.stringify(state.items));
		},
		getTotals(state) {
			let { total, quantity } = state.items.reduce(
				(cartTotal, item) => {
					const { price, cartQuantity } = item;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;
					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			total = Number(total.toFixed(2));
			state.cartTotalQuantity = quantity;
			state.cartTotalPrice = total;
		},
	},
});
export default cartSlice.reducer;
export const {
	addItemToCart,
	decrementProduct,
	incrementProduct,
	removeItem,
	clearCart,
	getTotals,
} = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart;
export const selectItems = (state: RootState) => selectCartState(state).items;
export const selectTotal = (state: RootState) => selectCartState(state).cartTotalPrice;
export const selectItemsQuantity = (state: RootState) =>
	selectCartState(state).cartTotalQuantity;
