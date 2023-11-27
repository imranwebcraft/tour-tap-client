import { AnimatePresence, motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="grid mt-6">
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="bg-green-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity duration-300"
			>
				Book This Package
			</button>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

const SpringModal = ({ isOpen, setIsOpen }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0, rotate: '12.5deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						exit={{ scale: 0, rotate: '0deg' }}
						onClick={(e) => e.stopPropagation()}
						className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
					>
						<FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
						<div className="relative z-10">
							<div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
								<FiAlertCircle />
							</div>
							<h3 className="text-3xl font-bold text-center mb-2">
								One more thing!
							</h3>

							<div className="flex gap-2">
								<button
									onClick={() => setIsOpen(false)}
									className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
								>
									My Booking
								</button>
								<button
									type="submit"
									onClick={() => {
										setIsOpen(false);
									}}
									className="bg-green-500 hover:opacity-90 transition-opacity text-white font-semibold w-full py-2 rounded"
								>
									Confirm
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
