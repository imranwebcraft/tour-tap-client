import MotionButton from '../../../../../../Components/MotionButton/MotionButton';

const PackageCard = ({ packageItem }) => {
	// Sate to manage show all button

	const { image, tourType, tripTitle, price } = packageItem || {};

	return (
		<section>
			<div className="mx-auto flex flex-col h-full overflow-hidden  justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
				<div>
					<img
						className="aspect-video  rounded-t-2xl object-cover object-center"
						src={image}
						alt={tripTitle}
					/>
				</div>
				<div className="px-6 mt-2">
					<small className="text-xs text-white bg-rose-500 px-2 py-0.5 bg-opacity-90 backdrop-blur-md rounded">
						{tourType}
					</small>
					<h1 className="text-2xl font-medium text-gray-700 pb-2">
						{tripTitle}
					</h1>
					<p>$ {price}</p>
				</div>
				<div className="mt-auto p-6">
					<MotionButton btnText={'View Package'} btnBlock={true} />
				</div>
			</div>
		</section>
	);
};

export default PackageCard;
