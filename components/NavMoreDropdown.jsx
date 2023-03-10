import Link from "next/link";

//Components
import { VscChromeClose } from "react-icons/vsc";

const NavMoreDropdown = ({ moreToggle, setMoreToggle }) => {
  return (
    <div
      className={
        "duration-500 flex flex-col justify-between items-center fixed left-0 top-0 w-screen h-screen z-[10000] py-[1.5rem] px-[2.5rem] md:py-[3rem] md:px-[5rem] " +
        (moreToggle
          ? "pointer-events-auto bg-white left-[0]"
          : "pointer-events-none bg-white/0 left-[-100vw]")
      }
    >
      <div className="w-full right-[30px] top-[30px] flex justify-between  items-center">
        <Link href="/" className="inline-block">
          <a>
            <img className="w-[8.5rem]" alt="logo" src="/images/logo.svg" />
          </a>
        </Link>

        <div className="justify-self-end w-fit ">
          <VscChromeClose
            onClick={() => setMoreToggle(false)}
            className="cursor-pointer justify-self-end  "
            size={28}
          />
        </div>
      </div>
      <div className="rounded-[1.2rem] flex flex-col items-left border-box gap-[2.5rem] ">
        <div className="">
          <div>
            <a
              href="https://marketplace.agrifyafrica.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className=" cursor-pointer w-fit text-[40px] py-1 hover:text-ag-green ">
                Marketplace
              </h1>
            </a>
            <Link href="/cohort">
              <h1 className="text-[40px] w-fit text-slate-300 py-1">Invest</h1>
            </Link>
            <a
              href="https://agrify-africa.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="cursor-pointer w-fit text-[40px] py-1 hover:text-ag-green">Learn</h1>
            </a>
          </div>
        </div>
        <div className="flex gap-[1rem] w-fit mt-12 text-[#666666]">
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
          <a
            href="https://t.me/+LzukavSm-9MxY2Y8"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ag-green"
          >
            telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMoreDropdown;
