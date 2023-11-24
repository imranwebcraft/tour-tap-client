import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Home/components/Shared/Footer/Footer';

const MainLayout = () => {
	return (
		<div className="font-primary">
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
