const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className=" text-center pb-5 tracking-wide">
			<h3 className="text-green-500">{subHeading}</h3>
			<h1 className=" text-4xl font-bold">{heading}</h1>
		</div>
	);
};

export default SectionTitle;
