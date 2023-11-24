import Banner from './components/Banner';
import Navbar from './components/Shared/Header/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar screen={true}>
				<Banner></Banner>
			</Navbar>
		</div>
	);
};

export default Home;
