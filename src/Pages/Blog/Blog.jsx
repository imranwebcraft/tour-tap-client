import { Helmet } from 'react-helmet-async';
import Container from '../../UI/Container.jsx';
import Navbar from '../Home/components/Shared/Header/Navbar';
import BlogBanner from './BlogBanner.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Blog = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Helmet>
				<title>Tour Tap | Blog</title>
			</Helmet>
			<Navbar screen={false} route="blog">
				<BlogBanner></BlogBanner>
			</Navbar>

			{/* Content */}
			<Container>
				<div className="py-10">
					<section className="dark:bg-gray-800 rounded-md dark:text-gray-100 ">
						<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
							<a
								rel="noopener noreferrer"
								href="#"
								className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
							>
								<img
									src="https://source.unsplash.com/random/480x360"
									alt=""
									className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
								/>
								<div className="p-6 space-y-2 lg:col-span-5">
									<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
										Exploring Hidden Gems
									</h3>
									<span className="text-xs dark:text-gray-400">
										February 19, 2023
									</span>
									<p>
										Embark on a journey to discover lesser-known destinations,
										away from the crowds. Uncover the beauty of hidden gems that
										promise unique experiences and unforgettable moments.
										Traverse off-the-beaten paths, where every corner holds a
										story waiting to be told. Join us as we unveil the secrets
										of enchanting places that capture the essence of travel
										beyond the ordinary.
									</p>
								</div>
							</a>
							<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?1"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Culinary Adventures
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 21, 2023
										</span>
										<p>
											Savor the world through our culinary adventures. Dive into
											diverse cuisines, street food delights, and gastronomic
											wonders. Join us on a flavorful expedition around the
											globe.
										</p>
									</div>
								</a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?2"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Thrill-Seeker's Diary
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 22, 2022
										</span>
										<p>
											Calling all adrenaline junkies! Follow our thrill-seeker's
											diary as we explore the heart-pounding world of adventure
											travel. From skydiving to mountain trekking, the
											excitement never ends.
										</p>
									</div>
								</a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?3"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Cultural Immersion Chronicles
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 23, 2021
										</span>
										<p>
											Immerse yourself in the rich tapestry of cultures
											worldwide. Our cultural immersion chronicles take you
											beyond landmarks, introducing you to traditions,
											festivals, and the soul of each destination.
										</p>
									</div>
								</a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?4"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Nature's Wonders Unveiled
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 24, 2021
										</span>
										<p>
											Nature's wonders are waiting to be unveiled. Join us on a
											journey through scenic landscapes, national parks, and
											natural marvels. Get ready to be captivated by the beauty
											of our planet.
										</p>
									</div>
								</a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?5"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Traveling on a Budget
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 25, 2021
										</span>
										<p>
											Discover the art of budget-friendly travel without
											compromising on experiences. Our tips and tricks will
											guide you to explore amazing destinations without breaking
											the bank. Start your affordable adventure today.
										</p>
									</div>
								</a>
								<a
									rel="noopener noreferrer"
									href="#"
									className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
								>
									<img
										role="presentation"
										className="object-cover w-full rounded h-44 dark:bg-gray-500"
										src="https://source.unsplash.com/random/480x360?6"
									/>
									<div className="p-6 space-y-2">
										<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
											Sustainable Travel: Nurturing the Planet, One Journey at a
											Time
										</h3>
										<span className="text-xs dark:text-gray-400">
											January 26, 2021
										</span>
										<p>
											Join the movement towards responsible and sustainable
											travel practices. Delve into eco-friendly destinations,
											green initiatives, and inspiring stories of travelers
											making a positive impact.
										</p>
									</div>
								</a>
							</div>
							<div className="flex justify-center">
								<button
									type="button"
									className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400 hover:text-green-500"
								>
									Load more posts...
								</button>
							</div>
						</div>
					</section>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
