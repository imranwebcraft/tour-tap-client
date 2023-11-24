import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/components/Shared/Header/Navbar';
const MainLayout = () => {
	return (
		<div className="font-primary">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<p>Footer</p>
		</div>
	);
};

export default MainLayout;
