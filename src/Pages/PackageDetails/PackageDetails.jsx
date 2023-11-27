import TopBanner from '../../Components/TopBanner/TopBanner';
import Navbar from '../Home/components/Shared/Header/Navbar';
import Gallery from './Gallery';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import Container from '../../UI/Container';
import SectionContainer from '../../UI/SectionContainer';
import TourPlan from './TourPlan';
import TourGuideList from './TourGuideList';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import useTourGuide from '../../Hook/useTourGuide';
import Modal from './Modal';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const PackageDetails = () => {
	const { user } = useAuth();
	const [tourGuides] = useTourGuide();
	const axiosPublic = useAxiosPublic();
	const location = useLocation();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { id } = useParams();

	const { data: singlePackage } = useQuery({
		queryKey: ['package'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/package/${id}`);
			return res.data;
		},
	});

	const { image, tourType, tripTitle, price, tourDetails } =
		singlePackage || {};

	const onSubmit = async (data) => {
		console.log(data);
		// Todo: status = "In review"
		const bookignData = {
			touristName: user?.displayName,
			touristEmail: user?.email,
			touristImage: user?.photoURL,

			date: data?.date,
			status: 'pending',

			tourGuideEmail: data.tourGuide,

			image: image,
			tripTitle: tripTitle,
			price: price,
		};

		// Send bookig data to the server
		await axiosPublic
			.post('/book-package', bookignData)
			.then(() => {
				toast.success('Your booking Confirmed!');
				reset();
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	const handleBookNow = () => {
		if (!user) {
			navigate('/login', { state: { from: location } });
		}
	};

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
										<option key={i} value={tourGuide.email}>
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
							<div onClick={handleBookNow}>
								<Modal></Modal>
							</div>
						</form>
					</div>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default PackageDetails;
