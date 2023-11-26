import { motion } from 'framer-motion';
const MotionButton = ({ btnText, btnBlock }) => {
	return (
		<motion.button
			initial={{ scale: 1, opacity: 0.8 }}
			whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
			whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
			className={`${
				btnBlock ? 'w-full' : ''
			} px-4 py-2 bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white rounded-md hover:shadow-md focus:outline-none`}
		>
			{btnText}
		</motion.button>
	);
};

export default MotionButton;
