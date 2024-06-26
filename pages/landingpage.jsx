/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import Modal from "../components/Modal";
const LandingPage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100 mt-[15rem] h-full my-0 mx-auto">
      <div className="flex flex-col items-center justify-center px-[0.7rem]">
        <h1 className="font-medium text-[2rem] md:text-[4rem] leading-[2.5rem] md:leading-[4.5rem] text-center ">
          Welcome to the Future of
        </h1>
        <div className="font-['Signifier'] font-medium text-[2rem] md:text-[4rem] leading-[2.5rem] md:leading-[4.5rem] text-center">
          African Agriculture
        </div>

        <div className="mt-[2.5rem] text-center w-[43.813rem] ">
          <p className="text-base md:text-[1.25rem] leading-[1.25rem] md:leading-[1.688rem] text-[#302F2D] font-normal max-w-[22.375rem] md:max-w-[35.438rem] lg:max-w-[43.813rem] my-0 mx-auto ">
          Unlocking access to green finance for farmers in Africa.
          </p>
        </div>

        <div className=" w-fit">
          <a href="#learn-more">
            <button className="w-[14.25rem] h-[4rem] rounded-[32px] bg-[#0CC14C] hover:bg-[#011308] mt-[3rem]">
              <p className="text-white leading-6 font-medium  whitespace-nowrap">
                Learn More
              </p>
            </button>
          </a>
        </div>
      </div>
      <div className="mt-[5rem]">
        <Image
          priority
          src="/images/hero-illustration.svg"
          className=""
          height={1117}
          width={1600}
          alt="hero illustration"
        />
      </div>

      <div id="learn-more"></div>

      <div
        className="mt-[10.188rem] flex flex-col items-center justify-center pl-[1.125rem] md:pl-0"
        id="learn-more"
      >
        <h1 className=" text-[#484848] font-normal text-[2.313rem] md:text-[2.5rem] lg:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem] text-center ">
          The Agrify <span className="text-[#8F8F8F]">Mission</span>
        </h1>
        {/* <h1 className=" text-[#8F8F8F] font-normal text-[2.313rem] md:text-[2.5rem] lg:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem] text-center ">
          Mission
        </h1> */}
        <div className="mt-[1.5rem] text-base md:text-[1.125rem] lg:text-xl leading-5 md:leading-[1.5rem] lg:leading-[1.688rem] text-[#302F2D] max-w-[22.25rem] md:max-w-[33.313rem] lg:max-w-[44.25rem] md:w-auto  md:px-[2rem] lg:px-0 text-center">
          <div>
            <p className="text-center">
              We're dedicated to reshaping the agricultural industry in Africa
              through sustainable farming and carbon offsetting. We are uniquely
              positioned to help Africa overcome the challenges it faces in its
              agricultural sector by leveraging blockchain technology to
              incentivize eco-friendly farming practices, promote international
              trade of organic produce, and aid global corporations in achieving
              their sustainability targets.
            </p>
            <p className="mt-[2rem] text-center">
              In doing so, we contribute to achieving the Sustainable
              Development Goals (SDGs), reducing poverty, and ensuring a greener
              future.
            </p>
          </div>
        </div>
      </div>

      <div
        className="my-0 mx-auto mt-[4rem] md:mt-[9rem] md:mx-[4rem] flex flex-col gap-[3rem]  md:flex-row justify-between relative w-[90%]"
        id="learn"
      >
        <div className="bg-[#fff]   rounded-[32px] shadow-sm p-[2.375rem]  max-w-[38rem] md:max-w-[50%]  flex flex-col gap-4">
          <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem] text-[#000] w-full md:w-[auto] text-center  ">
            Agroforestry Project Marketplace
          </h1>

          <p className="text-[#999999] text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] text-center max-w-[30.375rem] my-0 mx-auto">
            Offset carbon emissions by funding regenerative agric projects in
            Africa & receive an on chain certificate
          </p>

          {/* <div className="flex  items-center gap-2 mt-[2rem] w-fit justify-center mx-auto my-0">
            <a
              href="https://agrify-cc.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[#0CC14C] cursor-pointer"
            >
              Go To Marketplace
            </a>

            <Image
              priority
              src="/images/go-marketplace.svg"
              className=""
              height={9.55}
              width={16.95}
              alt=""
            />
          </div> */}

          <div className="flex  items-center gap-2 mt-[0rem] w-fit justify-center mx-auto my-0">
            <Link href="/request-demo" className="">
              <span className="text-[#0CC14C] cursor-pointer">
                Request Demo
              </span>
            </Link>

            {/* <a  href="mailto:admin@agrifyafrica.xyz"  className="">
              <span  className="text-[#0CC14C] cursor-pointer">Request Demo</span>
            </a> */}
            <Image
              priority
              src="/images/go-marketplace.svg"
              className=""
              height={9.55}
              width={16.95}
              alt=""
            />
          </div>

          <div className="flex justify-center py-[3rem]">
            <Image
              priority
              src="/images/export.svg"
              className=""
              height={445.53}
              width={532.19}
              alt="learn earn grow "
            />
          </div>
        </div>

        <div
          className="bg-[#fff] rounded-[32px]  shadow-sm p-[2.375rem] text-white max-w-[38rem] md:max-w-[50%]   flex  flex-col gap-4 "
          // onClick={() => setShow(true)}
        >
          <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem] text-[#000] w-full md:w-[auto] text-center ">
            Impact MRV Tool
          </h1>
          {/* <div className="flex justify-center py-[3rem]">
            <Image
              priority
              src="/images/grow.svg"
              className=""
              height={427.74}
              width={295}
              alt="learn earn grow "
            />
          </div> */}
          <p className="text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] text-[#999999] text-center my-0 mx-auto">
            Leading technology for carbon project generation. Trustworthy
            measurement, reporting, and verification (MRV) of agriculture-based
            offset
          </p>
          <div className="flex  items-center gap-2 mt-[0.5rem] w-fit justify-center mx-auto my-0">
            <Link href="/request-demo" className="">
              <span className="text-[#0CC14C] cursor-pointer">
                Request Demo
              </span>
            </Link>
            {/* <a href="mailto:admin@agrifyafrica.xyz"  className="">
              <span  className="text-[#0CC14C] cursor-pointer">Request Demo</span>
            </a> */}
            <Image
              priority
              src="/images/go-marketplace.svg"
              className=""
              height={9.55}
              width={16.95}
              alt=""
            />
          </div>
          <div className="flex justify-center py-[3rem]">
            <Image
              priority
              src="/images/layer.svg"
              className=""
              height={461.21}
              width={500}
              alt=" "
            />
          </div>
        </div>
      </div>
      {/* 
      <Modal show={show} onClose={() => setShow(false)} /> */}

      <div className="mt-[10rem] bg-[#C0F000] rounded-[32px] flex flex-col md:flex-row justify-between  p-[3rem] max-w-[90%] my-0 mx-auto">
        <div className="mt-[3rem]">
          <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem]">
            Join Our Farmer Network
          </h1>
          <p className="text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] max-w-[26rem] mt-[2rem]">
            Are you a farmer interested in learning more about regenerative
            agriculture and how carbon credit offsets from global businesses can
            fund your transition to more organic produce for exports?
          </p>
          <Link href="/cohort" className="">
            <div className="flex gap-3 w-fit hover:bg-black hover:text-white mt-[4rem] cursor-pointer px-10 py-4 rounded-[30px] bg-white">
              <p className="text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem]">
                Join the Network
              </p>
              <HiOutlineChevronRight className="w-auto" size={22} />
              {/* <Image priority src='/images/join-network.svg' className='' height={16.95} width={9.55} alt='' /> */}
            </div>
          </Link>
        </div>
        <div className="w-fit mt-[3rem] md:mt-0">
          <Image
            priority
            src="/images/woman.svg"
            className=""
            height={482.82}
            width={470}
            alt=""
          />
        </div>
      </div>

      <div className="mt-[10rem] flex flex-col gap-3 justify-center items center px-[1.5rem] md:px-0 ">
        <h1 className="text-[1.688rem] md:text-[3rem] leading-8 md:leading-[4rem] text-[#02270F] text-center">
          Join Our Fundraise
        </h1>
        <p className="text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] text-[#302F2D] max-w-[41.688rem] text-center mx-auto">
          We are raising funds to carry out multi state pilot projects, and
          generate carbon credits which will be sold on our platform. Proving
          that agroforestry can not just impact the planet, but also community
          farmers as well. Join our mission to unlock climate finance for
          African farming communities!
        </p>
        <a
          href="https://docsend.com/view/iecvqc3pyv8u562q"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center"
        >
          <button className="w-[13.25rem] h-[4rem] rounded-[32px] bg-[#0CC14C] hover:bg-[#011308] mt-[3rem] ">
            <p className="text-white leading-6 font-medium  whitespace-nowrap ">
              See Deck
            </p>
          </button>
        </a>
      </div>

      {/* <div className="mt-[10rem]    max-w-[77rem] my-0 mx-auto">
        <div className="flex justify-between items-center w-full bg-red-500 place-content-between">
          <h1 className="text-[#000000] text-[1.688rem] md:text-[3rem] leading-8 md:leading-[4rem] mr-4">
            Agrify Blog
          </h1>
          <a
            href="https://agrify-africa.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border border-[#000] p-4 rounded-3xl ml-auto">
              View all articles
            </div>
          </a>
        </div>
        <div className="mt-[3rem] flex flex-col md:flex-row   gap-4 justify-between w-full">
          <div className="flex flex-col gap-3 w-[32%]">
            <a
              href="https://agrify-africa.medium.com/agrify-africa-153c50c69ce8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hover:scale-105 transition-all duration-1000">
                <Image
                  priority
                  src="/images/blog-1.svg"
                  className=""
                  height={300}
                  width={459}
                  alt=""
                />
              </div>
            </a>
            <span className="text-[#666666] text-[1rem] leading-[1.125rem]">
              Dec 30, 2022
            </span>
            <h1 className="text-[#000] text-[1.688rem] leading-[2rem]">
              Crypto Wallet with Agrify 101
            </h1>
            <a
              href="https://agrify-africa.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#343434] text-[1.25rem] leading-[1.5rem] underline">
                Read More
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-3 w-[32%]">
            <a
              href="https://agrify-africa.medium.com/agrify-africa-153c50c69ce8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hover:scale-105 transition-all duration-1000">
                <Image
                  priority
                  src="/images/blog-2.svg"
                  className=""
                  height={300}
                  width={459}
                  alt=""
                />
              </div>
            </a>
            <span className="text-[#666666] text-[1rem] leading-[1.125rem]">
              Dec 30, 2022
            </span>
            <h1 className="text-[#000] text-[1.688rem] leading-[2rem]">
              Growing Wealth and social responsibility with Agrify Invest
            </h1>
            <a
              href="https://agrify-africa.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#343434] text-[1.25rem] leading-[1.5rem] underline">
                Read More
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-3 w-[32%]">
            <a
              href="https://agrify-africa.medium.com/agrify-africa-153c50c69ce8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hover:scale-105 transition-all duration-1000">
                <Image
                  priority
                  src="/images/blog-3.svg"
                  className=""
                  height={300}
                  width={459}
                  alt=""
                />
              </div>
            </a>
            <span className="text-[#666666] text-[1rem] leading-[1.125rem]">
              Dec 29, 2022
            </span>
            <h1 className="text-[#000] text-[1.688rem] leading-[2rem]">
              Why Crypto?
            </h1>
            <a
              href="https://agrify-africa.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#343434] text-[1.25rem] leading-[1.5rem] underline">
                Read More
              </span>
            </a>
          </div>
        </div>
      </div> */}

      {/* <div className="mt-[10rem] pb-[16.5rem] flex flex-col justify-center items-center">
        <h1 className="text-center text-[1.688rem]  md:text-[3.5rem] leading-8  md:leading-[4.063rem] font-semibold bg-gradient-to-br from-gray-500 to-transparent bg-clip-text text-transparent">
          Creating a more{" "}
        </h1>

        <h1 className="text-center text-[1.688rem]  md:text-[3.5rem] leading-8  md:leading-[4.063rem] font-semibold">
          Equitable Food System
        </h1>
        <div>
          <a
            href="https://agrify-africa.medium.com/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center"
          >
            <button className="w-[13.25rem] h-[4rem] rounded-[32px] bg-[#011308] hover:bg-[#0CC14C] mt-[3rem] ">
              <p className="text-white leading-6 font-medium  whitespace-nowrap ">
                Learn more
              </p>
            </button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
