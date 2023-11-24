import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ buttonText }) => {
	return (
		<div>
			<motion.button
				initial={{
					scale: '1',
				}}
				whileHover={{
					scale: 1.05,
				}}
				whileTap={{
					scale: 0.9,
				}}
				transition={{ duration: 0.1 }}
				className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-300 text-center text-sm font-medium shadow-md focus:outline-none rounded-lg"
			>
				{buttonText}
			</motion.button>
		</div>
	);
};
Button.propTypes = {
	buttonText: PropTypes.array,
};

export default Button;
