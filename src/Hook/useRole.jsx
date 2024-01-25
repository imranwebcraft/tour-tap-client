import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
const useRole = () => {
	const { user } = useAuth();
	const axiosPublic = useAxiosPublic();
	const email = user?.email;

	const { data: role } = useQuery({
		queryKey: ["role"],
		queryFn: async () => {
			const res = await axiosPublic.get(`users/${email}`);
			return res.data;
		},
	});
	return [role];
};

export default useRole;
