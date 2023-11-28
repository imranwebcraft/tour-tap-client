import MotionButton from '../../../../Components/MotionButton/MotionButton';
import SectionContainer from '../../../../UI/SectionContainer';
import newsLetter from '../../../../assets/images/newsletter.jpg';

const NewsLetter = () => {
	return (
		<SectionContainer>
			<div className="dark:bg-gray-800 bg-gray-200 py-16">
				<div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
					<h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
						Unlock Travel Secrets: Sign Up for Our Newsletter
					</h2>
					<p className="mt-2 max-w-xl text-base text-gray-400">
						Stay informed about the hottest travel destinations, hidden gems,
						and exclusive travel deals.
					</p>
					<form>
						<div className="mt-6 sm:flex jusitfy-start">
							<div className="flex flex-col justify-start w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
								<div className=" relative ">
									<input
										type="email"
										className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
										placeholder="Enter your email.."
									/>
								</div>
								<MotionButton btnText={'Subscribe'}></MotionButton>
							</div>
						</div>
					</form>
					<div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
						<picture>
							<img
								className=" rounded-md"
								src={newsLetter}
								alt="shopping item"
							/>
						</picture>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default NewsLetter;
