const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className=" text-center pb-5 tracking-wide mb-5">
			<h3 className="text-green-500 text-lg font-semibold">{subHeading}</h3>
			<h1 className=" text-4xl font-bold dark:text-white">{heading}</h1>
		</div>
	);
};

export default SectionTitle;
