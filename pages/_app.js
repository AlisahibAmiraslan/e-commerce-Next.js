import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Header } from "./../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
