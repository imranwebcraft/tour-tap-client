import MotionButton from '../../../../Components/MotionButton/MotionButton';

const StoryCard = ({ story }) => {
	return (
		<div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
			<div className="grid gap-5">
				<div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
					<div>
						<img
							src={story?.image}
							className="object-cover w-full h-64 rounded"
						/>
					</div>
					<div className="py-5 px-5">
						<p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
							{story?.date}
						</p>
						<a className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
							{/* TODO: Add strory title here */}
							<p className="text-2xl font-bold leading-5">Diving to the deep</p>
						</a>
						<div>
							<figure className="inline-block">
								<img
									src={story?.authorImage}
									className="object-cover w-10 h-10 rounded-full shadow-sm"
								/>
							</figure>
							<div>
								<p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
									{story?.authorName}
								</p>
								<p className="text-sm font-medium leading-4 text-gray-600">
									Author
								</p>
							</div>
						</div>
						<p className="mt-4 text-gray-700">
							{story?.storyDetails?.slice(0, 200)}...
						</p>
						<div className=" mt-3">
							<MotionButton
								btnBlock={true}
								btnText={'Read more...'}
							></MotionButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
