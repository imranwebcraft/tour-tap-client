/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../Home/components/Shared/Header/Navbar';
import TopBanner from '../../Components/TopBanner/TopBanner';
import SectionContainer from '../../UI/SectionContainer';
import Container from '../../UI/Container';
import { MdCastForEducation, MdOutlinePhone } from 'react-icons/md';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const TourGuideDetails = () => {
	const [tourGuideEmail, setTourGuideEmail] = useState(null);
	const [loading, setLoading] = useState(false);
	const [rating, setRating] = useState(0);
	const { user } = useAuth();

	const { id } = useParams();

	const axiosPublic = useAxiosPublic();

	const { data: signleTourGuide = {} } = useQuery({
		queryKey: ['tourGuide'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/tourGuide/${id}`);
			setTourGuideEmail(res.data?.email);
			return res.data;
		},
	});

	const { name, image, email, education, phone } = signleTourGuide || {};

	// Get comments from database
	const { data: comments = [], refetch } = useQuery({
		queryKey: ['comments'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/comments/${email}`);
			return res.data;
		},
		enabled: !!tourGuideEmail,
	});
	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleComment = async (event) => {
		setLoading(true);
		event.preventDefault();
		const form = event.target;
		const comment = form.comment.value;

		const commentData = {
			authorName: user?.displayName,
			authorImage: user?.photoURL,
			authorEmail: user?.email,
			email: email,
			comment: comment,
			rating: rating,
		};

		// Store comment in database
		try {
			await axiosPublic.post('/comments', commentData).then(() => {
				toast.success('Your comment posted successfull!');
				form.reset();
				refetch();
			});
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Helmet>
				<title> Tour Guide Details </title>
			</Helmet>
			<Navbar route={'tourGuideDetails'} screen={false}>
				<TopBanner bannerText={'Tour Guides Details'}></TopBanner>
			</Navbar>
			<SectionContainer>
				<Container>
					<div className=" bg-gray-900 w-full text-gray-200 flex flex-col items-center justify-center rounded-md">
						<div className="p-8 sm:flex  sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
							<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
								<img
									src={image}
									alt=""
									className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
								/>
							</div>
							<div className="flex flex-col space-y-4">
								<div>
									<h2 className="text-2xl font-semibold">{name}</h2>
									<span className="text-sm dark:text-gray-400">{}</span>
								</div>
								<div className="space-y-1">
									<span className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											aria-label="Email address"
											className="w-4 h-4"
										>
											<path
												fill="currentColor"
												d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
											></path>
										</svg>
										<span className="dark:text-gray-400">{email}</span>
									</span>
									<span className="flex items-center space-x-2">
										<MdCastForEducation></MdCastForEducation>
										<span className="dark:text-gray-400">{education}</span>
									</span>
									<span className="flex items-center space-x-2">
										<MdOutlinePhone></MdOutlinePhone>
										<span className="dark:text-gray-400">{phone}</span>
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* Rating */}
					<div className=" my-5 space-y-2">
						<h1 className=" text-xl font-semibold">Rate This Tour Guide</h1>
						<Rating
							initialRating={rating}
							onChange={handleRatingChange}
							emptySymbol={<FaRegStar className=" text-xl text-orange-500" />}
							fullSymbol={
								<FaStar className=" text-xl text-orange-500"></FaStar>
							}
						/>
					</div>

					{/* Show posted comment */}
					<div>
						{comments?.map((comment) => (
							<div key={comment._id} className=" mt-5">
								<div className=" flex gap-2 items-center mb-1">
									<img
										className=" h-10 w-10 rounded-full"
										src={comment.authorImage}
									/>
									<div className=" flex flex-col text-sm">
										<p>{comment.authorName}</p>
										<p>{comment.authorEmail}</p>
									</div>
								</div>
								<p>{comment.comment}</p>
							</div>
						))}
					</div>

					{/* Comment */}
					<div className=" my-5 space-y-2">
						<h1 className=" text-xl font-semibold">Leave a comment</h1>
						<form onSubmit={handleComment}>
							<textarea
								name="comment"
								className=" block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-30 disabled:cursor-not-allowed"
								cols="30"
								rows="10"
							></textarea>
							<div className="mt-6">
								<button
									type="submit"
									className="
								flex items-center justify-center gap-2
								w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:bg-opacity-30 disabled:cursor-not-allowed"
								>
									{loading ? (
										<AiOutlineLoading3Quarters className="animate-spin text-white" />
									) : undefined}
									Post Your Comment
								</button>
							</div>
						</form>
					</div>
				</Container>
			</SectionContainer>
		</div>
	);
};

export default TourGuideDetails;
