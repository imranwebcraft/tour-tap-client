import { useState } from 'react';
import MotionButton from '../../../../../../Components/MotionButton/MotionButton';
import { FaRegHeart } from 'react-icons/fa6';
const PackageCard = ({ packageItem }) => {
	const [wishlist, setWishlist] = useState(false);

	// Sate to manage show all button
	const { image, tourType, tripTitle, price } = packageItem || {};

	return (
		<section className="group tracking-wide">
			<div className="mx-auto flex flex-col h-full overflow-hidden  justify-center bg-white rounded-2xl shadow-md shadow-gray-400/20 group-hover:shadow-lg transition-all duration-300">
				<div className=" relative mb-2">
					<img
						className="aspect-video  rounded-t-2xl object-cover object-center group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
						src={image}
						alt={tripTitle}
					/>
					<span className=" absolute right-2 top-2 hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-md">
						<FaRegHeart
							onClick={() => setWishlist(!wishlist)}
							className={`text-3xl  rounded-md  px-2 py-0.5
							${wishlist ? 'bg-rose-500 text-white' : 'text-rose-500 bg-white'}
							transition-all duration-300
							`}
						/>
					</span>
				</div>
				<div className="px-6 space-y-1">
					<small className="text-xs text-white bg-rose-500 px-2 py-0.5 bg-opacity-90 backdrop-blur-md rounded">
						{tourType}
					</small>
					<h1 className="text-2xl font-medium text-gray-900">{tripTitle}</h1>
					<p>
						From <span className=" font-bold text-orange-500">$ {price}</span>
					</p>
				</div>
				<div className="mt-auto p-6">
					<MotionButton btnText={'View Package'} btnBlock={true} />
				</div>
			</div>
		</section>
	);
};

export default PackageCard;
