import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const SellerSignIn = () => {
  const inputStyles =
    "mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ";
  return (
    <div className='flex w-full pb-[12.75rem] gap-[4.313rem]'>
      <div className='hidden fixed bg-[#93E46B] lg:flex flex-col items-center w-[22.93rem] h-full'>
        <h1 className='mt-[14.75rem] text-2xl leading-10 font-extrabold font-[Roses]'>
          Exporter Sign Up
        </h1>
        <div className='mt-[5rem] '>
          <Image
            priority
            src='/images/man-with-nut.svg'
            className=''
            height={200.61}
            width={135.34}
            alt='illustration'
          />
        </div>
      </div>

      <div className='w-full lg:ml-[22.93rem] p-8 md:p-10 lg:p-[5rem]'>
        <div className='flex justify-between'>
          <Link href='/seller-signup'>
            <BiArrowBack className='cursor-pointer' size={28} />
          </Link>
          <a className='cursor-pointer text-slate-400'>Sign In</a>
        </div>

        <div className='mt-[7.75rem] lg:w-1/2'>
          <h1 className="font-medium text-[32px] leading-[48px] font-['Sharp_Grotesk']">
            Book a call with us
          </h1>
          <p className='text-lg leading-6 lg:w-[51rem] mt-[3rem] text-[#666666] break-words'>
            Sit lobortis tempus turpis viverra. Egestas magna neque, nibh eu at
            ante enim. Sed nibh sit elit etiam lacus enim quam at.
          </p>

          <Link href='/book-a-call'>
            <a>
              <button className='bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-[11.5rem]'>
                Next
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerSignIn;
