import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import Container from '../../../../UI/Container';
import { useState } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

// Image hosting

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackage = () => {
	const [loading, setLoading] = useState(false);
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();

	const tourType = ['Adventure', 'Beatch', 'Safari', 'Cultural', 'Wellness'];

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		// Image as form data
		const formData = { image: data.image[0] };
		const res = await axiosPublic.post(image_hosting_api, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		if (res?.data?.success) {
			const packageData = {
				image: res?.data?.data?.display_url,
				tourType: data.tourType,
				tripTitle: data.tripTitle,
				price: data.price,
				tourDetails: data.details,
			};
			const packageResponse = await axiosSecure.post('/package', packageData);
			if (packageResponse.data) {
				toast.success('Package Added');
				reset();
				setLoading(false);
			}
		}
	};

	return (
		<div>
			<SectionTitle
				subHeading={'Package'}
				heading={'Add Tour Package'}
			></SectionTitle>

			<Container>
				{/* Add Package Form */}

				{/* ----------- Form Start */}
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* -----------Trip Title------------ */}
					<div className="mt-4">
						<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
							Trip Title
						</label>
						<input
							{...register('tripTitle', { required: true })}
							type="text"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
							placeholder="Enter trip title"
						/>
						{errors.tripTitle?.type === 'required' && (
							<span className=" text-red-600 text-sm">
								Trip Title is required*
							</span>
						)}
					</div>
					{/* -----------Tour Type------------ */}
					<div className="mt-4">
						<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
							Tour Type
						</label>
						<select
							{...register('tourType', { required: true })}
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
							defaultValue="default"
						>
							<option disabled value="default">
								Select Tour Type
							</option>
							{tourType.map((type, i) => (
								<option key={i} value={type}>
									{type}
								</option>
							))}
						</select>
						{errors.tourType?.type === 'required' && (
							<span className="text-sm text-red-600">
								Tour Type is required*
							</span>
						)}
					</div>
					{/* -----------Price------------ */}

					<div className="mt-4">
						<div className="flex justify-between">
							<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
								Price
							</label>
						</div>
						<input
							{...register('price', { required: true })}
							type="number"
							className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
							placeholder="Enter package price"
						/>
						{errors.price?.type === 'required' && (
							<span className="text-sm text-red-600">Price is required*</span>
						)}
					</div>
					{/* -----------Image------------ */}

					<div>
						<label className="block mt-3 mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
							Image
						</label>
						<label className="flex items-center px-3 py-3 mx-auto text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
							<input {...register('image', { required: true })} type="file" />
							{errors.image?.type === 'required' && (
								<p className="text-sm text-red-500">Image field is required*</p>
							)}
						</label>
					</div>
					{/* -----------Tour Details------------ */}

					<div className="mt-4">
						<div className="flex justify-between">
							<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
								Tour Details
							</label>
						</div>
						<textarea
							name="details"
							{...register('details')}
							className=" block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-30 disabled:cursor-not-allowed"
							cols="30"
							rows="10"
						></textarea>
						{errors.details?.type === 'required' && (
							<p className="text-sm text-red-500">Details field is required*</p>
						)}
					</div>

					<div className="mt-6">
						<button
							className="
								flex items-center justify-center gap-2
								w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
						>
							{loading ? (
								<AiOutlineLoading3Quarters className="animate-spin text-white" />
							) : undefined}
							Add Package
						</button>
					</div>
				</form>
			</Container>
		</div>
	);
};

export default AddPackage;
