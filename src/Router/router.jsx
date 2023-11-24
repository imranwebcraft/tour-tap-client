import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Community from '../Pages/Community/Community';
import Blog from '../Pages/Blog/Blog';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},

			{
				path: 'community',
				element: <Community></Community>,
			},
			{
				path: 'blog',
				element: <Blog></Blog>,
			},
			{
				path: 'aboutUs',
				element: <AboutUs></AboutUs>,
			},
			{
				path: 'contactUs',
				element: <ContactUs></ContactUs>,
			},
		],
	},
]);

export default router;
