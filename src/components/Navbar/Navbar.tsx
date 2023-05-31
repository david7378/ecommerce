import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CART, BASE } from '@/common/constants/routeConstants';
import { useCart } from '@/hooks/useCart';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { ShoppingBagIcon } from '@/components/icons';
import CloseIcon from '@/components/icons/Close';
import MenuIcon from '@/components/icons/Menu';
import SearchIcon from '@/components/icons/Search';
import SearchInput from '@/components/Input/SearchInput';
import { SearchBar } from '@/components/SearchBar';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { itemsOnBag } = useCart();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isShippingPage = pathname === '/checkout/shipping';
	const isPaymentPage = pathname === '/checkout/payment';
	const isShopping = pathname === '/';

	const searchRef = useRef<HTMLDivElement>(null);
	const initialState = {
		refs: [searchRef],
		initialState: false,
		onClickOutside: handleClickOutside,
	};

	const [isSearchOpen, setIsSearchOpen] = useOutsideClick(initialState);
	function handleClickOutside() {
		setIsSearchOpen(false);
	}

	const handleToggleSearch = () => {
		setIsSearchOpen((prev) => !prev);
	};

	const handleToggleMenu = () => {
		if (window.innerWidth > 1023) return;
		setToggleMenu((prev) => !prev);
		document.body.classList.toggle('lock-scroll');
	};
	return (
		<header
			ref={searchRef}
			className={`z-50 mx-auto fixed top-0 w-full lg:static h-20 flex items-center justify-between
								bg-white/5 ${
									toggleMenu ? '' : 'backdrop-blur-xl'
								} text-black sm:bg-slate-800 sm:text-slate-200 flex-col`}
		>
			<div className='max-w-6xl flex items-center h-full justify-between w-full md:pl-7 px-4 md:px-0 '>
				{isShippingPage || isPaymentPage ? (
					<button
						className='bg-slate-400/10 backdrop-blur-md px-3 py-2 rounded-lg'
						onClick={() => navigate(-1)}
					>
						Back
					</button>
				) : (
					<div className='hover:text-lg w-16 hover:text-green-500 font-semibold transition-colors ease-in-out hover:animate-pulse'>
						<Link to={BASE}>Shopping!</Link>
					</div>
				)}

				<div className='w-1/2 hidden lg:block'>
					<SearchInput />
				</div>

				<div className='flex items-center gap-5'>
					<nav onClick={handleToggleMenu}>
						<ul
							className={`${
								toggleMenu ? 'flexColMod' : 'hidden lg:flex gap-5 uppercase items-center'
							}`}
						>
							<li>
								<Link to={BASE}>Shop</Link>
							</li>
						</ul>
					</nav>
					<Link to={CART} className='relative'>
						<span>
							<ShoppingBagIcon width={24} height={24} />
						</span>
						<span className='counting-bubble'>{itemsOnBag}</span>
					</Link>
					{isShopping && (
						<button className='relative' onClick={handleToggleSearch}>
							<span>
								<SearchIcon width={24} height={24} className='text-2xl lg:hidden cursor-pointer' />
							</span>
						</button>
					)}

					<span className='z-[3]'>
						<span onClick={handleToggleMenu}>
							<MenuIcon
								width={24}
								height={24}
								className={`${!toggleMenu ? 'block' : 'hidden'} text-2xl lg:hidden cursor-pointer`}
							/>
						</span>
						<span onClick={handleToggleMenu}>
							<CloseIcon
								width={24}
								height={24}
								className={`${toggleMenu ? 'block' : 'hidden'} text-2xl lg:hidden cursor-pointer`}
							/>
						</span>
					</span>
				</div>
			</div>

			{isSearchOpen && (
				<div>
					<SearchBar />
				</div>
			)}
		</header>
	);
};

export default Navbar;
