import Link from "next/link";
import { useState } from "react";

//Components
import { MdArrowForwardIos } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const NavMoreDropdown = ({ moreToggle, setMoreToggle }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={
        "duration-500 fixed left-0 top-0 w-screen h-screen z-[10000] " +
        (moreToggle
          ? "pointer-events-auto backdrop-blur bg-white/60"
          : "pointer-events-none backdrop-none bg-white/0")
      }
    >
      <div
        className={
          "duration-500 delay-800 absolute right-[60px] bg-white shadow-lg rounded-[1.2rem] flex flex-col items-left border-box gap-[2.5rem] py-10 px-8 w-[300px] " +
          (moreToggle ? "top-[60px]" : "top-[-600px]")
        }
      >
        <div className='w-full flex justify-end'>
          <VscChromeClose
            onClick={() => setMoreToggle(false)}
            className='cursor-pointer'
            size={28}
          />
        </div>
        <div>
          <p className='text-xl font-semibold py-2'>Inquiries</p>
          <p className='text-xl font-semibold py-2'>Settings</p>
          <p className='text-xl font-semibold py-2'>How it works</p>
          <p className='text-xl font-semibold py-2'>Blog</p>
          <p className='text-xl font-semibold py-2'>Help Center</p>
        </div>
        <Link href='/'>
          <div
            onClick={() => setMoreToggle(false)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='flex cursor-pointer p-4 justify-between w-full'
          >
            <p className='text-xl font-bold'>Sign Out</p>
            <MdArrowForwardIos
              className={hover ? "animate-slideright" : " "}
              size={22}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavMoreDropdown;
