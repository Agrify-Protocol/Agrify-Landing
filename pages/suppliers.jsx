import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const LandingPage = () => {
  const isBlack = true;
  return (
    <div className=''>
      <Navbar isBlack={isBlack} />
      <div className='block bg-[#E1EBDC] h-[800px] flex flex-col lg:flex-row justify-between p-10 md:p-20 pt-[150px] '>
        <div className='top-[120px] lg:top-[180px] w-full lg:w-[520px] flex flex-col items-center lg:items-start justify-center z-50'>
          <h1 className=' text-[30px] md:text-[40px] lg:text-[48px] leading-[32px] md:leading-[52px] w-full py-3 text-[#011308] text-center lg:text-left'>
            join agrify as a supplier
          </h1>
          <p className='text-center lg:text-left'>
            We use crypto to ensure that payments are processed and delivered
            speedily. You can then decide to convert your payment to a
            cryptocurrency or fiat currency of your choice.{" "}
          </p>
          <Link href='#explore'>
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

      <div className='w-full  flex flex-col items-center py-20 bg-white rounded-[24px]'>
        <h1 className=' text-[27px] leading-[30px] text-center p-4 lg:text-[40px] font-[Roses]'>
          Be a part of the crypto economy
        </h1>
        <p className='text-md md:text-[20px] py-4 text-center text-[#666] w-10/12 md:w-8/12 xl:w-1/3'>
          Gravida at lobortis nec, massa. Et convallis ut neque quis vitae
          tincidunt augue risus. Volutpat id ullamcorper ut amet, ultricies
          quis. Sagittis eros non lorem enim dictumst. Interdum lorem facilisis
          integer arcu. Volutpat scelerisque egestas platea vitae. Vitae
          vulputate eget scelerisque cursus habitant mi sit. Aliquet maecenas ac
          posuere porta quis.
        </p>

        <button className=' p-3 lg:p-4 w-10/12 md:w-1/2 lg:w-1/5 m-6 font-light text-sm text-white hover:text-white bg-[#011308] hover:bg-[#0CC14C] rounded-[50px]'>
          start verification
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
