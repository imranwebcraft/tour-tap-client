const Gallery = () => {
	return (
		<section className="py-6 dark:bg-gray-800">
			<h1 className=" text-4xl font-semibold text-center">Gallery</h1>
			<div className="flex flex-col justify-center p-4 mx-auto">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
					<img
						className="object-cover w-full dark:bg-gray-500 aspect-square"
						src="https://source.unsplash.com/random/300x300/?1"
					/>
					<img
						className="object-cover w-full dark:bg-gray-500 aspect-square"
						src="https://source.unsplash.com/random/300x300/?2"
					/>
					<img
						className="object-cover w-full dark:bg-gray-500 aspect-square"
						src="https://source.unsplash.com/random/300x300/?3"
					/>
					<img
						className="object-cover w-full dark:bg-gray-500 aspect-square"
						src="https://source.unsplash.com/random/300x300/?4"
					/>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
