import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Router/router";
import ThemContextProvider from "./context/ThemeContext";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemContextProvider>
			<AuthProvider>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={router}></RouterProvider>
					</QueryClientProvider>
				</HelmetProvider>
			</AuthProvider>
		</ThemContextProvider>
	</React.StrictMode>
);
