import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const BookACall = () => {
  return (
    <div className=''>
      <Navbar isBlack={true} />
      <div className='block bg-[#E1EBDC] h-screen flex flex-col lg:flex-row justify-between p-10 md:p-20 pt-[150px] '>
        <div className='top-[120px] lg:top-[180px] w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center z-50'>
          <h1 className="font-medium text-[32px] leading-[48px] font-['Sharp_Grotesk']">
            next step; book a call
          </h1>
          <p className='text-lg leading-6 w-full mt-[2rem] text-[#666666] break-words'>
            you information has been received succesfully, the next step is to
            book a call with our representative to properly onboard you to our
            platform
          </p>

          <Link href='https://calendly.com/agrifyafrica/agrify-supplier-onboarding'>
            <a target='_blank'>
              <button className='bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-[11.5rem]'>
                book a call
              </button>
            </a>
          </Link>
        </div>

        <div className='block p-10 lg:p-20'>
          <Image
            src='/images/man.svg'
            className='block'
            width={372}
            height={539.37}
          />
        </div>
      </div>
    </div>
  );
};

export default BookACall;
