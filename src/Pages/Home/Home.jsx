import Banner from './components/Banner';
import Navbar from './components/Shared/Header/Navbar';
import TourStory from './components/TourStory/TourStory';
import TourType from './components/TourType/TourType';
import TravelGuide from './components/TravelGuide/TravelGuide';

const Home = () => {
	return (
		<div>
			<Navbar screen={true}>
				<Banner></Banner>
			</Navbar>
			<TravelGuide></TravelGuide>
			<TourType></TourType>
			<TourStory></TourStory>
		</div>
	);
};

export default Home;
