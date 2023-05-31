import { Route, Routes } from 'react-router-dom';
import { CheckoutProvider } from '@/context/checkoutContext';
import { BASE, CART, PRODUCT_DETAILS } from '@/common/constants/routeConstants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '@/common/utils/ScrollToTop';
import { Shop } from '@/pages/shop/ShopPage';
import CartPage from '@/pages/cart/CartPage';
import ProductDetails from '@/pages/product/ProductDetails';
import CheckoutPage from '@/pages/checkout/CheckoutPage';
import ShippingForm from '@/components/ShippingForm';
import PaymentForm from '@/components/PaymentForm';
import Navbar from '@/components/Navbar/Navbar';

export const App = () => {
	return (
		<>
			<ToastContainer />
			<Navbar />
			<ScrollToTop />

			<Routes>
				<Route index path={BASE} element={<Shop />} />
				<Route path={`${PRODUCT_DETAILS}/:id`} element={<ProductDetails />} />
				<Route path={CART} element={<CartPage />} />

				<Route
					path='/checkout'
					element={
						<CheckoutProvider>
							<CheckoutPage />
						</CheckoutProvider>
					}
				>
					<Route path='/checkout/shipping' element={<ShippingForm />} />
					<Route path='/checkout/payment' element={<PaymentForm />} />
				</Route>
			</Routes>
		</>
	);
};
