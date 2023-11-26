const TopBanner = ({ bannerText }) => {
	return (
		<div>
			<div className=" font-secondary text-white text-center pt-16">
				<h3 className="font-medium  text-9xl">{bannerText}</h3>
			</div>
		</div>
	);
};

export default TopBanner;
