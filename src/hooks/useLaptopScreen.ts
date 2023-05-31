import { useLayoutEffect, useState } from 'react';
import { Breakpoints } from '../common/constants/breakpoints';
import { useResizeParams } from './useResizeParams';

export const useLaptopScreen = () => {
	const currentWidth = useResizeParams();
	const [width, setWidth] = useState(currentWidth);
	const isMidScreen = width <= Breakpoints.SemiMid;

	useLayoutEffect(() => {
		if (!currentWidth) {
			setWidth(window.innerWidth);
		} else {
			setWidth(currentWidth);
		}
	}, [currentWidth]);

	return isMidScreen;
};
