import Image from "next/image";
import Link from "next/link";

const WaitlistSuccess = () => {
  return (
    <div className="flex ">
      <div className="w-[50%] h-full">
        <div className="relative">
          <img src="/images/side-image.svg" alt="" height="100%" />
        </div>

        <h1 className=" absolute top-[10.938rem] font-semibold text-5xl leading-[3.5rem] w-[37.375rem] text-[#595C63] text-center">
          Join our waitlist to be a part of a new Africa{" "}
        </h1>
      </div>
      <div className="w-[50%] pl-[3rem]">
        {/* <div className="mt-[11rem]  pb-[9.438rem]">
          <h1 className="font-medium text-xl leading-6 text-[#59C43A]">
            Waitlist
          </h1>
          <form className=" flex flex-col gap-4 mt-4">
            <label
              htmlFor="firstName"
              className="font-medium text-lg leading-8"
            >
              Full Name <span className="text-[#EC1B1B]">*</span>
            </label>
            <input
              type="text"
              className={` bg-white outline-none w-[34.75rem] p-3 rounded-[13px]`}
            />
            <label htmlFor="email" className="font-medium text-lg leading-8">
              Email Address <span className="text-[#EC1B1B]">*</span>
            </label>
            <input
              type="email"
              className={` bg-white outline-none w-[34.75rem] p-3 rounded-[13px]`}
              id="email"
            />

            <label htmlFor="password" className="font-medium text-lg leading-8">
              Location <span className="text-[#EC1B1B]">*</span>
            </label>
            <input
              type="text"
              className={` bg-white outline-none w-[34.75rem] p-3 rounded-[13px]`}
              id="password"
            />

            <Link href="/seller/seller-signedin-homepage">
              <a>
                <button className="w-[34.75rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[3rem] bg-[#0CC14C] mt-[3rem]">
                  <p className="text-white leading-6 font-medium ">
                    Join Waitlist
                  </p>
                </button>
              </a>
            </Link>
          </form>
        </div> */}

        <div className="flex flex-col justify-center items-center mt-[10rem] gap-[1.5rem]">
            <div className="">
              <Image
                priority
                src="/images/check.svg"
                className=""
                height={20}
                width={20}
                alt=""
              />
            </div>
            <h2 className="font-medium text-xl leading-6 text-[#000]">You’re In!</h2>
            <p className="leading-[1.688rem] text-[#302F2D] text-xl w-[21rem]">
              You are on the private alpha waitlist! Invite friends to move up the
              line.
            </p>
            <button className="w-[12.125rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[3rem] bg-[#0CC14C]">
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
                <p className="text-white leading-6 font-medium m-0 p-0">Tweet It</p>
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistSuccess;
