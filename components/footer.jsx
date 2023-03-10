import Image from "next/image";
import Link from "next/link"; 

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between  bg-white mt-14 pl-[1rem] lg:p-[5rem] items-start gap-4 py-[4rem]">
        <Link href="/" className="cursor-pointer">
          <a>
            <Image
              width={127}
              height={45.03}
              src="/images/logo.svg"
              alt="logo"
              className="cursor-pointer"
            />
          </a>
        </Link>

        <div className="flex flex-col md:flex-row  w-[17.938rem] ">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold py-2 text-[#999999]">Product</h4>
            <a
              href="https://marketplace.agrifyafrica.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="py-2 hover:text-ag-green cursor-pointer">Marketplace</p>
            </a>
            <Link href="/cohort">
              <p className="py-2 text-slate-300 ">Invest</p>
            </Link>
            <a href="">
              <p className="py-2 text-slate-300">Faq</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold py-2 text-[#999999]">Connect</h4>
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
            {/* <a
              href="mailto:contactagrify@gmail.com"
              className="hover:text-ag-green "
            >
              email
            </a> */}
          </div>
        </div>
      </div>
      <div className="block h-fit w-full bg-white">
        <img src="/images/roots.svg" className="w-full" />
      </div>
    </>
  );
};

export default Footer;
