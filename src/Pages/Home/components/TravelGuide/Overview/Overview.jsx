import Slider from './Slider';
import Video from './Video';
import Weather from './Weather';
import './overview.css';
import Steps from './steps';

const Overview = () => {
	return (
		<div className="space-y-10 flex flex-col-reverse gap-5">
			<div>
				<div className="flex flex-col lg:flex-row gap-10">
					{/* Video */}
					<div className=" hidden lg:block">
						<Video></Video>
					</div>
					{/* Steps */}
					<Steps></Steps>
				</div>
				{/* Weather */}
				<Weather></Weather>
			</div>
			<div>
				{/* Slider */}
				<Slider></Slider>
			</div>
		</div>
	);
};

export default Overview;
