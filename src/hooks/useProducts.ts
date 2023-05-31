import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/reduxHooks';
import { selectProducts } from '@/features/products/productsSlice';
import { getProductsList } from '@/features/products/products-thunks';

export const useProducts = () => {
	const products = useAppSelector(selectProducts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProductsList());
	}, [dispatch]);

	return useMemo(() => {
		return { products };
	}, [products]);
};
