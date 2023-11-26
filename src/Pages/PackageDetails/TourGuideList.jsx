import useTourGuide from '../../Hook/useTourGuide';
import TourGuideSmallCard from './TourGuideSmallCard';

const TourGuideList = () => {
	const [tourGuides] = useTourGuide();

	return (
		<>
			<p className=" text-2xl font-semibold mb-2">Tour Guide</p>
			<div className=" flex overflow-x-auto gap-5 p-5">
				{tourGuides.map((tourGuide) => (
					<TourGuideSmallCard
						key={tourGuide._id}
						tourGuide={tourGuide}
					></TourGuideSmallCard>
				))}
			</div>
		</>
	);
};

export default TourGuideList;
