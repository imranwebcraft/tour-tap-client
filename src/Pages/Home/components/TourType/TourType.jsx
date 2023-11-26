/* eslint-disable no-unused-vars */
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import SectionContainer from '../../../../UI/SectionContainer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../../../../UI/Container';
import './tourType.css';
import { useState } from 'react';

const TourType = () => {
	const tourType = ['Adventure', 'Beatch', 'Safari', 'Cultural', 'Wellness'];
	const [selectedType, setSelectedType] = useState();

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<SectionContainer>
				<SectionTitle
					heading={'Discover Your Adventure'}
					subHeading={'Explore'}
				></SectionTitle>
				<Container>
					{/* Content */}
					<div className="tourTypeBg py-40">
						<div className="px-16 text-center">
							<Slider
								{...settings}
								className=" text-white font-semibold text-lg bg-black py-10 bg-opacity-60 rounded "
							>
								{tourType?.map((item, index) => (
									<div key={index}>
										<h3
											onClick={() => setSelectedType(item)}
											className=" inline-block hover:scale-105 hover:cursor-pointer hover:text-green-500 transition-all duration-300"
										>
											{item}
										</h3>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default TourType;
