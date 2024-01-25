import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllPackages from "../Pages/AllPackages/AllPackages";
import AllStory from "../Pages/AllStory/AllStory";
import Blog from "../Pages/Blog/Blog";
import Community from "../Pages/Community/Community";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage/AddPackage";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MyAssignedTour from "../Pages/Dashboard/TourGuide/MyAssignedTour/MyAssignedTour";
import TourGuideProfile from "../Pages/Dashboard/TourGuide/TourGuideProfile/TourGuideProfile";
import MyBooking from "../Pages/Dashboard/Tourist/MyBooking/MyBooking";
import MyWishlist from "../Pages/Dashboard/Tourist/MyWishlist/MyWishlist";
import TouristProfile from "../Pages/Dashboard/Tourist/TouristProfile/TouristProfile";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Register from "../Pages/Register/Register";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import TourGuideDetails from "../Pages/TourGuideDetails/TourGuideDetails";
import TourTypeCard from "../Pages/TourTypeCard/TourTypeCard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},

			{
				path: "community",
				element: <Community></Community>,
			},
			{
				path: "blog",
				element: <Blog></Blog>,
			},
			{
				path: "aboutUs",
				element: <AboutUs></AboutUs>,
			},
			{
				path: "contactUs",
				element: <ContactUs></ContactUs>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "packages",
				element: <AllPackages></AllPackages>,
			},
			{
				path: "packages/:id",
				element: <PackageDetails></PackageDetails>,
			},
			{
				path: "stories",
				element: <AllStory></AllStory>,
			},
			{
				path: "story/:id",
				element: <StoryDetails></StoryDetails>,
			},
			{
				path: "tourGuide/:id",
				element: <TourGuideDetails></TourGuideDetails>,
			},
			{
				path: "tourType/:item",
				element: <TourTypeCard></TourTypeCard>,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		children: [
			//  ########## ADMIN #########
			{
				path: "admin-profile",
				element: <AdminProfile></AdminProfile>,
			},
			{
				path: "add-package",
				element: <AddPackage></AddPackage>,
			},
			{
				path: "users",
				element: <ManageUsers></ManageUsers>,
			},
			//  ########## TOURIST #########
			{
				path: "tourist-profile",
				element: <TouristProfile></TouristProfile>,
			},
			{
				path: "tourist-profile",
				element: <TouristProfile></TouristProfile>,
			},
			{
				path: "booking",
				element: <MyBooking></MyBooking>,
			},
			{
				path: "wishlist",
				element: <MyWishlist></MyWishlist>,
			},

			//  ########## Tour Guide #########
			{
				path: "tourguide-profile",
				element: <TourGuideProfile></TourGuideProfile>,
			},
			{
				path: "assign-tour",
				element: <MyAssignedTour></MyAssignedTour>,
			},
		],
	},
]);

export default router;
