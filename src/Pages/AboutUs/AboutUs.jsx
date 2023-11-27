import { Helmet } from 'react-helmet-async';
import Container from '../../UI/Container';
import Navbar from '../Home/components/Shared/Header/Navbar';
import AboutUsBanner from './AboutUsBanner';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUs = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Helmet>
				<title>Tour Tap | About Us</title>
			</Helmet>
			<Navbar screen={false} route="about">
				<AboutUsBanner></AboutUsBanner>
			</Navbar>
			<Container>
				<section>
					<div
						className="w-full bg-white pt-16 pr-4 pb-16 pl-4 mt-0 mr-auto mb-0 ml-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8
      lg:py-20"
					>
						<div className="mt-0 mr-auto mb-10 ml-auto max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<div>
								<p
									className="pt-px pr-3 pb-px pl-3 mt-0 mr-0 mb-4 ml-0 text-xs font-semibold text-white bg-green-500 inline-block
            tracking-wider uppercase rounded-full"
								>
									Dream Team
								</p>
							</div>
							<div
								className="mt-0 mr-auto mb-6 ml-auto text-3xl font-bold leading-none text-gray-900 max-w-lg font-sans
          tracking-tight sm:text-4xl md:mx-auto"
							>
								<div className="inline-block relative">
									<svg
										id="Windframe_7bpuqrDeBh"
										viewBox="0 0 52 24"
										fill="currentColor"
										className="absolute top-0 left-0 z-0 hidden
              w-32 -mt-8 -ml-20 text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
									>
										<div>
											<div className="w-.135 h-.30">
												<circle
													id="Windframe_dtUBDky34J"
													cx="1"
													cy="1"
													r=".7"
												/>
											</div>
										</div>
										<rect
											id="Windframe_kSHvKk55IY"
											fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
											className="w-52 h-24"
										/>
									</svg>
									<p
										className="text-3xl font-bold leading-none text-gray-900 relative inline max-w-lg font-sans tracking-tight
              sm:text-4xl md:mx-auto"
									>
										Welcome
									</p>
								</div>
								<p className="inline"></p>
								<p
									className="text-3xl font-bold leading-none text-gray-900 inline max-w-lg font-sans tracking-tight sm:text-4xl
            md:mx-auto"
								>
									our talented team of professionals
								</p>
							</div>
							<p className="text-base text-gray-700 md:text-lg">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque rem aperiam, eaque ipsa quae.
							</p>
						</div>
						<div
							className="grid mt-0 mr-auto mb-0 ml-auto gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2
        lg:grid-cols-3"
						>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Mac Xenon</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Product Manager
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Martha Jena</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Design Manager
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Macco James</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										CTO Lorem ltd
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Jean Wonder</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Human Resources
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Mr Smith</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Agent
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Andy Townsend</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Junior Developer
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Sophia Grey</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										UI/UX Designer
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Jack Bond</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Senior Developer
									</p>
								</div>
							</div>
							<div className="flex">
								<img
									src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									className="shadow object-cover mt-0 mr-4 mb-0 ml-0 rounded-full w-20 h-20"
								/>
								<div className="flex justify-center flex-col">
									<p className="text-lg font-bold">Adam Savage</p>
									<p className="text-sm text-gray-800 mt-0 mr-0 mb-4 ml-0">
										Savage Man
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default AboutUs;
