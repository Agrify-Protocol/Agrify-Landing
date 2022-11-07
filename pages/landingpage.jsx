/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="block">
        <div className="absolute top-[120px] lg:top-[180px] w-full flex flex-col items-center align-center justify-center z-50">
          <h1 className=" text-[30px] md:text-[40px] leading-[32px] md:leading-[52px] w-full md:w-7/12 lg:text-[60px] text-white text-center" data-aos="fade-down"  data-aos-duration="1900">
            welcome to the future of agriculture
          </h1>
          <Link href="#explore">
            <button className=" p-3 px-12 lg:px-14 mt-6 lg:mt-12 text-[#0ABA43] hover:text-white bg-white hover:bg-black rounded-[50px]">
              explore
            </button>
          </Link>
        </div>

        <div className="block h-screen">
          <Image
            src="/images/backdrop.svg"
            className="block"
            layout="fill"
            objectFit="cover"
            objectPosition="55% 10%"
            quality={100}
            alt=""
          />
        </div>
      </div>
      <div id="explore" className="p-10 lg:p-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10" data-aos="zoom-in-up" data-aos-duration="1900" data-aos-easing="ease-in-out">
          <div className="lg:w-1/2 p-10 bg-[#F3FDD7] rounded-[1rem]">
            <h1 className="text-2xl py-4 md:text-[40px]">
              shop organic produce
            </h1>
            <p>
              we’ve curated a community of small and large quantity organic
              produce suppliers, who are dedicated to safe and timely deliveries
              of produce across international borders
            </p>
            <a
              href="https://marketplace.agrifyafrica.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 xl:w-1/3 my-6 md:mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
                go to marketplace
              </button>
            </a>
            <div>
              <img className="float-right" src="/images/nut.svg" alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 p-10 bg-[#FFFAD7] rounded-[1rem]">
            <h1 className="text-2xl py-4 md:text-[40px]">join as a supplier</h1>

            <p>
              join our community of suppliers, and boost your income by
              discovering new markets that need your organic produce.
            </p>
            <Link href="suppliers">
              <button className=" p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 xl:w-1/3 mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
                start verification
              </button>
            </Link>
            <img className="float-right" src="/images/man.svg" alt="" />
          </div>
        </div>

        <div className="w-full  flex flex-col my-10 items-center pt-10 lg:pt-20 pb-10 bg-white rounded-[24px]">
          <h1 className=" text-2xl text-center p-4 lg:text-[40px]" data-aos="fade-down"  data-aos-duration="1900">
            taking agricultural trade to the blockchain
          </h1>
          <p className="text-md md:text-[20px] py-4 text-center text-[#666] w-10/12 md:w-8/12 xl:w-1/3">
            we’re building a new way to verify produce origin and supply on
            chain, making global agricultural trade faster and more secure
          </p>

          <a
            className="w-10/12 md:w-1/2 lg:w-1/5"
            href="https://docsend.com/view/mxgfy98iqj7j74em"
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-3 lg:p-4 border-black border-[1px] w-full text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
              see our investment deck
            </button>
          </a>

          <div className="w-full flex items-end justify-between relative" data-aos="fade-up"  data-aos-duration="1900">
            <Image
              width={300}
              height={300}
              alt=""
              src="/images/hand-left.svg"
            />
            <Image
              width={300}
              height={300}
              alt=""
              src="/images/hand-right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
