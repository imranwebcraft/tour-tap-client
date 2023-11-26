import TopBanner from '../../Components/TopBanner/TopBanner';
import Navbar from '../Home/components/Shared/Header/Navbar';
import Gallery from './Gallery';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import TourPlan from './TourPlan';
import TourGuideList from './TourGuideList';
const PackageDetails = () => {
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();
	console.log(id);

	const { data: singlePackage } = useQuery({
		queryKey: ['package'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/package/${id}`);
			return res.data;
		},
	});

	console.log(singlePackage);
	const { image, tourType, tripTitle, price, tourDetails } =
		singlePackage || {};

	return (
		<div>
			<Navbar route={'packages'} screen={false}>
				<TopBanner bannerText={'Package Details'}></TopBanner>
			</Navbar>
			{/* Gallery */}
			<Gallery></Gallery>
			{/* Package Details */}
			<SectionContainer>
				<Container>
					<div className="flex gap-5">
						{/* Details */}
						<div className=" w-1/2 tracking-wide">
							<div>
								<img
									className=" w-full h-full rounded-md"
									src={image}
									alt="package-image"
								/>
							</div>
							<h1 className=" text-3xl font-semibold my-2">Details</h1>
							<div className=" space-y-2">
								<div className=" text-lg font-medium">
									TourTyupe: <span>{tourType}</span>
								</div>
								<div className=" text-lg font-medium">
									Trip Title: <span>{tripTitle}</span>
								</div>
								<div className=" text-lg font-medium">
									Price: $<span>{price}</span>
								</div>
							</div>
							<div className=" mt-4">
								<span className=" text-gray-700 tracking-wide">
									{tourDetails}
								</span>
							</div>
						</div>
						{/* Accordion */}
						<div className=" w-1/2">
							<TourPlan></TourPlan>
							<TourGuideList></TourGuideList>
						</div>
					</div>
					{/* Booking Form */}
				</Container>
			</SectionContainer>
		</div>
	);
};

export default PackageDetails;
