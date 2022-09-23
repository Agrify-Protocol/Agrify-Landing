import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingPage from "./landingpage";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
