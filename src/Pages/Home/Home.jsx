import Banner from './components/Banner';
import Navbar from './components/Shared/Header/Navbar';
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
		</div>
	);
};

export default Home;
