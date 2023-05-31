import { Product } from '@/common/types/types';
import { useMemo, useState } from 'react';

export const useFilter = (searchValue?: string | any, items?: Product[]) => {
	const [filteredData, setFilteredData] = useState<Product[]>();

	useMemo(() => {
		console.log('searchValue', searchValue);
		const filteredItems = items?.filter((product) =>
			product.title.toLowerCase().includes(searchValue?.toLowerCase())
		);
		setFilteredData(filteredItems);
		console.log('filteredItems', filteredItems);
		return;
	}, [items, searchValue]);

	return { filteredData };
};
