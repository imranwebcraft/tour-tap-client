/* eslint-disable no-unused-vars */
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useAuth from '../../../../Hook/useAuth';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import Container from '../../../../UI/Container';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const MyAssignedTour = () => {
	const axiosPublic = useAxiosPublic();
	const { user } = useAuth();
	const name = user?.displayName;

	const { data: works = [], refetch } = useQuery({
		queryKey: ['works'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/book-package/name/${name}`);
			return res.data;
		},
	});

	const handleAccept = async (work) => {
		const status = { status: 'Accepted' };
		const res = await axiosPublic.patch(`/book-package/${work._id}`, status);
		if (res?.data) {
			toast.success(`You accept ${work.touristName}'s bookings`);
		} else {
			toast.error('Something went wrong');
		}
	};

	const handleReject = async (work) => {
		const status = { status: 'Rejected' };
		const res = await axiosPublic.patch(`/book-package/${work._id}`, status);
		if (res?.data) {
			toast.success(`You Reject ${work.touristName}'s bookings`);
		} else {
			toast.error('Something went wrong');
		}
	};

	return (
		<div>
			<SectionTitle
				heading={'Make Your Guide Profile'}
				subHeading={'Add Profile'}
			></SectionTitle>
			<Container>
				<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
					<h2 className="mb-4 text-2xl font-semibold">
						Total Assigned Works: {works.length}
					</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead className="dark:bg-gray-700 bg-purple-500 text-white">
								<tr className="text-center">
									<th className="p-3">#</th>
									<th className="p-3">Package Name</th>
									<th className="p-3">Tourist Name</th>
									<th className="p-3">Date</th>
									<th className="p-3">Price</th>
									<th className="p-3">Action</th>
								</tr>
							</thead>
							<tbody className=" text-center">
								{works?.map((work, index) => (
									<tr
										key={index}
										className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 bg-gray-50 text-black"
									>
										<td className="p-3">
											<p>{index + 1}</p>
										</td>
										<td className="p-3">
											<p>{work?.tripTitle}</p>
										</td>
										<td className="p-3">
											<p>
												{work?.touristName ? work?.touristName : 'Not Given'}
											</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{work?.date}</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{work?.price} TK</p>
										</td>
										<td className="p-3 text-center">
											<div className=" space-x-2">
												{/* Pay Button */}
												<button
													onClick={() => handleAccept(work)}
													className="px-3 py-1 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-md bg-green-500"
												>
													<span>Accept</span>
												</button>

												<button
													onClick={() => handleReject(work)}
													className="px-3 py-1 hover:bg-red-600 transition-all duration-300 text-white font-semibold rounded-md bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
												>
													<span>Reject</span>
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default MyAssignedTour;
