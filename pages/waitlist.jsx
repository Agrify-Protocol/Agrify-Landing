import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Waitlist = () => {
  return (
    <div className="">
      <Navbar isBlack={true} isTransparent />
      <div className="flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] h-[18.75rem]">
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
            {/* <img src="/images/side-image-lg.svg" alt="" height="100%" /> */}
          </div>
          <h1 className=" absolute top-[10.938rem] md:top-[5.938rem] lg:top-[12.538rem] font-semibold md:left-32 lg:left-14 text-[1.688rem]  md:text-5xl leading-[2.5rem] leading-[3.5rem] text-[#595C63] text-center max-w-[33.375rem] px-[1rem] md:px-0">
            Join our waitlist to be a part of a new Africa{' '}
          </h1>
        </div>
        <div className="w-[100%] md:w-[50%] md:pl-[8rem]">
          <div className="mt-[16rem] md:mt-[11rem]  pb-[9.438rem] ">
            <h1 className="font-medium text-center text-xl leading-6 text-[#59C43A]">
              Waitlist
            </h1>
            <form className=" flex flex-col gap-4 mt-4 px-[1.688rem] md:px-0 w-[100%] md:w-[34.75rem]">
              <label
                htmlFor="firstName"
                className="font-medium text-lg leading-8"
              >
                Full Name <span className="text-[#EC1B1B]">*</span>
              </label>
              <input
                type="text"
                className={` bg-white outline-none block w-[100%] p-3 rounded-[13px]`}
              />
              <label htmlFor="email" className="font-medium text-lg leading-8">
                Email Address <span className="text-[#EC1B1B]">*</span>
              </label>
              <input
                type="email"
                className={` bg-white outline-none  p-3 rounded-[13px]`}
                id="email"
              />
              <label
                htmlFor="password"
                className="font-medium text-lg leading-8"
              >
                Location <span className="text-[#EC1B1B]">*</span>
              </label>
              <input
                type="text"
                className={` bg-white outline-none p-3 rounded-[13px]`}
                id="password"
              />
              <Link href="/waitlist-success">
                <a>
                  <button className=" h-[3.5rem] rounded-[32px] py-[1rem] px-[3rem] bg-[#0CC14C] mt-[3rem]">
                    <p className="text-white leading-6 font-medium ">
                      Join Waitlist
                    </p>
                  </button>
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
