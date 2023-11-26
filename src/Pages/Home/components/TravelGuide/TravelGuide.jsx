import { useState } from 'react';
import Container from '../../../../UI/Container';
import SectionContainer from '../../../../UI/SectionContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tab.css';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Overview from './Overview/Overview';
import OurPackage from './OurPackage/OurPackage';
import TourGuide from './TourGuide/TourGuide';

const TravelGuide = () => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div>
			<SectionContainer>
				<Container>
					{/* Section Title */}
					<SectionTitle subHeading={'Travel'} heading={'Travel'}></SectionTitle>
					{/* React Tabs */}
					<Tabs
						selectedIndex={tabIndex}
						onSelect={(index) => setTabIndex(index)}
					>
						<TabList>
							<Tab>Overview</Tab>
							<Tab>Our Packages</Tab>
							<Tab>Meet Our Tour Guides</Tab>
						</TabList>
						<TabPanel>
							<Overview></Overview>
						</TabPanel>
						<TabPanel>
							<OurPackage></OurPackage>
						</TabPanel>
						<TabPanel>
							<TourGuide></TourGuide>
						</TabPanel>
					</Tabs>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default TravelGuide;
