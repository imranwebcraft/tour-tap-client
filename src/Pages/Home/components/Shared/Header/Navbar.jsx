import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../../Components/Logo';
import Button from '../../../../../Components/Button/Button';
import './navbar.css';
import Container from '../../../../../UI/Container';
import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter';
import { RxVideo } from 'react-icons/rx';
import { motion } from 'framer-motion';

const Navbar = ({ screen }) => {
	const animatedText = 'Explore the World with Tour-Tap';

	const [isToggleOpen, setIsToggleOpen] = useState(false);

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

	return (
		<div className={`bg-image ${screen ? 'h-screen' : 'h-[50vh]'}  relative`}>
			<div className="relative z-20 w-full">
				{/*<!-- Header --> */}
				<header className=" max-w-[1250px] mx-auto after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:after:hidden">
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
								role="menubar"
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
								<Button buttonText={'Login / Register'}></Button>
								{/* Dark Model Toggole Icons */}
								<button
									onClick={toggoleTheme}
									className=" hidden  group lg:inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
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
				{/*<!-- End Navbar with Topbar--> */}

				{/* Home banner */}
				<Container>
					<div className=" h-full flex flex-col justify-center items-center py-52 space-y-3">
						{/* <span className=" text-center text-white bg-green-200 bg-opacity-50 max-w-xs rounded-md px-2 py-1">
							Explore the wonderful Bangladesh!
						</span> */}
						<h1 className="text-white text-6xl font-bold tracking-wider max-w-5xl text-center ">
							Welcome to Tour-Tap!
						</h1>
						<span className=" text-2xl lg:text-6xl text-white ">
							<Typewriter
								words={[animatedText]}
								cursor
								cursorStyle="_"
								typeSpeed={80}
								deleteSpeed={50}
								delaySpeed={1000}
								loop={true}
							/>
						</span>

						<div className="flex gap-2 items-center justify-center ">
							<div className="flex -space-x-4">
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?1"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?1"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?1"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?1"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?2"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?3"
								/>
								<img
									className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
									src="https://source.unsplash.com/40x40/?portrait?4"
								/>
								<span className="flex items-center justify-center w-10 h-10 font-semibold border rounded-full dark:bg-gray-900 text-white dark:border-gray-700">
									+
								</span>
							</div>
							<span className=" mr-10 flex items-center justify-center text-white">
								2,500 people booked tour in last 24 hours.
							</span>
						</div>

						<div className=" flex flex-col items-center gap-4">
							<Button buttonText={'Find Out More'}></Button>
							<motion.button
								initial={{ scale: 0.2, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.2 }}
								className=" group text-lg flex items-center gap-1 text-white border border-rose-500 px-3 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition-all ease-in-out duration-300"
							>
								<RxVideo className=" group-hover:text-white text-rose-500"></RxVideo>
								Watch Demo
							</motion.button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};
Navbar.propTypes = {
	screen: PropTypes.bool,
};

export default Navbar;
