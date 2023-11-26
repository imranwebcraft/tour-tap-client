/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import MotionButton from '../../../../../Components/MotionButton/MotionButton';
import { HiOutlineMail } from 'react-icons/hi';
const TourGuideCard = ({ tourGuide }) => {
	const { _id, name, image, email, education, skills, workExperience } =
		tourGuide || {};

	return (
		<div className=" group">
			<div className=" bg-white shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300 rounded-xl dark:bg-gray-800">
				<img
					alt="profil"
					src={image}
					className="w-full mb-4 rounded-t-lg h-28"
				/>
				<div className="flex flex-col items-center justify-center p-4 -mt-16">
					<img
						src={image}
						alt="profil"
						className="mx-auto object-cover rounded-full h-16 w-16 "
					/>
					<p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
						{name}
					</p>
					<p className="flex items-center text-xs gap-1 text-gray-400">
						<HiOutlineMail className=" text-lg" />
						{email}
					</p>
					<Link
						to={`tourGuide/${_id}`}
						className="flex items-center justify-between w-full gap-4 mt-8"
					>
						<MotionButton
							btnText={'See Profile'}
							btnBlock={true}
						></MotionButton>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TourGuideCard;
