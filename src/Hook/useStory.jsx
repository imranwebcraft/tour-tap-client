import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
const useStory = () => {
	const axiosPublic = useAxiosPublic();
	const { data: stories = [], isLoading: loading } = useQuery({
		queryKey: ['packages'],
		queryFn: async () => {
			const res = await axiosPublic.get('/story');
			return res.data;
		},
	});
	return [stories, loading];
};

export default useStory;
