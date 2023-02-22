/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <p className="text-base md:text-[1.25rem] leading-[1.25rem] md:leading-[1.688rem] text-[#302F2D] font-normal max-w-[22.375rem] md:max-w-[35.438rem] lg:max-w-[43.813rem] my-0 mx-auto">
            Support African agriculture by discovering & trading unique
            agricultural NFTs you can earn from.
          </p>
        </div>

        <div className=" w-fit">
          <a
            href="https://marketplace.agrifyafrica.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-[12.25rem] h-[4rem] rounded-[32px] py-[rem] px-[3rem] bg-[#0CC14C] hover:bg-[#011308] mt-[3rem]">
              <p className="text-white leading-6 font-medium hover:bg-[#011308] ">
                Go to marketplace
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

      <div className="mt-[10.188rem] flex flex-col items-center justify-center pl-[1.125rem] md:pl-0">
        <h1 className="font-normal text-[2.313rem] md:text-[2.5rem] lg:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem] md:text-center ">
          Agriculture can save Africa from{" "}
          <span className="font-['Signifier'] text-[2.313rem] md:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem]">
            poverty
          </span>
        </h1>

        <div className="mt-[1.5rem] text-base md:text-[1.125rem] lg:text-xl leading-5 md:leading-[1.5rem] lg:leading-[1.688rem] text-[#302F2D] max-w-[22.25rem] md:max-w-[33.313rem] lg:max-w-[49.313rem] md:w-auto  md:px-[2rem] lg:px-0 ">
          <div>
            <p>
              With 65% of the world's arable land and a consistently increasing
              population, Africa has the capacity to feed both itself and the
              rest of the world.
            </p>
            <p className="mt-[1.5rem]">
              Institutional investors have taken notice of this huge opportunity
              and have invested a large amount ;$103 billion so far in the
              African agriculture sector over the past seven years. Most of
              these deals are negotiated behind closed networks with a lot of
              political wrangling, leaving the large growth drivers in small to
              medium sized firms behind.
            </p>
          </div>
          <div className="mt-[2rem]">
            <p>
              Using distributed ledger technology, we have created a new way for
              agricultural innovators to gain access to funding from backers all
              over the world, doing away with the politics of funding and making
              it more straightforward and merit based. Agrify is here to give
              you access to the unprecedented growth opportunity in the
              agriculture sector, so you too can get in on the action.
            </p>
          </div>
        </div>

        <h1 className="font-medium text-2xl md-[1.688rem] lg:text-[2.313rem] leading-8 md:leading-[2.813rem] text-[#595C63] mt-[3rem] text-center">
          Diversify your portfolio and earn more from{" "}
          <span className="text-[#0CC14C]">new markets</span>
        </h1>
      </div>

      <div className="mt-[10rem] bg-white shadow-sm rounded-[32px] md:mx-[4rem]  flex flex-col md:flex-row items-center justify-between w-[90%] md-full py-[3.563rem] md:py-0 my-0 mx-auto ">
        <div className=" px-[2rem] md:pl-[4.5rem]  md:mb-[5rem]">
          <h1 className="leading-8 md:leading-[3rem] text-[1.688rem] md:text-[2.5rem] text-[#000000] font-medium ">
            Own a stake in the global
          </h1>
          <h1 className=" leading-8 md:leading-[3rem] text-[1.688rem] md:text-[2.5rem] text-[#000000] font-medium ">
            agricultural innovation
          </h1>
          <div className="flex  mt-[3rem] gap-2 w-fit">
            <span className="leading-5 text-base">Learn More</span>
            <Image
              priority
              src="/images/learn-more-black.svg"
              className=""
              height={14.68}
              width={18}
              alt="learn more"
            />
          </div>
        </div>

        <div>
          <Image
            priority
            src="/images/browser-img.svg"
            className=""
            height={467.19}
            width={598}
            alt="agrify"
          />
        </div>
      </div>

      <div
        className="my-0 mx-auto mt-[4rem] md:mt-[9rem] md:mx-[4rem] flex flex-col gap-[3rem]  md:flex-row justify-between relative w-[90%]"
        id="learn"
      >
        <Link href="/cohort">
          <div className="bg-[#C1E701]  rounded-[32px] shadow-sm p-[2.375rem]  cursor-pointer max-w-[38rem] md:max-w-[50%] hover:scale-105 transition-all duration-1000 flex flex-col gap-4">
            <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem] text-[#000] w-full md:w-[auto] text-center md:text-left ">
              Join Agrify as an exporter
            </h1>
            <div className="flex justify-center py-[3rem]">
              <Image
                priority
                src="/images/farmer.svg"
                className=""
                height={427.74}
                width={295}
                alt="apply for next cohort"
              />
            </div>
            <p className="text-[#000] text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] ">
              Are you an agric exporter with a vision to sell your produce
              across the world and take Africa out of its negative balance of
              payment?{" "}
            </p>
            <div className="flex  items-center gap-2 mt-[3rem] w-fit">
              <p>Learn More</p>
              <Image
                priority
                src="/images/learn-more-black.svg"
                className=""
                height={14.68}
                width={18}
                alt="learn more"
              />
            </div>
          </div>
        </Link>

        <div
          className="bg-[#8B4DED] rounded-[32px] shadow-sm p-[2.375rem] text-white cursor-pointer max-w-[38rem] md:max-w-[50%] hover:scale-105 transition-all duration-1000 flex flex-col gap-4"
          onClick={() => setShow(true)}
        >
          <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem] text-[#fff] w-full md:w-[auto] text-center md:text-left ">
            Learn, Earn, and Grow
          </h1>
          <div className="flex justify-center py-[3rem]">
            <Image
              priority
              src="/images/grow.svg"
              className=""
              height={427.74}
              width={295}
              alt="learn earn grow "
            />
          </div>
          <p className="text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem] ">
            The Agrify community is opening rails for anyone to easily jump into
            the budding and dynamic blockchain space.
          </p>
          <div className="flex  items-center gap-2 mt-[3rem] w-fit">
            <p>Learn More</p>
            <Image
              priority
              src="/images/learn-more-white.svg"
              className=""
              height={14.68}
              width={18}
              alt="learn more"
            />
          </div>
        </div>
      </div>

      <Modal show={show} onClose={() => setShow(false)} />

      <div className="mt-[10rem] flex flex-col items-center pb-[18.75rem]">
        <h1 className="font-semibold text-[2rem] md:text-[2.5rem] lg:text-5xl leading-[3rem] md:leading-[3.5rem] w-[22.375rem] md:w-[53.25rem] text-center ">
          Democratizing Agriculture through Blockchain Technology
        </h1>
        <p className="text-xl leading-[1.688rem] text-center text-[#302F2D] mt-[1.5rem]">
          Join our waitlist to get early access
        </p>

        <Link href="/waitlist">
          <button className="w-[13.813rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[3rem] bg-[#011308] mt-[2rem] hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C]">
            <p className="text-white leading-6 font-medium  ">
              Get early access
            </p>
          </button>
        </Link>
      </div>

      {/* <div className="mt-[10rem] flex flex-col items-center">
        <h1 className="font-semibold text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem]  text-center">
          FAQs
        </h1>
        <div className="w-[22.401rem]  mt-[4rem]">
          <div className="flex justify-between items-center border-b border-[#A1A7AB] pb-[1rem]">
            <p className="font-medium text-2xl leading-[2rem]">
              What is Agrify?
            </p>
            <div className="w-fit">
              <Image
                priority
                src="/images/faqs.svg"
                className=""
                height={19.93}
                width={19.92}
                alt="FAQs"
              />
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-[#A1A7AB] pb-[1rem]">
            <p className="font-medium text-2xl">How does it work</p>
            <div className="w-fit">
              <Image
                priority
                src="/images/faqs.svg"
                className=""
                height={19.93}
                width={19.92}
                alt="FAQs"
              />
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-[#A1A7AB] pb-[1rem]">
            <p className="font-medium text-2xl">Is it safe to Invest?</p>
            <div className="w-fit">
              <Image
                priority
                src="/images/faqs.svg"
                className=""
                height={19.93}
                width={19.92}
                alt="FAQs"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
