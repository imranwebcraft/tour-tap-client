import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Router/router";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router}></RouterProvider>
					<ToastContainer
						position="top-right"
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick={true}
						rtl={false}
						pauseOnFocusLoss
						draggable={false}
						pauseOnHover
						theme="light"
					/>
					{/* Same as */}
					<ToastContainer />
				</QueryClientProvider>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
