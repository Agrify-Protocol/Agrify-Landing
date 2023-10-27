/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import CohortForm from "./cohort-application";

const RequestDemo = () => {
  const inputStyles =
    "mb-3 mt-[0.5rem] block  px-3 py-3 bg-white border  rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none  ";
  return (
    <div>
      <Navbar isBlack={true} className="bg-[#E1EBDC]" />

      <div className="h-[900px] flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[15rem] px-6 md:px-8 lg:px-20 pb-[4rem] md:pb-[7rem] lg:pb-[4rem]">
        <div className="top-[120px] lg:top-[180px] ">
          <h1 className="font-medium text-[1.5rem]  md:text-[1.575rem] leading-[1.95rem] md:leading-[2.047rem] w-full py-3 text-left">
            Request Demo
          </h1>
          <p className="pb-[4rem] text-left lg:max-w-[38.924rem] text-[0.875rem] md:text-[1.05rem] leading-[1.225rem] md:leading-[1.47rem] text-[#6E6E73] ">
            Schedule a product demo to explore Agrify's comprehensive toolkit,
            empowering investors to make carbon credit investments with tangible
            climate benefits
          </p>
          <div className="hidden lg:block ">
            <Image
              priority
              src="/images/request-demo.svg"
              className=""
              height={560.62}
              width={522.78}
              alt="request demo"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full ">
          <div className="flex flex-col justify-center items-center w-full mb-[7rem]">
            <form className="mt-[1.5rem] block w-full lg:max-w-[27.28rem]">
              <h1 className="text-[#697386] text-[14.7px] leading-[23.1px] font-medium">
                Request Demo
              </h1>
              <div className="mt-[2rem]">
                <label
                  htmlFor="firstName"
                  className="font-[450] text-[14.7px] leading-[23.1px] text-[#697386]"
                >
                  First Name <span className="text-[#EC1B1B]">*</span>
                </label>
                <input
                  name="firstName"
                  id="firstName"
                  value=""
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="font-[450] text-[14.7px] leading-[23.1px] text-[#697386]"
                >
                  Last Name <span className="text-[#EC1B1B]">*</span>
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  value=""
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-[450] text-[14.7px] leading-[23.1px] text-[#697386]"
                >
                  Email Address <span className="text-[#EC1B1B]">*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  value=""
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-[450] text-[14.7px] leading-[23.1px] text-[#697386]"
                >
                  Company Name
                  <span className="text-[#EC1B1B]">*</span>
                </label>
                <input
                  name=""
                  id=""
                  value=""
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-[450] text-[14.7px] leading-[23.1px] text-[#697386]"
                >
                  How do you and your organization engage with carbon credit
                  <span className="text-[#EC1B1B]">*</span>
                </label>
              
                <select
                  name=""
                  id=""
                  className={`${inputStyles} text-[#8792a2]`}
                >
                <option value="volvo" className="text-[#8792a2]">
                    Select
                  </option>
                  <option value="volvo" className="text-[#8792a2]">
                    Carbon Credit Supplier/ Farmer
                  </option>
                  <option value="saab" className="text-[#8792a2]">
                    Looking to buy
                  </option>
                  <option value="mercedes" className="text-[#8792a2]">
                    Active and regular buyer
                  </option>
                  <option value="audi" className="text-[#8792a2]">
                    Advisor/Broker
                  </option>
                  <option value="audi" className="text-[#8792a2]">
                    Carbon Project Developer
                  </option>
                  <option value="audi" className="text-[#8792a2]">
                    Researcher
                  </option>
                </select>
              </div>
              <Link href="/request-demo-success">
                <button
                  type="submit"
                  className="bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-full lg:w-[27.628rem]"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
