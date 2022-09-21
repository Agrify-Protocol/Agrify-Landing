import Link from "next/link";
import { useState } from "react";

//Components
import { MdArrowForwardIos } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const NavMoreDropdown = ({ moreToggle, setMoreToggle }) => {
  return (
    <div
      className={
        "duration-500 flex flex-col justify-between fixed left-0 top-0 w-screen h-screen z-[10000] p-14 " +
        (moreToggle
          ? "pointer-events-auto bg-white left-[0]"
          : "pointer-events-none bg-white/0 left-[-100vw]")
      }
    >
      <div className='w-full right-[30px] top-[30px] flex items-end justify-between'>
        <Link href='/'>
          <a>
            <picture>
              <img className='w-[8.5rem]' alt='logo' src='/images/logo.svg' />
            </picture>
          </a>
        </Link>

        <div className='flex items-center'>
          <VscChromeClose
            onClick={() => setMoreToggle(false)}
            className='cursor-pointer'
            size={28}
          />
        </div>
      </div>
      <div className='rounded-[1.2rem] flex flex-col items-left border-box gap-[2.5rem] '>
        <div>
          <div>
            <Link href='https://agrify-africa.netlify.app/'>
              <p className='text-[40px] font-semibold py-1'>marketplace</p>
            </Link>
            <p className='text-[40px] font-semibold py-1'>
              supplier repository
            </p>
            <p className='text-[40px] font-semibold py-1'>business</p>
          </div>
          <div className='flex gap-4 mt-12 text-[#666666]'>
            <p>twitter</p>
            <p>instagram</p>
            <p>telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMoreDropdown;
