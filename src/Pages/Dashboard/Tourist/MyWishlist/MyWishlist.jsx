import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Container from '../../../../UI/Container';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import useAuth from '../../../../Hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import nothing from '../../../../assets/Animation/nothingfound.json';
import Lottie from 'lottie-react';

const MyWishlist = () => {
	const { user } = useAuth();
	const axiosPublic = useAxiosPublic();
	const email = user?.email;

	const { data: wishlists = [], refetch } = useQuery({
		queryKey: ['Wishlist'],
		queryFn: async () => {
			const res = await axiosPublic.get(`wishlist/${email}`);
			return res.data;
		},
	});

	const handleWishlistDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await axiosPublic.delete(`/wishlist/${id}`);
				if (res.data) {
					Swal.fire({
						title: 'Deleted!',
						text: 'Deleted from wishlist!',
						icon: 'success',
					});
					refetch();
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'Something went wrong.',
						icon: 'error',
					});
				}
			}
		});
	};

	return (
		<div>
			<SectionTitle
				subHeading={'Wishlist'}
				heading={'Manage Your Wishlist'}
			></SectionTitle>

			{wishlists.length === 0 ? (
				<div className=" w-[500px] h-[500px] mx-auto">
					<Lottie animationData={nothing} />
					<div className="text-center ">
						<p className=" text-2xl font-semibold">You have no wishlist</p>
						<p>
							Click{' '}
							<Link to={'/packages'}>
								<span className=" mx-1 text-lg font-medium underline decoration-2 hover:decoration-rose-500 hover:text-green-500 transition-all duration-300">
									here
								</span>
							</Link>{' '}
							to book package or make wishlist
						</p>
					</div>
				</div>
			) : (
				<Container>
					<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
						<h2 className="mb-4 text-2xl font-semibold">
							Total wishlists: {wishlists.length}
						</h2>
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead className="dark:bg-gray-700 bg-purple-500 text-white">
									<tr className="text-center">
										<th className="p-3">#</th>
										<th className="p-3">Package Image</th>
										<th className="p-3">Package Name</th>
										<th className="p-3">Type</th>
										<th className="p-3">Price</th>
										<th className="p-3">Action</th>
									</tr>
								</thead>
								<tbody className=" text-center">
									{wishlists?.map((wishlist, index) => (
										<tr
											key={index}
											className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 bg-gray-50 text-black"
										>
											<td className="p-3">
												<p>{index + 1}</p>
											</td>
											<td className="p-3">
												<img
													className=" w-[50px] h-[50px] rounded-md mx-auto"
													src={wishlist.image}
													alt="package image"
												/>
											</td>
											<td className="p-3">
												<p>{wishlist.tripTitle}</p>
											</td>

											<td className="p-3">
												<p className="capitalize">{wishlist.tourType}</p>
											</td>
											<td className="p-3">
												<p className="capitalize">{wishlist.price} TK</p>
											</td>

											<td className="p-3 text-center">
												<div className=" space-x-2">
													{/* Pay Button */}

													<Link
														to={`/packages/${wishlist._id}`}
														className="px-3 py-1 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-md bg-green-500"
													>
														<span>See Details</span>
													</Link>

													<button
														onClick={() => handleWishlistDelete(wishlist?._id)}
														className="px-3 py-1 hover:bg-red-600 transition-all duration-300 text-white font-semibold rounded-md bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
													>
														<span>Delete</span>
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
			)}
		</div>
	);
};

export default MyWishlist;
