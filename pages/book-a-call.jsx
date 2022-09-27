import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const BookACall = () => {
  return (
    <div className='flex w-full'>
      <div className='mt-[7.75rem] text-center flex flex-col items-center lg:w-full'>
        <h1 className="font-medium text-[32px] leading-[48px] font-['Sharp_Grotesk']">
          next step; book a call
        </h1>
        <p className='text-lg leading-6 lg:w-1/2 mt-[2rem] text-[#666666] break-words'>
          you information has been received succesfully, the next step is to
          book a call with our representative to properly onboard you to our
          platform
        </p>

        <Link href='/book-a-call'>
          <a>
            <button className='bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-[11.5rem]'>
              book a call
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BookACall;
