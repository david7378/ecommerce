import { addItemToCart } from '@/features/cart/cartSlice';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/reduxHooks';
import { selectProduct } from '@/features/product/productSlice';
import { getProduct } from '@/features/product/product-thunks';

export const useProductDetail = (productId: number) => {
	const dispatch = useAppDispatch();
	const product = useAppSelector(selectProduct);

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const addItem = () => {
		dispatch(addItemToCart(product));
	};

	return useMemo(() => {
		return { product, addItem };
	}, [product]);
};
