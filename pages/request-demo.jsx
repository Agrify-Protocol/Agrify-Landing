/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import CohortForm from "./cohort-application";


const RequestDemo = () => {
  return (
    <>
      {/* <Navbar isBlack={true} className="bg-[#E1EBDC]" /> */}
      <div className="flex items-center w-full h-full">
        <div className="w-1/2 px-[2rem]">
            <h1 className="font-medium text-[1rem] md:text-[1.3rem] lg:text-[1.575rem] leading-[1.647rem] md:leading-[2.04rem] w-full py-3  text-center lg:text-left">Request Demo</h1>
            <p className="pb-[4rem] text-center lg:text-left max-w-[38.924rem]  text-[1.05rem] leading-[1.47rem] text-[#6E6E73] ">Schedule a product demo to explore Agrify's comprehensive toolkit, empowering investors to make carbon credit investments with tangible climate benefits</p>
            <Image
              priority
              src="/images/request-demo.svg"
              className=""
              height={560.62}
              width={622.78}
              alt="request demo"
            />
        </div>
        <div className="w-1/2 bg-amber-300">
        <p>right side</p>
        </div>
        {/* <CohortForm />  */}
      </div>
    </>
  );
};

export default RequestDemo;
