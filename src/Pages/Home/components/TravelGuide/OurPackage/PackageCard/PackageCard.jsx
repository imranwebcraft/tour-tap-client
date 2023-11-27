import { useState } from 'react';
import MotionButton from '../../../../../../Components/MotionButton/MotionButton';
import { FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useAuth from '../../../../../../Hook/useAuth';
import useAxiosPublic from '../../../../../../Hook/useAxiosPublic';
import { toast } from 'react-hot-toast';

const PackageCard = ({ packageItem }) => {
	const axiosPublic = useAxiosPublic();
	const [wishlist, setWishlist] = useState(false);
	const { user } = useAuth();

	// Sate to manage show all button
	const { _id, image, tourType, tripTitle, price, tourDetails } =
		packageItem || {};

	const handleWishlist = async () => {
		if (!wishlist) {
			console.log('Wishlist true');
			const wishlistData = {
				email: user?.email,
				image: image,
				tourType: tourType,
				tripTitle: tripTitle,
				price: price,
				tourDetails: tourDetails,
			};
			await axiosPublic
				.post('/save-wishlist', wishlistData)
				.then(() => {
					toast.success('Added to wishlist');
					setWishlist(true);
				})
				.catch((err) => {
					console.log(err.message);
				});

			setWishlist(true);
		} else {
			toast.error('Already added to wishlist');
		}
	};

	return (
		<section className="group tracking-wide">
			<Tooltip
				id="my-tooltip"
				style={{ backgroundColor: 'rgba(244, 63, 94, 0.9)', color: 'white' }}
			/>
			<div className="mx-auto flex flex-col h-full overflow-hidden  justify-center bg-white rounded-2xl shadow-md shadow-gray-400/20 group-hover:shadow-lg transition-all duration-300">
				<div className=" relative mb-2">
					<img
						className="aspect-video  rounded-t-2xl object-cover object-center group-hover:scale-105 transition-all duration-300"
						src={image}
						alt={tripTitle}
					/>
					<span
						onClick={handleWishlist}
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Add To Wishlist"
						className=" absolute right-2 top-2 hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-md"
					>
						<FaRegHeart
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
				<Link to={`/packages/${_id}`} className="mt-auto p-6">
					<MotionButton btnText={'View Package'} btnBlock={true} />
				</Link>
			</div>
		</section>
	);
};

export default PackageCard;
