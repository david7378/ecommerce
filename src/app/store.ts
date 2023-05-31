import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '@/features/filter/filterSlice';
import cartSlice from '@/features/cart/cartSlice';
import productSlice from '@/features/product/productSlice';
import productsSlice from '@/features/products/productsSlice';

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productsSlice,
		product: productSlice,
		filter: filterSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
