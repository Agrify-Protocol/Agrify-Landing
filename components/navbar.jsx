import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//Components
import NavMoreDropdown from "./NavMoreDropdown";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  const [moreToggle, setMoreToggle] = useState(true);

  return (
    <nav className='absolute z-[10000] w-full flex px-[1rem] md:px-[2rem] py-[2rem] lg:px-[4rem] lg:py-[3.125rem] items-center justify-between'>
      <Link href='/'>
        <a>
          <picture>
            <img
              className='w-[8.5rem]'
              alt='logo'
              src='/images/logo-white.svg'
            />
          </picture>
        </a>
      </Link>

      <div className='flex items-center'>
        <Link href='/'>
          <a>
            <button className='px-8 py-2 mx-10 rounded-[3rem] text-white text-sm bg-black'>
              explore
            </button>
          </a>
        </Link>

        <div
          onClick={() => setMoreToggle(!moreToggle)}
          className='hidden lg:block cursor-pointer'
        >
          <BsThreeDots className='text-black' size={30} />
        </div>
        <NavMoreDropdown
          moreToggle={moreToggle}
          setMoreToggle={setMoreToggle}
        />
      </div>
    </nav>
  );
};

export default Navbar;
