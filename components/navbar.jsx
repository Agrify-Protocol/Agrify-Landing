import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"; 
//Components
import NavMoreDropdown from "./NavMoreDropdown";
import { BsThreeDots } from "react-icons/bs";

const Navbar = ({
  isBlack,
  showWaitlistBtn = false,
  isTransparent = false,
}) => {
  const [moreToggle, setMoreToggle] = useState(false);

  // All states
  const [sticky, setSticky] = useState(false);
  const [stickyInview, setStickyInview] = useState(false);
  const [duration, setDuration] = useState(false);

  // Mount the Event Listener on loading the site
  useEffect(() => {
    const handleScroll = () => {
      // Set the boolean value
      setSticky(window.scrollY >= 100);
      setDuration(window.scrollY >= 200);
      setStickyInview(window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);
    // Remove the listener when cleaning up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (moreToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [moreToggle]);

  const isSticky = () => {
    var classes =
      "fixed w-full top-0 z-[8000] ease-in-out flex px-[1rem] md:px-[2rem] py-[2rem] lg:px-[4rem] lg:py-[3.125rem] items-center justify-between";
    if (sticky) {
      classes =
        "top-0 z-[9900] w-full flex px-[1rem] md:px-[2rem] py-[1rem] lg:px-[4rem] lg:py-[1rem] items-center justify-between invisible fixed translate-y-[-200px] bg-white";
    }

    if (duration) {
      classes =
        "invisible fixed top-0 z-[9900] duration-[2s] w-full flex px-[1rem] md:px-[2rem] py-[1rem] lg:px-[4rem] lg:py-[1rem] items-center justify-between translate-y-[-200px] bg-white";
    }

    if (stickyInview) {
      classes =
        "visible fixed top-0 z-[9900] duration-1000 w-full flex px-[1rem] md:px-[2rem] py-[1rem] lg:px-[4rem] lg:py-[1rem] items-center justify-between translate-y-[-200px] bg-white flex translate-y-[0px]";
    }

    return classes;
  };

  return (
    <>
      <nav
        className={`${isSticky()}  ${isTransparent ? "lg:bg-transparent" : ""}`}
      >
        <Link href="/">
          <Image
            priority
            src="/images/logo-nav.svg"
            className=""
            height={48}
            width={123.26}
            alt="logo"
          />
        </Link>
        <div className="flex items-center justify-end  gap-6">
          {showWaitlistBtn && (
            <Link href="/waitlist">
              <button className="hidden md:block w-[10.688rem] h-[3.5rem] rounded-[32px] py-[1rem] px-[2rem] bg-[#011308] mt-[2rem] hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C]">
                <p className="text-white leading-6 font-medium ">
                  Join Waitlist
                </p>
              </button>
            </Link>
          )}

          <div
            onClick={() => setMoreToggle(!moreToggle)}
            className="lg:block cursor-pointer w-fit"
          >
            <BsThreeDots className="text-black" size={32} />
          </div>
        </div>
      </nav>

      <NavMoreDropdown moreToggle={moreToggle} setMoreToggle={setMoreToggle} />
    </>
  );
};

export default Navbar;
