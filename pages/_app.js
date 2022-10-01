import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header, Footer } from "./../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
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
