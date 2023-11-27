import Lottie from 'lottie-react';
import error from '../../assets/Animation/error.json';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
			<main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className=" w-[300px] h-[300px]">
					<Lottie animationData={error} />
				</div>

				<div className="text-center">
					<p className="text-base font-semibold text-green-600">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-gray-600">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							to={'/'}
							className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-300"
						>
							Go back home
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Error;
