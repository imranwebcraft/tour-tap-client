import SectionTitle from '../../../../../Components/SectionTitle/SectionTitle';
import usePackage from '../../../../../Hook/usePackage';
import PackageCard from './PackageCard/PackageCard';
import MotionButton from '../../../../../Components/MotionButton/MotionButton';
import { Link } from 'react-router-dom';

const OurPackage = () => {
	const [packages] = usePackage();

	return (
		<>
			<div className=" mt-5">
				<SectionTitle heading={'Popular Destination'}></SectionTitle>
				<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{packages?.slice(0, 3).map((item) => (
						<PackageCard key={item._id} packageItem={item}></PackageCard>
					))}
				</div>
			</div>
			<Link>
				<div className=" flex w-full justify-center items-center mt-10">
					<MotionButton btnText={'All Package'}></MotionButton>
				</div>
			</Link>
		</>
	);
};

export default OurPackage;
