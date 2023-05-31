import { useLayoutEffect, useState } from 'react';
import { Breakpoints } from '@/common/constants/breakpoints';
import { useResizeParams } from '@/hooks/useResizeParams';

export const useSemiMidScreen = () => {
	const currentWidth = useResizeParams();
	const [width, setWidth] = useState(currentWidth);
	const useSemiMidScreen = width <= Breakpoints.SemiMid;

	useLayoutEffect(() => {
		if (!currentWidth) {
			setWidth(window.innerWidth);
		} else {
			setWidth(currentWidth);
		}
	}, [currentWidth]);

	return useSemiMidScreen;
};
