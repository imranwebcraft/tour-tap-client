import Logo from '../../Components/Logo';
import {
	Link,
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { LuHome, LuUsers2 } from 'react-icons/lu';
import { LuPackagePlus } from 'react-icons/lu';
import { TbBrandBooking } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineWorkOutline } from 'react-icons/md';
import useRole from '../../Hook/useRole';
import { BiSolidDashboard } from 'react-icons/bi';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const DashboardLayout = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const navigate = useNavigate();
	const [role] = useRole();
	useEffect(() => {
		switch (role) {
			case 'admin':
				navigate('/dashboard/admin-profile');
				break;
			case 'tourist':
				navigate('/dashboard/tourist-profile');
				break;
			case 'tourGuide':
				navigate('/dashboard/tourguide-profile');
				break;
			default:
		}
	}, [navigate, role]);
	return (
		<div>
			<Helmet>
				<title>Tour Tap | Dashboard</title>
			</Helmet>

			<div className=" h-20 bg-gray-900 text-white">
				<h1 className=" h-full flex items-center justify-center gap-2 text-3xl">
					<BiSolidDashboard></BiSolidDashboard> Dashboard
				</h1>
			</div>
			<div className=" flex gap-10">
				{/* Sidebar */}
				<div className="flex flex-col  p-3 w-80  dark:bg-gray-900 dark:text-gray-100 border-r min-h-screen pl-5">
					<div className="space-y-3">
						{/* Logo */}
						<Link
							to={'/'}
							className=" flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 bg-green-500 p-5 rounded-md"
						>
							<Logo></Logo>
							<h3 className="  text-white text-lg lg:text-xl font-bold pt-2">
								Tour-Tap Home
							</h3>
						</Link>
						<div className="flex-1">
							<ul className="pt-2 pb-4 space-y-1 text-sm">
								{/* ------- Admin Route SSSSTTTARRRTT */}
								{role === 'admin' && (
									<>
										{/* Admin Profile */}
										<li>
											<NavLink
												to={'/dashboard/admin-profile'}
												className={({ isActive }) =>
													isActive ? 'text-green-500 font-semibold' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 p-2">
													<LuHome className=" text-xl"></LuHome> My Profile
												</span>
											</NavLink>
										</li>
										{/* Add Package */}
										<li className=" rounded-md">
											<NavLink
												to={'/dashboard/add-package'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<LuPackagePlus className=" text-xl"></LuPackagePlus>{' '}
													Add Package
												</span>
											</NavLink>
										</li>
										{/* Manage Users */}
										<li className=" rounded-md">
											<NavLink
												to={'/dashboard/users'}
												className={({ isActive }) =>
													isActive ? 'text-green-500 font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<LuUsers2 className=" text-xl"></LuUsers2> Manage
													Users
												</span>
											</NavLink>
										</li>
										{/* ------- Admin Route EEENDDDD */}
									</>
								)}
								{/* ------- Tourist Route Start */}
								{role === 'tourist' && (
									<>
										{/* Tourist Profile */}
										<li className=" rounded-md">
											<NavLink
												to={'/dashboard/tourist-profile'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<LuUsers2 className=" text-xl"></LuUsers2> My Profile
												</span>
											</NavLink>
										</li>
										{/* My Bookings */}
										<li className=" rounded-md">
											<NavLink
												to={'/dashboard/booking'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<TbBrandBooking className=" text-xl"></TbBrandBooking>{' '}
													My Bookings
												</span>
											</NavLink>
										</li>
										{/* My Wishlist */}
										<li className=" rounded-md">
											<NavLink
												to={'/dashboard/wishlist'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<FaRegHeart className=" text-xl"></FaRegHeart> My
													Wishlist
												</span>
											</NavLink>
										</li>
										{/* Tourist Route End */}
									</>
								)}
								{/* Tour Guide Route START*/}
								{role === 'tourGuide' && (
									<>
										{/* Tour Guide PRofile */}
										<li className="rounded-md">
											<NavLink
												to={'/dashboard/tourguide-profile'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<LuHome className=" text-xl"></LuHome> My Profile
												</span>
											</NavLink>
										</li>
										<li className="rounded-md">
											<NavLink
												to={'/dashboard/assign-tour'}
												className={({ isActive }) =>
													isActive ? 'text-green-500  font-medium' : ''
												}
											>
												<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
													<MdOutlineWorkOutline className=" text-xl"></MdOutlineWorkOutline>
													My Assigneds Tour
												</span>
											</NavLink>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
				{/* Content */}
				<div className="flex-1 py-16">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
