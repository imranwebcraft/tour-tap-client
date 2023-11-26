import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
const useTourGuide = () => {
	const axiosPublic = useAxiosPublic();

	const { data: tourGuides = [], isLoading: loading } = useQuery({
		queryKey: ['packages'],
		queryFn: async () => {
			const res = await axiosPublic.get('/tourGuide');
			return res.data;
		},
	});
	return [tourGuides, loading];
};

export default useTourGuide;
