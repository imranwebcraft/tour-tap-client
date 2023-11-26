/* eslint-disable react/no-unescaped-entities */
const TourPlan = () => {
	return (
		<>
			{/*<!-- Component: Outline accordion with icons --> */}
			<p className=" text-2xl font-semibold mb-2">Tour plan</p>
			<section className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white mb-2">
				<details className="group p-4" open>
					<summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
						<p className=" bg-rose-500 text-white px-2 py-0.5 rounded">Day-1</p>
						Arrival and Exploration
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-labelledby="title-ac26 desc-ac26"
						>
							<title id="title-ac26">Open icon</title>
							<desc id="desc-ac26">
								icon that represents the state of the summary
							</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</summary>
					<p className="mt-4 text-slate-500">
						Welcome to the tour! On the first day, you'll arrive and embark on a
						journey of exploration. Discover the local culture, indulge in
						[specific activity], and get ready for an exciting adventure.
					</p>
				</details>
				<details className="group p-4">
					<summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
						<p className=" bg-rose-500 text-white px-2 py-0.5 rounded">Day-2</p>
						Adventure and Adrenaline
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-labelledby="title-ac28 desc-ac28"
						>
							<title id="title-ac28">Open icon</title>
							<desc id="desc-ac28">
								icon that represents the state of the summary
							</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</summary>
					<p className="mt-4 text-slate-500">
						Day 2 is all about thrilling adventures. From going to enjoy to the
						main spot, brace yourself for an adrenaline-pumping day filled with
						exciting experiences and breathtaking landscapes.
					</p>
				</details>
				<details className="group p-4">
					<summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
						<p className=" bg-rose-500 text-white px-2 py-0.5 rounded">Day-3</p>
						Cultural Immersion
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-labelledby="title-ac30 desc-ac30"
						>
							<title id="title-ac30">Open icon</title>
							<desc id="desc-ac30">
								icon that represents the state of the summary
							</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</summary>
					<p className="mt-4 text-slate-500">
						Immerse yourself in the rich culture of the region on Day 3. Visit
						cultural site, participate in cultural activity, and savor the local
						cuisine. It's a day of cultural discovery and appreciation.
					</p>
				</details>
				<details className="group p-4">
					<summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
						<p className=" bg-rose-500 text-white px-2 py-0.5 rounded">Day-4</p>
						Relaxation and Reflection
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-labelledby="title-ac32 desc-ac32"
						>
							<title id="title-ac32">Open icon</title>
							<desc id="desc-ac32">
								icon that represents the state of the summary
							</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v16m8-8H4"
							/>
						</svg>
					</summary>
					<p className="mt-4 text-slate-500">
						As the tour unfolds, Day 4 invites you to unwind and reflect on your
						journey. Enjoy some leisure time by [scenic location], take in the
						beauty around you, and reflect on the unforgettable moments of the
						tour.
					</p>
				</details>
			</section>
			{/*<!-- End Outline accordion with icons --> */}
		</>
	);
};

export default TourPlan;
