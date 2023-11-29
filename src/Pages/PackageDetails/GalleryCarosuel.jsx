import Glide from '@glidejs/glide';
import { useEffect } from 'react';
import slider1 from '../../assets/images/Slider/slider1.jpg';
import slider3 from '../../assets/images/Slider/slider3.jpg';
import slider5 from '../../assets/images/Slider/slider5.jpg';
import slider6 from '../../assets/images/Slider/slider6.jpg';
import slider7 from '../../assets/images/Slider/slider7.jpg';

const GalleryCarosuel = () => {
	useEffect(() => {
		const slider = new Glide('.glide-05', {
			type: 'carousel',
			focusAt: 'center',
			perView: 3,
			autoplay: 1500,
			animationDuration: 700,
			gap: 24,
			classNames: {
				nav: {
					active: '[&>*]:bg-wuiSlate-700',
				},
			},
			breakpoints: {
				1024: {
					perView: 2,
				},
				640: {
					perView: 1,
				},
			},
		}).mount();

		return () => {
			slider.destroy();
		};
	}, []);

	return (
		<>
			{/*<!-- Component: Carousel with indicators outside --> */}
			<div className="glide-05 relative w-full py-6">
				{/*    <!-- Slides --> */}
				<div className="overflow-hidden" data-glide-el="track">
					<ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
						<li>
							<img
								src={slider1}
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>

						<li>
							<img
								src={slider3}
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>

						<li>
							<img
								src={slider5}
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src={slider6}
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
						<li>
							<img
								src={slider7}
								className="m-auto max-h-full w-full max-w-full"
							/>
						</li>
					</ul>
				</div>
				{/*    <!-- Indicators --> */}
				<div
					className="flex w-full items-center justify-center gap-2"
					data-glide-el="controls[nav]"
				>
					<button
						className="group p-4"
						data-glide-dir="=0"
						aria-label="goto slide 1"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
					<button
						className="group p-4"
						data-glide-dir="=1"
						aria-label="goto slide 2"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
					<button
						className="group p-4"
						data-glide-dir="=2"
						aria-label="goto slide 3"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
					<button
						className="group p-4"
						data-glide-dir="=3"
						aria-label="goto slide 4"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
				</div>
			</div>
			{/*<!-- End Carousel with indicators outside --> */}
		</>
	);
};

export default GalleryCarosuel;
