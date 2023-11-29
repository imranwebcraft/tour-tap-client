import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';
import NavbarSignle from '../../Components/NavbarSignle/NavbarSignle';
import Container from '../../UI/Container';
import './login.css';
import SocialLogin from './Shared/SocialLogin';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useAuth from '../../Hook/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { logIn } = useAuth();

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		logIn(data?.email, data.password)
			.then((result) => {
				console.log(result.user);
				toast.success('Login successfull');
				navigate(location.state ? location.state.from.pathname : '/');
				setLoading(false);
				reset();
			})
			.catch((err) => {
				toast.error(err.message);
				setLoading(false);
			});
	};

	return (
		<div>
			<Helmet>
				<title>Tour Tap | Login</title>
			</Helmet>
			<NavbarSignle></NavbarSignle>
			<Container>
				<div className="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-16">
					<div className="hidden bg-cover lg:block lg:w-1/2 login-bg-image"></div>

					<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
						<div className="flex justify-center mx-auto">
							<Logo></Logo>
						</div>

						<p className="mt-3 text-3xl text-center font-semibold text-gray-800 dark:text-gray-200">
							Welcome back!
						</p>

						{/* Google sign in button */}
						<SocialLogin></SocialLogin>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

							<a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
								or login with email
							</a>

							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
						</div>

						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mt-4">
								<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
									Email Address
								</label>
								<input
									type="email"
									{...register('email', { required: true })}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									placeholder="Enter your email address"
								/>
								{errors.email?.type === 'required' && (
									<span className="text-sm text-red-600">
										Email is required*
									</span>
								)}
							</div>
							<div className="mt-4">
								<div className="flex justify-between">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Password
									</label>
									<a className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
										Forget Password?
									</a>
								</div>
								<input
									type="password"
									{...register('password', { required: true })}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									placeholder="********"
								/>

								{errors.password?.type === 'required' && (
									<span className="text-sm text-red-600">
										Password is required*
									</span>
								)}
							</div>
							<div className="mt-6">
								<button
									className="
								flex items-center justify-center gap-2
								w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
								>
									{loading ? (
										<AiOutlineLoading3Quarters className="animate-spin text-white" />
									) : undefined}
									Log In
								</button>
							</div>
						</form>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

							<Link
								to={'/register'}
								className="text-xs text-gray-500 uppercase dark:text-gray-400 underline decoration-2 hover:decoration-2 transition-all duration-300 hover:decoration-green-500"
							>
								or sign up
							</Link>

							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Login;
