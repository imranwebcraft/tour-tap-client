import ShareButtons from './ShareButtons';
import { FaShareAlt } from 'react-icons/fa';
const StoryDetailsContent = ({ story }) => {
	const shareUrl = 'https://your-website.com';
	const title = 'Check out this amazing content!';
	return (
		<article className="group">
			<img
				alt="Lava"
				src={story.image}
				className="h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
			/>
			<header className="mb-4 flex gap-4 mt-4">
				<a
					href="#"
					className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
				>
					<img
						src={story.authorImage}
						alt="user name"
						title="user name"
						className="rounded-full h-[50px] w-[70px]"
					/>
				</a>
				<div>
					<h3 className="text-xl font-medium text-slate-700">
						{/* Todo: Story Title will goes here */}
						{story.title ? story.title : 'No Title'}
					</h3>
					<p className="text-sm text-slate-400">{story.authorName}</p>
				</div>
			</header>
			<div className="bg-white mt-4">
				<time dateTime="2022-10-10" className="block text-xs text-gray-500">
					{story.date}
				</time>

				<p className="mt-2 text-sm/relaxed text-gray-500">
					{story.storyDetails}
				</p>
			</div>
			{/* Share Link */}
			<div className=" mt-10">
				<p
					className=" text-2xl font-semibold text-center flex justify-center items-center gap-2
                "
				>
					Share with your friends{' '}
					<FaShareAlt className=" text-lg text-blue-500"></FaShareAlt>
				</p>
			</div>
			<ShareButtons url={shareUrl} title={title} />
		</article>
	);
};

export default StoryDetailsContent;
