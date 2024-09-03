import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<div className="flex-grow overflow-y-auto">
				<Body />
			</div>
			<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
