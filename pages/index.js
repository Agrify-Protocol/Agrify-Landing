import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import InvestmentSection from "../components/section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <div className='p-5 lg:p-10'>
        <InvestmentSection />
      </div>
      <Footer />
    </div>
  );
}
