import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const WaitlistSuccess = () => {
  return (
    <>
      <Navbar isBlack={true} isTransparent />
      <div className="flex flex-col lg:flex-row md:items-center lg:items-start">
        <div className="w-[100%] lg:w-[50%] h-[18.75rem] md:h-full">
          <div className="relative">
            <picture>
              <source
                type="image/svg+xml"
                media="(max-width: 600px)"
                srcset="/images/side-image-sm.svg"
              />
              <source
                type="image/svg+xml"
                media="(max-width: 1024px)"
                srcset="/images/side-image-md.svg"
              />
              <source
                type="image/svg+xml"
                media="(min-width: 1024px)"
                srcset="/images/side-image-lg.svg"
              />
              <img
                src="/images/side-image-sm.svg"
                alt="regular pyramid built from four equilateral triangles"
              />
            </picture>
            {/* <img src="/images/side-image.svg" alt="" height="100%" /> */}
          </div>
          <h1 className="absolute top-[10.938rem] md:top-[5.938rem] lg:top-[12.538rem] font-semibold md:left-32 lg:left-14 text-[1.688rem]  md:text-5xl leading-[2.5rem] leading-[3.5rem] text-[#595C63] text-center max-w-[33.375rem] px-[1rem] md:px-0">
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
            <p className="leading-[1.688rem] text-[#302F2D] text-xl max-w-[33.375rem]">
              You are on the private alpha waitlist! <br />
              Join our community to get the latest updates first! ✨
            </p>
            {/* <p className="leading-[1.688rem] text-[#302F2D] text-xl w-[33.375rem] m-0">
              Join our community to get the latest updates first! ✨
            </p> */}
            <a
              href="https://t.me/+LzukavSm-9MxY2Y8"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <button className="w-[14.125rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[2rem] bg-[#26A5E4] flex items-center justify-center gap-2">
                <Image
                  priority
                  src="/images/telegram.svg"
                  className=""
                  height={24}
                  width={24}
                  alt=""
                />
                <span className="text-white leading-6 font-medium m-0 p-0 text-base">
                  Join Telegram
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitlistSuccess;
