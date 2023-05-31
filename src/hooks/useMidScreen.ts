import { useLayoutEffect, useState } from 'react';
import { Breakpoints } from '@/common/constants/breakpoints';
import { useResizeParams } from '@/hooks/useResizeParams';

export const useMidScreen = () => {
	const currentWidth = useResizeParams();
	const [width, setWidth] = useState(currentWidth);
	const isMidScreen = width <= Breakpoints.Mid;

	useLayoutEffect(() => {
		if (!currentWidth) {
			setWidth(window.innerWidth);
		} else {
			setWidth(currentWidth);
		}
	}, [currentWidth]);

	return isMidScreen;
};
