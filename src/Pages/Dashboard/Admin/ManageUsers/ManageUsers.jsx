import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import Container from '../../../../UI/Container';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const ManageUsers = () => {
	const [disabledButtons, setDisabledButtons] = useState({});

	const axiosSecure = useAxiosSecure();
	// Fetch all users
	const { data: users = [], refetch } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure.get('/users');
			return res.data;
		},
	});

	// Make admin events handler
	const handleMakeAdmin = async (id) => {
		const role = { role: 'admin' };
		console.log(id, role);
		setDisabledButtons((prevButtons) => ({ ...prevButtons, [id]: true }));
		const res = await axiosSecure.patch(`/users/${id}`, role);
		if (res?.data) {
			toast.success('User role updated successfully');
			refetch();
		} else {
			toast.error('Something went wrong');
			setDisabledButtons((prevButtons) => ({ ...prevButtons, [id]: false }));
		}
	};

	// Make Tour Guide events handler
	const handleMakeTourGuide = async (id) => {
		const role = { role: 'tourGuide' };
		console.log(id, role);
		setDisabledButtons((prevButtons) => ({ ...prevButtons, [id]: true }));
		const res = await axiosSecure.patch(`/users/${id}`, role);
		if (res?.data) {
			toast.success('User role updated successfully');
			refetch();
		} else {
			toast.error('Something went wrong');
			setDisabledButtons((prevButtons) => ({ ...prevButtons, [id]: false }));
		}
	};

	return (
		<div>
			<SectionTitle
				subHeading={'Users'}
				heading={'Manage All Users'}
			></SectionTitle>

			<Container>
				<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
					<h2 className="mb-4 text-2xl font-semibold">
						Total Users: {users.length}
					</h2>
					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead className="dark:bg-gray-700 bg-purple-500 text-white">
								<tr className="text-center">
									<th className="p-3">#</th>
									<th className="p-3">Name</th>
									<th className="p-3">Emai</th>
									<th className="p-3">Role</th>
									<th className="p-3">Action</th>
								</tr>
							</thead>
							<tbody className=" text-center">
								{users?.map((user, index) => (
									<tr
										key={index}
										className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 bg-gray-50 text-black"
									>
										<td className="p-3">
											<p>{index + 1}</p>
										</td>
										<td className="p-3">
											<p>{user.name}</p>
										</td>
										<td className="p-3">
											<p>{user.email}</p>
										</td>
										<td className="p-3">
											<p className="capitalize">{user.role}</p>
										</td>
										<td className="p-3 text-center">
											<div className=" space-x-2">
												{/* Make admin */}
												<button
													onClick={() => handleMakeAdmin(user._id)}
													className="px-3 py-1 hover:bg-green-600 transition-all duration-300 text-white font-semibold rounded-md bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
													disabled={disabledButtons[user._id]}
												>
													<span>Make Admin</span>
												</button>
												{/* Make Tour Guide */}
												<button
													onClick={() => handleMakeTourGuide(user._id)}
													className="px-3 py-1 hover:bg-sky-600 transition-all duration-300 text-white font-semibold rounded-md bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
													disabled={disabledButtons[user._id]}
												>
													<span>Make Tour Guide</span>
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

export default ManageUsers;
