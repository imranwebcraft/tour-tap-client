import { Link } from 'react-router-dom';
import MotionButton from '../../Components/MotionButton/MotionButton';

const TourGuideSmallCard = ({ tourGuide }) => {
	const { _id, name, image, email } = tourGuide || {};

	return (
		<div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-10">
			<div className="flex-row gap-4 flex justify-center items-center">
				<div className="flex-shrink-0">
					<img
						alt="profil"
						src={image}
						className="mx-auto object-cover rounded-full h-16 w-16 "
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-lg font-medium text-gray-600 dark:text-white">
						{name}
					</span>
					<span className="text-xs text-gray-400">{email}</span>
				</div>
				<Link to={`/tourguide/${_id}`}>
					<MotionButton btnText={'Details'}></MotionButton>
				</Link>
			</div>
		</div>
	);
};

export default TourGuideSmallCard;
