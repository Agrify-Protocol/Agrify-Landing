import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const WaitlistSuccess = () => {
  return (
    <>
      <Navbar isBlack={true} isTransparent />
      <div className="flex flex-col md:flex-row gap-[5rem] md:gap-0 ">
        <div className="w-[100%] md:w-[50%] h-[18.75rem] md:h-full">
          <div className="relative">
            <img src="/images/side-image.svg" alt="" height="100%" />
          </div>
          <h1 className=" absolute top-[10.938rem] font-semibold text-[1.688rem]  md:text-5xl leading-[2.5rem] leading-[3.5rem] text-[#595C63] text-center max-w-[37.375rem] px-[1rem] md:px-0">
            Join our waitlist to be a part of a new Africa{" "}
          </h1>
        </div>
        <div className="w-[100%] md:w-[50%] md:pl-[3rem]">
          <div className="flex flex-col justify-center items-center mt-[10rem] gap-[1.5rem] text-center">
            <div className="">
              <Image
                priority
                src="/images/check.svg"
                className="block mx-auto"
                height={20}
                width={20}
                alt=""
              />
            </div>
            <h2 className="font-medium text-xl leading-6 text-[#000] text-center">
              You’re In!
            </h2>
            <p className="leading-[1.688rem] text-[#302F2D] text-xl w-[21rem]">
              You are on the private alpha waitlist! Invite friends to move up
              the line.
            </p>
            <button className="w-[14.125rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[2rem] bg-[#0CC14C]">
              <div className="flex items-center justify-center gap-3">
                <div className="m-0 p-0 ">
                  <Image
                    priority
                    src="/images/twitter.svg"
                    className=""
                    height={17}
                    width={20.92}
                    alt=""
                  />
                </div>
                <p className="text-white leading-6 font-medium m-0 p-0">
                  Tweet It
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitlistSuccess;
