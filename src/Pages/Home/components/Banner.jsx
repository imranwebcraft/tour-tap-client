import { motion } from "framer-motion";
import { RxVideo } from "react-icons/rx";
import { Typewriter } from "react-simple-typewriter";
import Button from "../../../Components/Button/Button";
import Container from "../../../UI/Container";
const Banner = () => {
	const animatedText = "Explore The World With Tour-Tap.";
	return (
		<Container>
			<div className=" h-full flex flex-col justify-center items-center py-52 space-y-5">
				{/* <span className=" text-center text-white bg-green-200 bg-opacity-50 max-w-xs rounded-md px-2 py-1">
                Explore the wonderful Bangladesh!
            </span> */}
				<h1
					data-aos="zoom-in"
					data-aos-duration="1200"
					className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide max-w-5xl text-center"
				>
					Welcome to Tour-Tap
				</h1>
				<span className=" text-xl md:text-4xl font-black lg:text-6xl  bg-clip-text bg-gradient-to-tl from-green-500 to-sky-400 text-transparent">
					<Typewriter
						words={[animatedText]}
						cursor
						cursorStyle="_"
						typeSpeed={80}
						deleteSpeed={50}
						delaySpeed={1000}
						loop={true}
					/>
				</span>

				<div className="flex flex-col lg:flex-row gap-2 items-center justify-center ">
					<div className="flex -space-x-3">
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?1"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?2"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?3"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?4"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?5"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?6"
						/>
						<img
							className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							src="https://source.unsplash.com/40x40/?portrait?7"
						/>
						<span className="flex items-center justify-center w-10 h-10 font-semibold border rounded-full dark:bg-gray-900 text-white dark:border-gray-700">
							+
						</span>
					</div>
					<span className=" mr-10 flex items-center justify-center text-white">
						2,500 people booked tour in last 24 hours.
					</span>
				</div>

				<div className=" flex flex-col items-center gap-4">
					<Button buttonText={"Find Out More"}></Button>
					<motion.button
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.2 }}
						className=" group text-base flex items-center gap-1 text-white border border-rose-500 px-3 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition-all ease-in-out duration-300"
					>
						<RxVideo className=" group-hover:text-white text-rose-500 transition-all ease-in-out duration-300"></RxVideo>
						Watch Demo
					</motion.button>
				</div>
			</div>
		</Container>
	);
};

export default Banner;
