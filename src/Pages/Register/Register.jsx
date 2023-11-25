import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Components/Logo';
import NavbarSignle from '../../Components/NavbarSignle/NavbarSignle';
import Container from '../../UI/Container';
import './register.css';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Login/Shared/SocialLogin';
import useAuth from '../../Hook/useAuth';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
	const [loading, setLoading] = useState(false);
	const { createUser, updateUserProfile } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = async (data) => {
		setLoading(true);
		console.log(loading);
		console.log(data);
		// Image as form data
		const formData = { image: data.image[0] };
		const res = await axiosPublic.post(image_hosting_api, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log(res);
		console.log(res?.data?.data?.display_url);
		if (res?.data?.success) {
			createUser(data?.email, data?.password)
				.then((result) => {
					console.log(result.user);
					toast.success('User create successfully');

					updateUserProfile(data.name, res?.data?.data?.display_url)
						.then(() => {
							toast.success('User profile update successfull');
							// TODO: Save user info to the database
						})
						.catch(() => {
							toast.error('Unable to update user profile');
						});
					reset();
					setLoading(false);
					navigate('/');
					console.log(loading);
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
				});
		}
	};

	return (
		<div>
			<NavbarSignle></NavbarSignle>
			<Container>
				<div className="flex w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-16">
					<div className="hidden bg-cover lg:block lg:w-1/2 register-bg-image"></div>

					<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
						<div className="flex justify-center mx-auto">
							<Logo></Logo>
						</div>

						<p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
							Create a free account!
						</p>

						{/* Google sign in button */}

						<SocialLogin></SocialLogin>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
							<a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
								or Register with email
							</a>
							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
						</div>
						{/* ----------- Form Start */}
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* -----------Name------------ */}
							<div className="mt-4">
								<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
									Your Name
								</label>
								<input
									{...register('name', { required: true })}
									type="text"
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									placeholder="Enter your name"
								/>
								{errors.name?.type === 'required' && (
									<span className=" text-red-600">Name is required</span>
								)}
							</div>
							{/* -----------Email------------ */}
							<div className="mt-4">
								<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
									Email Address
								</label>
								<input
									{...register('email', { required: true })}
									type="email"
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									placeholder="Enter your email address"
								/>
								{errors.email?.type === 'required' && (
									<span className=" text-red-600">Email is required</span>
								)}
							</div>
							{/* -----------Password------------ */}

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
									{...register('password', { required: true })}
									type="password"
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									placeholder="*********"
								/>
								{errors.password?.type === 'required' && (
									<span className=" text-red-600">Password is required</span>
								)}
							</div>
							{/* -----------Photo------------ */}

							<div>
								<label className="block mt-3 mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
									Profile Picture
								</label>
								<label className="flex items-center px-3 py-3 mx-auto text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
									<input
										{...register('image', { required: true })}
										type="file"
									/>
									{errors.image?.type === 'required' && (
										<p className="text-red-500">Image field is required</p>
									)}
								</label>
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
									Sign In
								</button>
							</div>
						</form>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

							<Link
								to={'/login'}
								className="text-xs text-gray-500 uppercase dark:text-gray-400 underline decoration-2 hover:decoration-2 transition-all duration-300 hover:decoration-green-500"
							>
								or Log in
							</Link>

							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Register;
