import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header, Footer } from "./../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "../context/ProductContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [msg, setMsg] = useState([]);
  return (
    <>
      <StoreProvider>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </StoreProvider>
    </>
  );
}

export default MyApp;
