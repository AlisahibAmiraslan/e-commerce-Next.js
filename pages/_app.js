import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header, Footer } from "./../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
