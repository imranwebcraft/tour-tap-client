/* eslint-disable react/no-unescaped-entities */
const Steps = () => {
	return (
		<div className="mx-auto">
			<div className="grid max-w-2xl">
				<div className="flex">
					<div className="flex flex-col items-center mr-6">
						<div className="w-px h-10 opacity-0 sm:h-full" />
						<div>
							<div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
								1
							</div>
						</div>
						<div className="w-px h-full bg-gray-300" />
					</div>
					<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
						<div className="sm:mr-5">
							<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
								<svg
									className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</div>
						<div>
							<p className="text-xl font-semibold sm:text-base">
								Discover Hidden Gems
							</p>
							<p className="text-sm text-gray-700">
								Uncover the lesser-known wonders of Place. Take a stroll through
								charming neighborhoods, visit local markets, and connect with
								the heart of the city.
							</p>
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col items-center mr-6">
						<div className="w-px h-10 bg-gray-300 sm:h-full" />
						<div>
							<div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
								2
							</div>
						</div>
						<div className="w-px h-full bg-gray-300" />
					</div>
					<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
						<div className="sm:mr-5">
							<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
								<svg
									className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</div>
						<div>
							<p className="text-xl font-semibold sm:text-base">
								Plan Your Adventures
							</p>
							<p className="text-sm text-gray-700">
								Choose from a myriad of exciting activities based on your
								interests. Whether you're an adventure seeker, history buff, or
								foodie, there's something for everyone. Use our interactive map
								to plan your itinerary.
							</p>
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col items-center mr-6">
						<div className="w-px h-10 bg-gray-300 sm:h-full" />
						<div>
							<div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
								3
							</div>
						</div>
						<div className="w-px h-full opacity-0" />
					</div>
					<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
						<div className="sm:mr-5">
							<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
								<svg
									className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
						</div>
						<div>
							<p className="text-xl font-semibold sm:text-base">
								Immerse in Local Culture
							</p>
							<p className="text-sm text-gray-700">
								Immerse yourself in the rich cultural tapestry of [Your
								Destination]. Attend local events, try authentic cuisine, and
								engage with the warm and welcoming local community.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Steps;
