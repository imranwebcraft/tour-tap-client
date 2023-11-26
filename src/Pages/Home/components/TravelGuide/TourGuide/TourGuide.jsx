import SectionTitle from '../../../../../Components/SectionTitle/SectionTitle';
import useTourGuide from '../../../../../Hook/useTourGuide';
import TourGuideCard from './TourGuideCard';

const TourGuide = () => {
	const [tourGuides] = useTourGuide();
	console.log(tourGuides);
	return (
		<div>
			<div className=" mt-5">
				<SectionTitle heading={'Meet Our Expert Guides'}></SectionTitle>
			</div>
			<div className=" grid gap-5 grid-cols-1 md:grid-cols-5">
				{tourGuides?.map((tourGuide) => (
					<TourGuideCard
						key={tourGuide._id}
						tourGuide={tourGuide}
					></TourGuideCard>
				))}
			</div>
		</div>
	);
};

export default TourGuide;
