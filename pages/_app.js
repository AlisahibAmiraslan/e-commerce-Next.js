import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header, Footer } from "./../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [msg, setMsg] = useState([]);
  return (
    <>
      <ProductContext.Provider value={{ msg, setMsg }}>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}

export default MyApp;
