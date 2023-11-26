import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';
import { motion } from 'framer-motion';
import { FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
const ShareButtons = ({ url, title }) => {
	return (
		<div className=" flex justify-center items-center mt-5 gap-5">
			<FacebookShareButton url={url} quote={title}>
				<motion.button
					initial={{ scale: 1, opacity: 0.8 }}
					whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
					whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
					className=" bg-[#3b5998] text-white px-3 py-1 rounded-md flex items-center gap-2"
				>
					<FaFacebook></FaFacebook> Share on Facebook
				</motion.button>
			</FacebookShareButton>

			<TwitterShareButton url={url} title={title}>
				<motion.button
					initial={{ scale: 1, opacity: 0.8 }}
					whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
					whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
					className=" bg-[#1DA1F2] text-white px-3 py-1 rounded-md flex items-center gap-2"
				>
					<FaTwitter></FaTwitter> Share on Twitter
				</motion.button>
			</TwitterShareButton>

			<WhatsappShareButton url={url} title={title} separator=":: ">
				<motion.button
					initial={{ scale: 1, opacity: 0.8 }}
					whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
					whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
					className=" bg-[#25D366] text-white px-3 py-1 rounded-md flex items-center gap-2"
				>
					<FaWhatsapp></FaWhatsapp> Share on WhatsApp
				</motion.button>
			</WhatsappShareButton>
		</div>
	);
};

export default ShareButtons;
