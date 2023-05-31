import { ChangeEvent, useEffect, useRef } from 'react';
import { useAppDispatch } from '@/app/reduxHooks';
import { setSearchTerm } from '@/features/filter/filterSlice';

const SearchInput = () => {
	const dispatch = useAppDispatch();
	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		dispatch(setSearchTerm(inputValue));
	};
	useEffect(() => {
		searchInputRef?.current?.focus();
	}, []);

	return (
		<div className='w-full flex'>
			<input
				ref={searchInputRef}
				type='text'
				className='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-gray-800/80 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-300 dark:focus:border-primary'
				placeholder='Search'
				onChange={(e) => handleOnChange(e)}
				aria-label='Search'
				aria-describedby='button-addon1'
			/>
		</div>
	);
};

export default SearchInput;
