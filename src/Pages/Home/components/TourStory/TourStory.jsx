import { Link } from 'react-router-dom';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useStory from '../../../../Hook/useStory';
import Container from '../../../../UI/Container';
import SectionContainer from '../../../../UI/SectionContainer';
import StoryCard from './StoryCard';
import MotionButton from '../../../../Components/MotionButton/MotionButton';

const TourStory = () => {
	const [stories] = useStory();

	return (
		<div>
			<SectionContainer>
				<SectionTitle
					heading={'Explore Captivating Journeys'}
					subHeading={'Chronicles'}
				></SectionTitle>
				<Container>
					{/* Story Card */}
					<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{stories?.slice(0, 3).map((story) => (
							<StoryCard key={story._id} story={story}></StoryCard>
						))}
					</div>
				</Container>
				<Link to={'/stories'}>
					<div className=" flex w-full justify-center items-center mt-10">
						<MotionButton btnText={'Read More Story'}></MotionButton>
					</div>
				</Link>
			</SectionContainer>
		</div>
	);
};

export default TourStory;
