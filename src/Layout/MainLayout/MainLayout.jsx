import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Home/components/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
	return (
		<div className="font-primary">
			<Helmet>
				<title>Tour Tap | Home</title>
			</Helmet>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
