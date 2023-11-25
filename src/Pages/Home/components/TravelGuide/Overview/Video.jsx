const Video = () => {
	return (
		<div className="video-container pt-5">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/SOpfxXaELRY?si=MUR2fqHbIPFPDzlx"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default Video;
