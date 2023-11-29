import Banner from './components/Banner';
import CountDown from './components/Countdown/CountDown';
import Download from './components/Download/Download';
import NewsLetter from './components/NewsLetter/NewsLetter';
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
			<CountDown></CountDown>
			<TravelGuide></TravelGuide>
			<TourType></TourType>
			<TourStory></TourStory>
			<NewsLetter></NewsLetter>
			<Download></Download>
		</div>
	);
};

export default Home;
