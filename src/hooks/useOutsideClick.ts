import { useState, useEffect } from 'react';
import { UseOutsideClickProps } from '@/common/types/types';

export const useOutsideClick = ({
	refs,
	initialState,
	onClickOutside,
}: UseOutsideClickProps) => {
	const [isSearchOpen, setIsSearchOpen] = useState(initialState);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			let isOutsideClick = true;
			for (const ref of refs) {
				if (ref.current && ref.current.contains(e.target as Node)) {
					isOutsideClick = false;
					break;
				}
			}
			if (isOutsideClick) {
				onClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [refs, onClickOutside]);

	return [isSearchOpen, setIsSearchOpen] as const;
};
