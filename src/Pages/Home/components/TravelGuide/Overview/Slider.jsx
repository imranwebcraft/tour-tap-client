// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper styles

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import image1 from "../../../../../assets/images/image1.jpg";
import image3 from "../../../../../assets/images/image3.jpg";
import image4 from "../../../../../assets/images/image4.jpg";
import image2 from "../../../../../assets/images/image5.jpg";

const Slider = () => {
	return (
		<div>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className="  w-full h-[550px] rounded-lg" src={image1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className=" w-full h-[550px] rounded-lg " src={image2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className=" w-full h-[550px] rounded-lg " src={image3} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className=" w-full h-[550px] rounded-lg " src={image4} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
