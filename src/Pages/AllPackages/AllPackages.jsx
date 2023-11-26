import TopBanner from '../../Components/TopBanner/TopBanner';
import usePackage from '../../Hook/usePackage';
import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import Navbar from '../Home/components/Shared/Header/Navbar';
import PackageCard from '../Home/components/TravelGuide/OurPackage/PackageCard/PackageCard';

const AllPackages = () => {
	const [packages] = usePackage();
	return (
		<>
			<Navbar route={'packages'} screen={false}>
				<TopBanner bannerText={'All Package'}></TopBanner>
			</Navbar>

			<SectionContainer>
				<Container>
					<div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{packages?.map((item) => (
							<PackageCard key={item._id} packageItem={item}></PackageCard>
						))}
					</div>
				</Container>
			</SectionContainer>
		</>
	);
};

export default AllPackages;
