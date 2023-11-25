import Container from '../../UI/Container';
import Navbar from '../Home/components/Shared/Header/Navbar';
import ContactUsBanner from './ContactUsBanner';

const ContactUs = () => {
	return (
		<div>
			<Navbar screen={false} route="contact">
				<ContactUsBanner></ContactUsBanner>
			</Navbar>
			<Container>
				<section className="text-gray-600 body-font relative">
					<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
							<iframe
								width="100%"
								title="Google Map"
								height="100%"
								loading="lazy"
								className="absolute inset-0"
								frameBorder="0"
								marginHeight="0"
								marginWidth="0"
								scrolling="no"
								allowFullScreen
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7303.546682024181!2d90.38619029999997!3d23.75546080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1700846381234!5m2!1sen!2sbd"
							></iframe>
							<div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
								<div className="lg:w-1/2 px-6">
									<h2 className="title-font font-bold  tracking-widest text-xs text-gray-900">
										ADDRESS
									</h2>
									<p className="mt-1">
										Explore the beauty of our travel destinations. We are
										located in the heart of vibrant cities and serene
										landscapes, ready to provide you with the best experiences.
									</p>
								</div>
								<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
									<h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">
										EMAIL
									</h2>
									<a className="text-green-500 leading-relaxed">
										tourtap@gmail.com
									</a>
									<h2 className="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">
										PHONE
									</h2>
									<p className="leading-relaxed text-green-500">123-456-7890</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
							<h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
								TRAVELER FEEDBACK
							</h2>
							<p className="leading-relaxed mb-5 text-gray-600">
								Hear what our fellow travelers have to say about their
								unforgettable experiences with Tour-Tap. Join us in creating
								memories that last a lifetime.
							</p>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 transition-all duration-300 rounded text-lg">
								Button
							</button>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default ContactUs;
