import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header, Footer } from "./../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "../context/ProductContext";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
	NProgress.configure({ easing: "ease", speed: 500 });
	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());

	return (
		<>
			<StoreProvider>
				<Header />
				<ToastContainer autoClose={1500} />
				<Component {...pageProps} />
				<Footer />
			</StoreProvider>
		</>
	);
}

export default MyApp;
