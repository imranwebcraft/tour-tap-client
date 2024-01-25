import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Pages/Home/components/Shared/Footer/Footer";

const MainLayout = () => {
	return (
		<div className="font-primary">
			<Helmet>
				<title>Tour Tap | Home</title>
			</Helmet>
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer />
			{/* Same as */}
			<ToastContainer />
		</div>
	);
};

export default MainLayout;
