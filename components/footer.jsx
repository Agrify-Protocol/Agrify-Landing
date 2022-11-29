import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full items-start p-10 lg:p-20  bg-white mt-14">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start">
          {/* <div className=" hidden md:flex flex-col">
            <p className="text-md md:text-[28px] font-light lg:w-[500px] py-4 text-left text-[#666]">
              join our telegram community to learn more about agrify
            </p>
            <a
              href="https://t.me/+LzukavSm-9MxY2Y8"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" p-3 lg:py-4 px-14 bg-[#02270F] text-white border-black border-[1px] lg:w-fit my-6 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]">
                join us on telegram
              </button>
            </a>
          </div> */}
          <div className="flex flex-col md:flex-row gap-[2rem] w-fit justify-between">
            <div>
              <h4 className="font-semibold py-2 text-[#0CC14C]">Product</h4>
              <Link
                href="https://marketplace.agrifyafrica.xyz/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="py-2 hover:text-ag-green cursor-pointer">Invest</p>
              </Link>
              <Link href="/suppliers">
                <p className="py-2 hover:text-ag-green cursor-pointer">Cohort</p>
              </Link>
              <Link href="/suppliers">
                <p className="py-2 hover:text-ag-green cursor-pointer">Learn</p>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold py-2 text-[#0CC14C]">Connect</h4>
              <a 
                href="https://t.me/+LzukavSm-9MxY2Y8"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ag-green "
              >
                telegram
              </a>
              <a 
                href=" https://twitter.com/agrifyafrica"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ag-green "
              >
                twitter
              </a>
              <a 
                href="https://www.instagram.com/agrifyafrica/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ag-green "
              >
                instagram
              </a>
              <a href="mailto:contactagrify@gmail.com" className="hover:text-ag-green ">
                email
              </a>
            </div>
            {/* <div>
              <h4 className='font-semibold py-2'>Company</h4>
              <p className='py-2'>about</p>
              <p className='py-2'>support</p>
            </div> */}
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-end mt-20">
          <Image width={200} height={100} src="/images/logo.svg" alt="logo"/>
        </div>
      </div>
      <div className="block h-fit w-full bg-white">
        <img src="/images/roots.svg" className="w-full" />
      </div>
    </>
  );
};

export default Footer;
