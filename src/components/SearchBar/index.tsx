import SearchInput from '@/components/Input/SearchInput';

export const SearchBar = () => {
	return (
		<div className=' flex flex-col fixed h-fit	mt-20 bg-gray-800/40 top-0 bottom-0 left-0 right-0 text-xl text-gray-900/80 font-medium gap-5 text-center uppercase'>
			<SearchInput />
		</div>
	);
};
