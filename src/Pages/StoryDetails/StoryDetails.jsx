import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import Navbar from '../Home/components/Shared/Header/Navbar';
import TopBanner from '../../Components/TopBanner/TopBanner';
import SectionContainer from '../../UI/SectionContainer';
import Container from '../../UI/Container';
import StoryDetailsContent from './StoryDetailsContent';

const StoryDetails = () => {
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();

	const { data: singleStory = {} } = useQuery({
		queryKey: ['story'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/story/${id}`);
			return res.data;
		},
	});

	console.log(singleStory);

	return (
		<div>
			<Navbar route={'story-details'} screen={false}>
				<TopBanner bannerText={'Story Details'}></TopBanner>
			</Navbar>
			<SectionContainer>
				<Container>
					<StoryDetailsContent story={singleStory}></StoryDetailsContent>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default StoryDetails;
