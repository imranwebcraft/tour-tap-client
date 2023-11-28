import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useBookings = () => {
	const { user, loading } = useAuth();
	const axiosPublic = useAxiosPublic();
	const email = user.email;

	const { data: bookings = [], refetch } = useQuery({
		queryKey: ['bookings'],
		queryFn: async () => {
			console.log(email);
			const res = await axiosPublic.get(`/book-package/${email}`);
			return res.data;
		},
	});

	return [bookings, refetch];
};

export default useBookings;
