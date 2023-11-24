import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="font-primary">
			<Outlet></Outlet>
			{/* <p>Footer</p> */}
		</div>
	);
};

export default MainLayout;
