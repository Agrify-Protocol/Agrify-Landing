import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SupplierForm from "./seller-signup";

const LandingPage = () => {
  return (
    <div className=''>
      <Navbar isBlack={true} />
      <div className='block bg-[#E1EBDC] h-[800px] flex flex-col lg:flex-row justify-between p-10 md:p-20 pt-[150px] '>
        <div className='top-[120px] lg:top-[180px] w-full lg:w-[520px] flex flex-col items-center lg:items-start justify-center z-50'>
          <h1 className=' text-[30px] md:text-[40px] lg:text-[48px] leading-[32px] md:leading-[52px] w-full py-3 text-[#011308] text-center lg:text-left'>
            join agrify as a supplier
          </h1>
          <p className='text-center lg:text-left'>
            We use crypto to ensure that payments are processed and delivered
            speedily. You can then decide to convert your payment to a
            cryptocurrency or fiat currency of your choice.
          </p>
          <Link href='/seller-signup'>
            <button className=' p-3 px-12 lg:px-14 mt-6 lg:mt-12 text-white hover:text-white bg-[#011308] hover:bg-ag-green rounded-[50px]'>
              start verification
            </button>
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
      <SupplierForm />
      <div className='mb-10'></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
