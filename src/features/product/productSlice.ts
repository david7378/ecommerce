import { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, ProductState } from '../../common/types/types';
import { getProduct } from './product-thunks';

const initialState: ProductState = {
	product: {},
	loadingState: LoadingStatus.LOADING,
	error: '',
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getProduct.pending, (state) => {
				state.loadingState = LoadingStatus.LOADING;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.product = action.payload;
				state.loadingState = LoadingStatus.LOADED;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.loadingState = LoadingStatus.ERROR;
				state.error = action.error.message || ' Error';
			});
	},
});

export default productSlice.reducer;
export const selectProductState = (state: RootState) => state.product;
export const selectProduct = (state: RootState) => state.product.product;
