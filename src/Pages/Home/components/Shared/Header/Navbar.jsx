/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../../Components/Logo';
import Button from '../../../../../Components/Button/Button';
import './navbar.css';
import PropTypes from 'prop-types';
import useAuth from '../../../../../Hook/useAuth';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const Navbar = ({ screen, children, route }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isToggleOpen, setIsToggleOpen] = useState(false);
	const { user, logOut } = useAuth();

	// Dark mode control
	const [theme, setTheme] = useState('light');
	const html = document.documentElement;

	const toggoleTheme = () => {
		if (theme === 'light') {
			html.classList.remove('light');
			html.classList.add('dark');
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			html.classList.remove('dark');
			html.classList.add('light');
			setTheme('light');
			localStorage.setItem('theme', 'light');
		}
	};

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme');
		html.classList.add(currentTheme);
		setTheme(currentTheme);
	}, [html.classList]);

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Add a class when the user scrolls down
			setIsScrolled(window.scrollY > 50);
		};

		// Attach the scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Detach the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('Log out successfull');
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div
			className={`bg-image ${
				screen ? 'h-screen' : 'h-[50vh]'
			} ${route}-page relative `}
		>
			<div className="relative  z-20 w-full">
				{/*<!-- Header --> */}
				<header
					className={`sticky top-0 z-50 rounded-b-lg bg-slate-900 ${
						isScrolled ? 'bg-opacity-75 backdrop-blur-md' : 'bg-opacity-0'
					}  max-w-[1250px] mx-auto after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:after:hidden transition-all duration-500`}
				>
					<div className="relative lg:py-5 mx-auto w-full px-6 lg:px-3 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
						<nav
							aria-label="main navigation"
							className="flex py-2 items-center justify-between font-medium text-slate-700"
							role="navigation"
						>
							{/*      <!-- Brand logo --> */}
							<Link
								to={'/'}
								className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
								href="javascript:void(0)"
							>
								<div className=" flex items-center gap-2">
									<Logo></Logo>
									<h3 className=" text-white text-lg lg:text-xl font-bold">
										Tour-Tap
									</h3>
								</div>
							</Link>
							{/*      <!-- Mobile trigger --> */}
							<button
								className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
									isToggleOpen
										? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
										: ''
								}
              `}
								onClick={() => setIsToggleOpen(!isToggleOpen)}
								aria-expanded={isToggleOpen ? 'true' : 'false'}
								aria-label="Toggle navigation"
							>
								<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
									<span
										aria-hidden="true"
										className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
									></span>
									<span
										aria-hidden="true"
										className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
									></span>
									<span
										aria-hidden="true"
										className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
									></span>
								</div>
							</button>
							{/*      <!-- Navigation links --> */}
							<ul
								aria-label="Select page"
								className={`text-sm absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
									isToggleOpen
										? 'visible opacity-100 backdrop-blur-sm'
										: 'invisible opacity-0'
								}`}
							>
								{/* Home */}
								<li className="flex">
									<span className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none">
										<NavLink
											to="/"
											className={({ isActive }) =>
												isActive
													? 'text-green-500 border-b-2 border-transparent transition-colors duration-300 transform   mx-1.5 sm:mx-6'
													: 'border-b-2 border-transparent text-white transition-colors duration-300 transform  hover:border-green-500 mx-1.5 sm:mx-6'
											}
										>
											Home
										</NavLink>
									</span>
								</li>
								{/* Community */}
								<li className="flex">
									<span className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none">
										<NavLink
											to="/community"
											className={({ isActive }) =>
												isActive
													? 'text-green-500 border-b-2 border-transparent transition-all duration-300 transform   mx-1.5 sm:mx-6'
													: 'border-b-2 border-transparent transition-colors duration-300 transform  hover:border-green-500 mx-1.5 sm:mx-6 text-white'
											}
										>
											Community
										</NavLink>
									</span>
								</li>
								{/* Blog */}
								<li className="flex">
									<span className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none">
										<NavLink
											to="/blog"
											className={({ isActive }) =>
												isActive
													? 'text-green-500 border-b-2 border-transparent transition-all duration-300 transform   mx-1.5 sm:mx-6'
													: 'border-b-2 border-transparent transition-colors duration-300 transform  hover:border-green-500 mx-1.5 sm:mx-6 text-white'
											}
										>
											Blog
										</NavLink>
									</span>
								</li>
								{/* About US */}
								<li className="flex">
									<span className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none ">
										<NavLink
											to="/aboutUs"
											className={({ isActive }) =>
												isActive
													? 'text-green-500 border-b-2 border-transparent transition-all   duration-300 transform   mx-1.5 sm:mx-6'
													: 'border-b-2 border-transparent transition-colors duration-300 transform  hover:border-green-500 mx-1.5 sm:mx-6 text-white'
											}
										>
											About Us
										</NavLink>
									</span>
								</li>
								{/* Contact Us */}
								<li className="flex">
									<span className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none ">
										<NavLink
											to="/contactUs"
											className={({ isActive }) =>
												isActive
													? 'text-green-500 border-b-2 border-transparent transition-all  duration-300 transform   mx-1.5 sm:mx-6'
													: 'border-b-2 border-transparent transition-colors duration-300 transform  hover:border-green-500 mx-1.5 sm:mx-6 text-white'
											}
										>
											Contact Us
										</NavLink>
									</span>
								</li>
							</ul>
							{/*      <!-- Actions --> */}
							<div className="ml-auto flex gap-[2px] lg:gap-5 items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
								{user ? (
									<div className=" text-white text-sm relative">
										<div
											onClick={() => setIsOpen(!isOpen)}
											className=" relative hover:cursor-pointer"
										>
											<img
												className=" h-[35px] w-[35px] rounded-full"
												src={user?.photoURL}
												alt="userProfile"
											/>
										</div>

										{isOpen && (
											<div className=" bg-slate-900 bg-opacity-70 backdrop-blur-2xl px-4 py-5 flex flex-col gap-2 text-right absolute right-[0%] mt-5 rounded-lg">
												<Link className=" underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-green-500 transition-colors duration-300 transform  hover:border-green-500">
													Dashboard
												</Link>
												<Link className=" underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-green-500 transition-colors duration-300 transform  hover:border-green-500">
													Offer Anniuncement
												</Link>
												<div className="bg-slate-950 px-4 py-3 rounded-md bg-opacity-20 backdrop-blur-xl space-y-1 hover:cursor-not-allowed">
													<p>{user?.displayName}</p>
													<p>{user?.email}</p>
												</div>
												<div
													onClick={handleLogOut}
													className=" flex justify-end"
												>
													<motion.button
														initial={{ scale: 1, opacity: 0.8 }}
														whileHover={{
															scale: 1.05,
															transition: { duration: 0.3 },
														}}
														whileTap={{
															scale: 0.9,
															transition: { duration: 0.3 },
														}}
														className=" flex items-center gap-2 px-4 py-2 rounded-md bg-red-500"
													>
														<RiLogoutCircleRLine className="text-lg" /> Log Out
													</motion.button>
												</div>
											</div>
										)}
									</div>
								) : (
									<Link to={'/login'}>
										<Button buttonText={'Login / Register'}></Button>
									</Link>
								)}

								{/* Dark Model Toggole Icons */}
								<button
									onClick={toggoleTheme}
									className=" hidden  group lg:inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-100 hover:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
								>
									{theme === 'light' ? (
										<svg
											className="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
										</svg>
									) : (
										<svg
											className="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
										</svg>
									)}
								</button>
							</div>
						</nav>
					</div>
				</header>

				{/* Home banner */}
				{children}
			</div>
		</div>
	);
};
Navbar.propTypes = {
	screen: PropTypes.bool,
};

export default Navbar;
