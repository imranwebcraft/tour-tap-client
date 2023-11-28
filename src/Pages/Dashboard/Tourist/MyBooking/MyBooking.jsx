/* eslint-disable no-unused-vars */
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Container from '../../../../UI/Container';
import useBookings from '../../../../Hook/useBookings';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyBooking = () => {
	const [bookings, refetch] = useBookings();
	const axiosPublic = useAxiosPublic();

	const handleBookingCancel = async (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Do you really want to cancel?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await axiosPublic.delete(`/book-package/${id}`);
				if (res?.data) {
					Swal.fire({
						title: 'Deleted!',
						text: 'Booking cancelled Successfully',
						icon: 'success',
					});
					refetch();
				} else {
					toast.error('Something went wrong');
				}
			}
		});
	};

	return (
		<div>
			<SectionTitle
				subHeading={'Bookings'}
				heading={'Manage Your Bookings'}
			></SectionTitle>

			<Container>
				<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
					<h2 className="mb-4 text-2xl font-semibold">
						Total bookings: {bookings.length}
					</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead className="dark:bg-gray-700 bg-purple-500 text-white">
								<tr className="text-center">
									<th className="p-3">#</th>
									<th className="p-3">Package Name</th>
									<th className="p-3">Tour Guide</th>
									<th className="p-3">Date</th>
									<th className="p-3">Price</th>
									<th className="p-3">Status</th>
									<th className="p-3">Action</th>
								</tr>
							</thead>
							<tbody className=" text-center">
								{bookings?.map((booking, index) => (
									<tr
										key={index}
										className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 bg-gray-50 text-black"
									>
										<td className="p-3">
											<p>{index + 1}</p>
										</td>
										<td className="p-3">
											<p>{booking?.tripTitle}</p>
										</td>
										<td className="p-3">
											<p>
												{booking?.tourGuideName
													? booking?.tourGuideName
													: 'Not Given'}
											</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{booking?.date}</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{booking?.price} TK</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{booking?.status}</p>
										</td>
										<td className="p-3 text-left">
											<div className=" space-x-2">
												{/* Pay Button */}
												{booking?.status === 'Accepted' && (
													<button className="px-3 py-1 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-md bg-green-500">
														<span>Pay</span>
													</button>
												)}

												{booking?.status === 'In review' && (
													<button
														onClick={() => handleBookingCancel(booking._id)}
														className="px-3 py-1 hover:bg-red-600 transition-all duration-300 text-white font-semibold rounded-md bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
													>
														<span>Cancel</span>
													</button>
												)}
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

export default MyBooking;
