import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"; 
//Components
import NavMoreDropdown from "./NavMoreDropdown";

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
         

          <div
            onClick={() => setMoreToggle(!moreToggle)}
            className="lg:block cursor-pointer w-fit border border-red-700"
          >
            <Image
            priority
            src="/images/kebab.svg"
            className=""
            height={48}
            width={48}
            alt="logo"
          />
          </div>
        </div>
      </nav>

      <NavMoreDropdown moreToggle={moreToggle} setMoreToggle={setMoreToggle} />
    </>
  );
};

export default Navbar;
