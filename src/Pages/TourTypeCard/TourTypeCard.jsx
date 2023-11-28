import TopBanner from '../../Components/TopBanner/TopBanner';
import Navbar from '../Home/components/Shared/Header/Navbar';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import SectionContainer from '../../UI/SectionContainer';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Container from '../../UI/Container';
import PackageCard from '../Home/components/TravelGuide/OurPackage/PackageCard/PackageCard';
import Lottie from 'lottie-react';
import nothingfound from '../../assets/Animation/nothingfound.json';

const TourTypeCard = () => {
	const { item } = useParams();
	const axiosPublic = useAxiosPublic();

	console.log(item);

	const { data: tourtypes = [] } = useQuery({
		queryKey: ['tour-tyoe'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/package/tour/${item}`);
			return res.data;
		},
	});

	return (
		<div>
			<Navbar route={'tourGuideDetails'} screen={false}>
				<TopBanner bannerText={`${item} Package`}></TopBanner>
			</Navbar>
			<SectionContainer>
				<SectionTitle heading={item}></SectionTitle>
				<Container>
					{tourtypes.length === 0 && (
						<div className=" text-3xl font-semibold text-center">
							<div className="w-[300px] h-[300px] mx-auto">
								<Lottie animationData={nothingfound} />
							</div>
							<p>No Package Under This Type</p>
						</div>
					)}

					<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{tourtypes?.map((packageItem) => (
							<PackageCard
								key={packageItem._id}
								packageItem={packageItem}
							></PackageCard>
						))}
					</div>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default TourTypeCard;
