import TopBanner from '../../Components/TopBanner/TopBanner';
import useStory from '../../Hook/useStory';
import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import Navbar from '../Home/components/Shared/Header/Navbar';
import StoryCard from '../Home/components/TourStory/StoryCard';

const AllStory = () => {
	const [stories] = useStory();
	return (
		<>
			<Navbar route={'story'} screen={false}>
				<TopBanner bannerText={'All Story'}></TopBanner>
			</Navbar>

			<SectionContainer>
				<Container>
					<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{stories?.map((item) => (
							<StoryCard key={item._id} story={item}></StoryCard>
						))}
					</div>
				</Container>
			</SectionContainer>
		</>
	);
};

export default AllStory;
