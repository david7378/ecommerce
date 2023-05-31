import { useLayoutEffect, useState } from 'react';
import { Breakpoints } from '@/common/constants/breakpoints';
import { useResizeParams } from '@/hooks/useResizeParams';

export const useMobile = () => {
	const currentWidth = useResizeParams();
	const [width, setWidth] = useState(currentWidth);
	const isMobile = width <= Breakpoints.Min;

	useLayoutEffect(() => {
		if (!currentWidth) {
			setWidth(window.innerWidth);
		} else {
			setWidth(currentWidth);
		}
	}, [currentWidth]);

	return isMobile;
};
