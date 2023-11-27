import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { ClockLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();

	const location = useLocation();

	if (loading) {
		return (
			<div className=" bg-white dark:bg-slate-900 h-screen flex justify-center items-center">
				<ClockLoader color="#36d7b7" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
