/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../components/Modal';
const LandingPage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    // <div className="bg-gray-100">
    //   <div className="block">
    //     <div className="absolute top-[120px] lg:top-[180px] w-full flex flex-col items-center align-center justify-center z-50">
    //       <h1 className=" text-[30px] md:text-[40px] leading-[32px] md:leading-[52px] w-full md:w-7/12 lg:text-[60px] text-white text-center" data-aos="fade-down"  data-aos-duration="2500">
    //       Invest in the Future of
    //       </h1>
    //       <div className="font-['Signifier'] font-medium text-[4rem] leading-[4.5rem]">
    //       Agriculture
    //      </div>
    //       <Link href="#explore">
    //         <button className=" p-3 px-12 lg:px-14 mt-6 lg:mt-12 text-[#0ABA43] hover:text-white bg-white hover:bg-black rounded-[50px]">
    //           explore
    //         </button>
    //       </Link>
    //     </div>

    //     <div className="block h-screen">
    //       <Image
    //         src="/images/backdrop.svg"
    //         className="block"
    //         layout="fill"
    //         objectFit="cover"
    //         objectPosition="55% 10%"
    //         quality={100}
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div id="explore" className="p-10 lg:p-14">
    //     <div className="flex flex-col lg:flex-row justify-between gap-10" data-aos="zoom-in-up" data-aos-duration="2500" data-aos-easing="ease-in-out">
    //       <div className="lg:w-1/2 p-10 bg-[#F3FDD7] rounded-[1rem]">
    //         <h1 className="text-2xl py-4 md:text-[40px]">
    //           shop organic produce
    //         </h1>
    //         <p>
    //           we’ve curated a community of small and large quantity organic
    //           produce suppliers, who are dedicated to safe and timely deliveries
    //           of produce across international borders
    //         </p>
    //         <a
    //           href="https://marketplace.agrifyafrica.xyz/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <button className=" p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 xl:w-1/3 my-6 md:mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
    //             go to marketplace
    //           </button>
    //         </a>
    //         <div>
    //           <img className="float-right" src="/images/nut.svg" alt="" />
    //         </div>
    //       </div>
    //       <div className="lg:w-1/2 p-10 bg-[#FFFAD7] rounded-[1rem]">
    //         <h1 className="text-2xl py-4 md:text-[40px]">join as a supplier</h1>

    //         <p>
    //           join our community of suppliers, and boost your income by
    //           discovering new markets that need your organic produce.
    //         </p>
    //         <Link href="suppliers">
    //           <button className=" p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 xl:w-1/3 mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
    //             start verification
    //           </button>
    //         </Link>
    //         <img className="float-right" src="/images/man.svg" alt="" />
    //       </div>
    //     </div>

    //     <div className="w-full  flex flex-col my-10 items-center pt-10 lg:pt-20 pb-10 bg-white rounded-[24px]">
    //       <h1 className=" text-2xl text-center p-4 lg:text-[40px]" data-aos="fade-down"  data-aos-duration="2500">
    //         taking agricultural trade to the blockchain
    //       </h1>
    //       <p className="text-md md:text-[20px] py-4 text-center text-[#666] w-10/12 md:w-8/12 xl:w-1/3">
    //         we’re building a new way to verify produce origin and supply on
    //         chain, making global agricultural trade faster and more secure
    //       </p>

    //       <a
    //         className="w-10/12 md:w-1/2 lg:w-1/5"
    //         href="https://docsend.com/view/mxgfy98iqj7j74em"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <button className="p-3 lg:p-4 border-black border-[1px] w-full text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
    //           see our investment deck
    //         </button>
    //       </a>

    //       <div className="w-full flex items-end justify-between relative" data-aos="fade-up"  data-aos-duration="2500">
    //         <Image
    //           width={300}
    //           height={300}
    //           alt=""
    //           src="/images/hand-left.svg"
    //         />
    //         <Image
    //           width={300}
    //           height={300}
    //           alt=""
    //           src="/images/hand-right.svg"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-100 mt-[15rem] h-full my-0 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-medium text-[2rem] md:text-[4rem] leading-[2.5rem] md:leading-[4.5rem] text-center ">
          Invest in the Future of
        </h1>
        <div className="font-['Signifier'] font-medium text-[2rem] md:text-[4rem] leading-[2.5rem] md:leading-[4.5rem] text-center">
          Agriculture
        </div>

        <div className="mt-[2.5rem] text-center w-[43.813rem] ">
          <p className="text-base md:text-[1.25rem] leading-[1.25rem] md:leading-[1.688rem] text-[#302F2D] font-normal max-w-[22.375rem] md:max-w-[43.813rem] my-0 mx-auto">
            Discover & invest in top-tier innovative agribusinesses, digital
            products,farming techniques and hardware.
          </p>
        </div>

        <Link href="#learn">
          <button className="w-[12.25rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[3rem] bg-[#0CC14C] mt-[3rem]">
            <p className="text-white leading-6 font-medium ">Learn more</p>
          </button>
        </Link>
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

      <div className="mt-[10.188rem] flex flex-col items-center justify-center pl-[1.125rem] md:pl-0">
        <h1 className="font-medium text-[2.313rem] md:text-[2.5rem] lg:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem] text-center ">
          Agriculture investing made{' '}
          <span className="font-['Signifier'] text-[2.313rem] md:text-[3.75rem] leading-[2.75rem] md:leading-[3.5rem]">
            simple
          </span>
        </h1>

        <div className="mt-[1.5rem] text-base md:text-[1.25rem] lg:text-xl leading-5 md:leading-[1.688rem] text-[#302F2D] w-[22.25rem] md:w-auto text-center md:px-[2rem] lg:px-0">
          <div>
            <p>
              As global food demand and use of sophisticated technology in
              agriculture continues to rise, Agrify is here to give you access
              to the unprecedented growth opportunity in the agriculture
            </p>
            <p>sector, so you too can get in on the action.</p>
          </div>
          <div className="mt-[1.5rem]">
            <p>
              Using distributed ledger technology, we have created a new way for
              agricultural innovators to gain access to funding from backers all
              over the world, doing away with the politics of funding
            </p>
            <p>and making it more straight forward and merit based.</p>
          </div>
        </div>

        <h1 className="font-medium text-2xl md-[1.688rem] lg:text-[2.313rem] leading-8 md:leading-[2.813rem] text-[#595C63] mt-[3rem] text-center">
          Diversify your portfolio and earn more from{' '}
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
          <div className="bg-[#C1E701]  rounded-[32px] shadow-sm p-[2.375rem]  cursor-pointer max-w-[38rem] md:max-w-[50%]">
            <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem] text-[#000] w-full md:w-[auto] text-center md:text-left ">
              Apply for the next Cohort
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
              Are you creating the next big thing that can take the giant Africa
              out of its negative balance of payment, enhance food security and
              even export to other countries?{' '}
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
          className="bg-[#8B4DED] rounded-[32px] shadow-sm p-[2.375rem] text-white cursor-pointer max-w-[38rem] md:max-w-[50%]"
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

      <div className="mt-[10rem] flex flex-col items-center">
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

      <div className="mt-[10rem] flex flex-col items-center">
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
      </div>
    </div>
  );
};

export default LandingPage;
