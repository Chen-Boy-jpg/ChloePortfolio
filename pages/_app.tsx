import { AppProps } from "next/app";
import "../styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
