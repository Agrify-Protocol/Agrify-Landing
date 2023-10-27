/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "../components/navbar";

const RequestDemoSuccess = () => {
  return (
    <div>
      <Navbar isBlack={true} className="bg-[#E1EBDC]" />

      <div className="h-[900px] flex flex-col lg:flex-row  mt-[15rem] px-6 md:px-8 lg:px-20 pb-[4rem] md:pb-[7rem] lg:pb-[4rem]">
        <div className="top-[120px] lg:top-[180px] hidden lg:block">
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
          <div className="flex flex-col  w-full">
            <div className="flex justify-center">
              <Image
                priority
                src="/images/check.svg"
                className=""
                height={25.36}
                width={25.36}
                alt="request demo success"
              />
            </div>
            <h1 className="font-medium text-[1.5rem]  md:text-[1.575rem] leading-[1.95rem] md:leading-[2.047rem] w-full py-3 text-center">
              Demo Request Received
            </h1>
            <p className="text-center text-[0.875rem] md:text-[1.05rem] leading-[1.225rem] md:leading-[1.47rem] text-[#6E6E73] ">
              Thank you , Your demo request has been received. We'll be in touch
              shortly.
            </p>
            <div className="flex justify-center items-center mt-[2rem]">
              <hr className="max-w-[8.75rem] text-[#3c4257]" />
              <p className="text-center text-[0.875rem] md:text-[1rem] leading-[1.225rem] md:leading-[1.5rem] text-[#8792a2] ">
                Stay Updated
              </p>
              <hr className="max-w-[8.75rem] text-[#3c4257]" />
            </div>
            <div className="flex justify-center items-center mt-[1.5rem]">
              <a
                href="https://www.linkedin.com/company/agrify-technologies/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  priority
                  src="/images/linkedin.svg"
                  className=""
                  height={52.61}
                  width={52.61}
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://www.instagram.com/agrifyafrica/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  priority
                  src="/images/instagram.svg"
                  className=""
                  height={52.61}
                  width={52.61}
                  alt="Instagram"
                />
              </a>

              <a
                href="https://t.me/+LzukavSm-9MxY2Y8"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  priority
                  src="/images/telegram-r.svg"
                  className=""
                  height={52.61}
                  width={52.61}
                  alt="Telegram"
                />
              </a>
              <a
                href=" https://twitter.com/agrifyafrica"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  priority
                  src="/images/twitter-r.svg"
                  className=""
                  height={52.61}
                  width={52.61}
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoSuccess;
