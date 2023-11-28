import useAuth from '../../../../Hook/useAuth';

const TourGuideProfile = () => {
	const { user } = useAuth();
	const name = user?.displayName;

	return (
		<div>
			<div className="">
				<div className=" flex gap-10 flex-row-reverse justify-center items-center">
					<div className=" flex-1  p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-between space-x-8">
							<div className="flex flex-col items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
								>
									<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
									<rect width="32" height="48" x="240" y="16"></rect>
									<rect width="32" height="48" x="240" y="448"></rect>
									<rect width="48" height="32" x="448" y="240"></rect>
									<rect width="48" height="32" x="16" y="240"></rect>
									<rect
										width="32"
										height="45.255"
										x="400"
										y="393.373"
										transform="rotate(-45 416 416)"
									></rect>
									<rect
										width="32.001"
										height="45.255"
										x="80"
										y="73.373"
										transform="rotate(-45 96 96)"
									></rect>
									<rect
										width="45.255"
										height="32"
										x="73.373"
										y="400"
										transform="rotate(-45.001 96.002 416.003)"
									></rect>
									<rect
										width="45.255"
										height="32.001"
										x="393.373"
										y="80"
										transform="rotate(-45 416 96)"
									></rect>
								</svg>
								<h1 className="text-xl font-semibold">Banngladesh</h1>
							</div>
							<span className="font-bold text-8xl">14°</span>
						</div>
						<div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
							<div className="flex flex-col items-center space-y-1">
								<span className="uppercase">wed</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-8 h-8 fill-current"
								>
									<path d="M398.2,137.208a144.013,144.013,0,0,0-284.545.979,122.364,122.364,0,0,0-64.357,32.926A109.4,109.4,0,0,0,16,249.619c0,31.119,12.789,60.762,36.01,83.469q2.84,2.776,5.845,5.347l11.327-33.981C56.091,289.3,48,270.017,48,249.619c0-42.362,35.724-78.015,81.329-81.168l14.055-.972.814-14.065a111.995,111.995,0,0,1,223.589-.22l.891,14.888,14.913.155c46.592.488,80.409,34.714,80.409,81.382,0,33.152-16.706,61.38-41.84,75.9L409.032,364.9a110.012,110.012,0,0,0,54.938-32.358C484.625,310.339,496,280.889,496,249.619,496,190.507,454.859,144.4,398.2,137.208Z"></path>
									<polygon points="126.029 496 159.817 496 223.153 309.136 192.847 298.864 126.029 496"></polygon>
									<polygon points="294.029 496 327.817 496 391.153 309.136 360.847 298.864 294.029 496"></polygon>
									<polygon points="290.11 251.033 225.781 448 259.445 448 320.529 260.967 290.11 251.033"></polygon>
									<polygon points="128.791 251.033 64.461 448 98.125 448 159.209 260.967 128.791 251.033"></polygon>
								</svg>
								<span>11°</span>
							</div>
							<div className="flex flex-col items-center space-y-1">
								<span className="uppercase">thu</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-8 h-8 fill-current"
								>
									<path d="M382.76,432H136c-30.732,0-61.371-12.725-84.061-34.912-23.221-22.707-36.009-52.35-36.009-83.469A109.4,109.4,0,0,1,49.136,235.2a122.281,122.281,0,0,1,62.794-32.707V200c0-79.4,64.6-144,144-144s144,64.6,144,144v1.453c55.716,7.939,96,53.729,96,112.166,0,31.27-11.375,60.72-32.031,82.927A109.747,109.747,0,0,1,382.76,432ZM255.93,88a112.127,112.127,0,0,0-112,112v31.405l-14.864,1.059c-45.5,3.239-81.136,38.887-81.136,81.155C47.93,359.635,89.084,400,136,400H382.76c45.515,0,81.17-37.943,81.17-86.381,0-46.566-33.731-80.791-80.2-81.379l-15.8-.2V200A112.127,112.127,0,0,0,255.93,88Z"></path>
								</svg>
								<span>17°</span>
							</div>
							<div className="flex flex-col items-center space-y-1">
								<span className="uppercase">fri</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-8 h-8 fill-current"
								>
									<path d="M399.667,264.875v-3.813c0-79.4-64.6-144-144-144-2.2,0-4.391.057-6.569.156A116.689,116.689,0,1,0,112.315,247.444c-.422,4.484-.648,9.025-.648,13.618v3.813A116.633,116.633,0,0,0,132.287,496.3H379.046a116.633,116.633,0,0,0,20.621-231.427ZM48.75,132.688a84.677,84.677,0,0,1,168.705-10.47,144.606,144.606,0,0,0-98.59,93.876A84.807,84.807,0,0,1,48.75,132.688ZM379.046,464.3H132.287a84.619,84.619,0,0,1-3.9-169.148l15.277-.69v-33.4a112,112,0,1,1,224,0v33.4l15.277.69a84.619,84.619,0,0,1-3.9,169.148Z"></path>
								</svg>
								<span>8°</span>
							</div>
							<div className="flex flex-col items-center space-y-1">
								<span className="uppercase">sat</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-8 h-8 fill-current"
								>
									<polygon points="135.279 206.728 224.136 258.323 144.097 304.797 48.308 279.129 48.308 312.259 123.155 332.313 102.99 407.571 131.68 424.135 155.518 335.169 240 286.115 240 374.402 168.823 445.579 197.513 462.144 258 401.657 317.135 460.792 345.826 444.228 272 370.402 272 286.115 355.002 334.31 379.279 424.914 407.97 408.349 387.596 332.313 464 311.841 464 278.712 367.508 304.567 287.864 258.323 376.327 206.957 464 230.449 464 197.32 394.346 178.657 413.576 106.888 384.886 90.323 361.196 178.739 272 230.53 272 130.568 338.833 63.735 310.143 47.171 254.971 102.343 200.664 48.037 171.974 64.601 240 132.627 240 230.53 149.325 177.88 126.073 91.103 97.382 107.667 116.404 178.657 48.308 196.903 48.308 230.032 135.279 206.728"></polygon>
								</svg>
								<span>-2°</span>
							</div>
							<div className="flex flex-col items-center space-y-1">
								<span className="uppercase">sun</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="w-8 h-8 fill-current"
								>
									<path d="M382.76,432H136c-30.732,0-61.371-12.725-84.061-34.912-23.221-22.707-36.009-52.35-36.009-83.469A109.4,109.4,0,0,1,49.136,235.2a122.281,122.281,0,0,1,62.794-32.707V200c0-79.4,64.6-144,144-144s144,64.6,144,144v1.453c55.716,7.939,96,53.729,96,112.166,0,31.27-11.375,60.72-32.031,82.927A109.747,109.747,0,0,1,382.76,432ZM255.93,88a112.127,112.127,0,0,0-112,112v31.405l-14.864,1.059c-45.5,3.239-81.136,38.887-81.136,81.155C47.93,359.635,89.084,400,136,400H382.76c45.515,0,81.17-37.943,81.17-86.381,0-46.566-33.731-80.791-80.2-81.379l-15.8-.2V200A112.127,112.127,0,0,0,255.93,88Z"></path>
								</svg>
								<span>4°</span>
							</div>
						</div>
					</div>
					<div>
						<p className=" mb-2 flex-1 text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-400  to-pink-500">
							Welcome to Your Dahboard
						</p>
						<p className=" text-4xl mb-1 font-semibold">
							Welcome {name ? name : 'Back'}
						</p>
						<p className=" text-lg max-w-3xl">
							Congratulations on being a part of our community of exceptional
							Tour Guides! This dashboard is your central hub for managing your
							tours, connecting with travelers, and staying organized.Stay
							informed about the feedback from travelers. Positive reviews can
							boost your credibility, while constructive criticism helps you
							enhance your services.
						</p>
					</div>
				</div>

				{/* Profile */}

				<div className=" w-full mx-auto flex flex-col justify-center items-center">
					<img alt="eggs" src={user?.photoURL} className="rounded-lg" />
					<div className=" text-center">
						<h1 className="text-3xl font-bold">
							{user?.displayName ? user?.displayName : 'Back'}
						</h1>
						<p className="text-lg">{user?.email ? user?.email : 'Back'}</p>
					</div>
				</div>

				{/* Story add form */}
				{/* 
				<SectionContainer>
					<SectionTitle
						heading={'Share Your Story'}
						subHeading={'Your Story'}
					></SectionTitle>
				</SectionContainer> */}
			</div>
		</div>
	);
};

export default TourGuideProfile;
