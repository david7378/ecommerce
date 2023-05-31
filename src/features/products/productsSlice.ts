import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, ProductslState } from '@/common/types/types';
import { getProductsList } from './products-thunks';

const initialState: ProductslState = {
	products: [],
	totalElements: 0,
	loadingState: LoadingStatus.LOADING,
	error: '',
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getProductsList.pending, (state) => {
				state.loadingState = LoadingStatus.LOADING;
			})
			.addCase(getProductsList.fulfilled, (state, action) => {
				state.products = action.payload;
				state.loadingState = LoadingStatus.LOADED;
			})
			.addCase(getProductsList.rejected, (state, action) => {
				state.loadingState = LoadingStatus.ERROR;
				state.error = action.error.message || ' Error';
			});
	},
});
export default productsSlice.reducer;
export const selectProductsState = (state: RootState) => state.products;
export const selectProducts = (state: RootState) => selectProductsState(state).products;
