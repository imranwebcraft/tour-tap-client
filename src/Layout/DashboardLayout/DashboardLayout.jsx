import Logo from '../../Components/Logo';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { LuHome, LuUsers2 } from 'react-icons/lu';
import { LuPackagePlus } from 'react-icons/lu';
import { TbBrandBooking } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineWorkOutline } from 'react-icons/md';

const DashboardLayout = () => {
	return (
		<div className=" flex gap-10">
			{/* Sidebar */}
			<div className="flex flex-col h-full p-3 w-60 bg-emerald-500 dark:bg-gray-900 dark:text-gray-100 border-r min-h-screen pl-5">
				<div className="space-y-3">
					{/* Logo */}
					<Link
						to={'/'}
						className=" flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 bg-emerald-600 p-5 rounded-md"
					>
						<Logo></Logo>
						<h3 className=" text-white text-lg lg:text-xl font-bold pt-2">
							Tour-Tap
						</h3>
					</Link>
					<div className="flex-1">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							{/* ------- Admin Route SSSSTTTARRRTT */}

							{/* Admin Profile */}
							<li className="">
								<NavLink
									to={'/dashboard/admin-profile'}
									className={({ isActive }) =>
										isActive ? 'text-white font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<LuHome className=" text-xl"></LuHome> My Profile
									</span>
								</NavLink>
							</li>

							{/* Add Package */}

							<li className=" rounded-md">
								<NavLink
									to={'/dashboard/add-package'}
									className={({ isActive }) =>
										isActive ? 'text-white  font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<LuPackagePlus className=" text-xl"></LuPackagePlus> Add
										Package
									</span>
								</NavLink>
							</li>

							{/* Manage Users */}

							<li className=" rounded-md">
								<NavLink
									to={'/dashboard/users'}
									className={({ isActive }) =>
										isActive ? 'text-white font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<LuUsers2 className=" text-xl"></LuUsers2> Manage Users
									</span>
								</NavLink>
							</li>

							{/* ------- Admin Route EEENDDDD */}

							{/* ------- Tourist Route Start */}

							{/* Tourist Profile */}
							<li className=" rounded-md">
								<NavLink
									to={'/dashboard/tourist-profile'}
									className={({ isActive }) =>
										isActive ? 'text-white  font-medium' : ''
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
										isActive ? 'text-white  font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<TbBrandBooking className=" text-xl"></TbBrandBooking> My
										Bookings
									</span>
								</NavLink>
							</li>
							{/* My Wishlist */}
							<li className=" rounded-md">
								<NavLink
									to={'/dashboard/wishlist'}
									className={({ isActive }) =>
										isActive ? 'text-white  font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<FaRegHeart className=" text-xl"></FaRegHeart> My Wishlist
									</span>
								</NavLink>
							</li>

							{/* Tourist Route End */}

							{/* Tour Guide Route STAT*/}

							{/* Tour Guide PRofile */}
							<li className="rounded-md">
								<NavLink
									to={'/dashboard/tourguide-profile'}
									className={({ isActive }) =>
										isActive ? 'text-white  font-medium' : ''
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
										isActive ? 'text-white  font-medium' : ''
									}
								>
									<span className=" flex items-center gap-2 text-base rounded transition-colors hover:bg-green-50 hover:text-green-500 focus:bg-green-50 aria-[current=page]:bg-green-50 aria-[current=page]:text-green-500 p-2">
										<MdOutlineWorkOutline className=" text-xl"></MdOutlineWorkOutline>
										My Assigneds Tour
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* Content */}
			<div className="flex-1 py-16">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashboardLayout;
