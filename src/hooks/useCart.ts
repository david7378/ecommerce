import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/reduxHooks';
import { Item } from '@/common/types/types';
import {
	decrementProduct,
	incrementProduct,
	removeItem,
	getTotals,
	selectTotal,
	selectCartState,
} from '@/features/cart/cartSlice';

export const useCart = () => {
	const cart = useAppSelector(selectCartState);
	const totalPrice = useAppSelector(selectTotal);
	const { cartTotalPrice, items } = cart;
	const itemsOnBag = items.length;
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getTotals());
	}, [cart]);

	const remove = (item: Item) => {
		dispatch(removeItem(item));
	};
	const decrement = (item: Item) => {
		dispatch(decrementProduct(item));
	};

	const increment = (item: Item) => {
		dispatch(incrementProduct(item));
	};
	return useMemo(() => {
		return { cartTotalPrice, items, totalPrice, remove, decrement, increment, itemsOnBag };
	}, [dispatch, cartTotalPrice, items, totalPrice]);
};
