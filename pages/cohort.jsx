import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import CohortForm from "./cohort-application";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cohort = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <Navbar isBlack={true} className="bg-[#E1EBDC]" />
      <div className=" bg-[#E1EBDC] h-[800px] flex flex-col lg:flex-row justify-between p-10 md:p-20 pt-[150px] ">
        <div
          className="top-[120px] lg:top-[180px] w-full lg:w-[520px] flex flex-col items-center lg:items-start justify-center z-50"
          // data-aos="fade-right"
          // data-aos-duration="2500"
        >
          <h1 className=" text-[30px] md:text-[40px] lg:text-[48px] leading-[32px] md:leading-[56px] w-full py-3  text-center lg:text-left">
            Apply for the 2023 Cohort
          </h1>
          <p className="text-center lg:text-left w-[32.875rem] text-lg leading-6">
            Are you creating the next big thing that can take the giant Africa
            out of its negative balance of payment, enhance food security and
            even export to other countries?
          </p>
          <Link href="/cohort-application">
            <button className=" p-3 px-12 lg:px-14 mt-6 lg:mt-12 text-white hover:text-white bg-[#011308] hover:bg-ag-green rounded-[50px]">
              start application
            </button>
          </Link>
        </div>

        <div
          className="block p-10 lg:p-20"
          // data-aos="fade-left"
          // data-aos-duration="2500"
        >
          <Image
            src="/images/man.svg"
            className="block"
            width={372}
            height={539.37}
          />
        </div>
      </div>
      <CohortForm />
      {/* <div className="mb-10"></div> */}
      <div className={`flex flex-col md:flex-row xl:justify-between items-start xl:items-center mt-[17.938rem] px-[3rem] pb-[5.563rem]  bg-white pt-[5.563rem] `}>
      <div className="mr-[5rem] flex flex-col xl:flex-row gap-3 items-start xl:items-center">
        <Image
          priority
          src="/images/logo-large.svg"
          className="pl-[2rem]"
          height={28.72}
          width={81}
          alt="logo"
        />
        <a className="font normal text-lg leading-6 text-[#666666] mt-[2rem] xl:mt-0  xl:ml-[2.5rem] hover:text-ag-green cursor-pointer">Mirror</a>
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">Twitter</a>
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">Instagram</a>
      </div>
      <div className="flex flex-col xl:flex-row gap-3 mt-[6rem] xl:mt-0">
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">About</a>
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">Terms of services</a>
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">Privacy policy</a>
        <a className="font normal text-lg leading-6 text-[#666666] hover:text-ag-green cursor-pointer">Contact</a>
      </div>
    </div>
      
    </div>
  );
};

export default Cohort;
