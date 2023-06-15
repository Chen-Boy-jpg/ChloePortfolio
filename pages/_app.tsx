import { AppProps } from "next/app";
import "../styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
