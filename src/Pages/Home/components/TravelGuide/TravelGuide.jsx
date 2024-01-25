import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Container from "../../../../UI/Container";
import SectionContainer from "../../../../UI/SectionContainer";
import OurPackage from "./OurPackage/OurPackage";
import Overview from "./Overview/Overview";
import TourGuide from "./TourGuide/TourGuide";
import "./tab.css";

const TravelGuide = () => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div className=" container mx-auto">
			<SectionContainer>
				{/* Section Title */}
				<SectionTitle subHeading={"Travel"} heading={"Travel"}></SectionTitle>
				{/* React Tabs */}
				<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList>
						<Tab>Overview</Tab>
						<Tab>Packages</Tab>
						<Tab>Tour Guides</Tab>
					</TabList>
					<Container>
						<TabPanel>
							<Overview></Overview>
						</TabPanel>
						<TabPanel>
							<OurPackage></OurPackage>
						</TabPanel>
						<TabPanel>
							<TourGuide></TourGuide>
						</TabPanel>
					</Container>
				</Tabs>
			</SectionContainer>
		</div>
	);
};

export default TravelGuide;
