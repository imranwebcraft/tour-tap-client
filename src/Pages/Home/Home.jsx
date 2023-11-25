import Banner from './components/Banner';
import Navbar from './components/Shared/Header/Navbar';
import TravelGuide from './components/TravelGuide/TravelGuide';

const Home = () => {
	return (
		<div>
			<Navbar screen={true}>
				<Banner></Banner>
			</Navbar>
			<TravelGuide></TravelGuide>
		</div>
	);
};

export default Home;
