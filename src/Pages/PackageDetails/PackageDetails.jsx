import TopBanner from '../../Components/TopBanner/TopBanner';
import Navbar from '../Home/components/Shared/Header/Navbar';
import Gallery from './Gallery';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import TourPlan from './TourPlan';
import TourGuideList from './TourGuideList';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import './datePicker.css';
import useTourGuide from '../../Hook/useTourGuide';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const PackageDetails = () => {
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const [tourGuides] = useTourGuide();
	const [tourGuide, setTourFuide] = useState('');
	console.log(tourGuide);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { id } = useParams();
	const axiosPublic = useAxiosPublic();

	const { data: singlePackage } = useQuery({
		queryKey: ['package'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/package/${id}`);
			return res.data;
		},
	});

	const onSubmit = (data) => {
		console.log(data);
		// Todo: don't forget to shave user photo when you save the booking to the database
		console.log();
	};

	const { image, tourType, tripTitle, price, tourDetails } =
		singlePackage || {};

	return (
		<div>
			<Navbar route={'packages'} screen={false}>
				<TopBanner bannerText={'Package Details'}></TopBanner>
			</Navbar>
			{/* Gallery */}
			<Gallery></Gallery>
			{/* Package Details */}
			<SectionContainer>
				<Container>
					<div className="flex gap-5">
						{/* Details */}
						<div className=" w-1/2 tracking-wide">
							<div>
								<img
									className=" w-full h-full rounded-md"
									src={image}
									alt="package-image"
								/>
							</div>
							<h1 className=" text-3xl font-semibold my-2">Details</h1>
							<div className=" space-y-2">
								<div className=" text-lg font-medium">
									TourTyupe: <span>{tourType}</span>
								</div>
								<div className=" text-lg font-medium">
									Trip Title: <span>{tripTitle}</span>
								</div>
								<div className=" text-lg font-medium">
									Price: $<span>{price}</span>
								</div>
							</div>
							<div className=" mt-4">
								<span className=" text-gray-700 tracking-wide">
									{tourDetails}
								</span>
							</div>
						</div>
						{/* Accordion */}
						<div className=" w-1/2">
							<TourPlan></TourPlan>
							<TourGuideList></TourGuideList>
						</div>
					</div>
					{/* Booking Form */}
					<div className=" mt-5">
						<p className=" text-2xl font-semibold mb-2 text-center">
							Booing Form
						</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* Tourist Name & Email */}
							<div className="mt-4 flex gap-2">
								<div className=" flex-1">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Tourist Name
									</label>
									<input
										type="text"
										defaultValue={user?.displayName}
										className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-50"
										disabled
									/>
								</div>
								<div className=" flex-1">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Tourist Email
									</label>
									<input
										type="email"
										defaultValue={user?.email}
										className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-50"
										disabled
									/>
								</div>
							</div>
							<div className="mt-4 flex gap-2">
								{/* Price */}
								<div className=" flex-1">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Price
									</label>
									<input
										type="number"
										defaultValue={price}
										className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-50"
										disabled
									/>
								</div>
								<div className="flex-1 w-full">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Date
									</label>
									<input
										{...register('date', { required: true })}
										className=" block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
										type="date"
									></input>

									{errors.date?.type === 'required' && (
										<span className="text-sm text-red-600">
											Select a tour guide is required*
										</span>
									)}
								</div>
							</div>
							<div className="mt-4">
								<div className="flex">
									<label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
										Selec Tour Guide
									</label>
								</div>
								<select
									{...register('tourGuide', { required: true })}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									defaultValue="default"
								>
									<option disabled value="default">
										Select your tour guide
									</option>
									{tourGuides.map((tourGuide, i) => (
										<option key={i} value={tourGuide.name}>
											{tourGuide.name}
										</option>
									))}
								</select>

								{errors.tourGuide?.type === 'required' && (
									<span className="text-sm text-red-600">
										Select a tour guide is required*
									</span>
								)}
							</div>

							{/* Booking confirm button */}
							<div className="mt-6">
								<button
									type="submit"
									className="flex items-center justify-center gap-2
								w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
								>
									{loading ? (
										<AiOutlineLoading3Quarters className="animate-spin text-white" />
									) : undefined}
									Book This Package
								</button>
							</div>
						</form>
					</div>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default PackageDetails;
