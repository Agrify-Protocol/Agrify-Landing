import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
      <div className='block'>
        <div className='absolute top-[120px] lg:top-[180px] w-full flex flex-col items-center align-center justify-center z-50'>
          <h1 className=' text-[30px] md:text-[40px] leading-[32px] md:leading-[52px] w-full md:w-7/12 lg:text-[60px] text-white text-center'>
            welcome to the future of agriculture
          </h1>
          <Link href='https://agrify-africa.netlify.app/'>
            <button className=' p-3 px-12 lg:px-14 mt-6 lg:mt-12 text-[#0ABA43] hover:text-white bg-white hover:bg-black rounded-[50px]'>
              explore
            </button>
          </Link>
        </div>

        <div className='block h-screen'>
          <Image
            src='/images/backdrop.svg'
            className='block'
            layout='fill'
            objectFit='cover'
            objectPosition='55% 10%'
            quality={100}
          />
        </div>
      </div>
      <div className='p-10 lg:p-14'>
        <div className='flex flex-col lg:flex-row justify-between gap-10'>
          <div className='lg:w-1/2 p-10 bg-[#F3FDD7] rounded-[1rem]'>
            <h1 className='text-2xl py-4 md:text-[40px]'>
              shop organic produce
            </h1>
            <p>
              join our community of suppliers, and boost your income by
              discovering new markets that need your organic produce.
            </p>
            <Link href='https://agrify-africa.netlify.app/'>
              <button className=' p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 lg:w-1/3 my-6 md:mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]'>
                go to marketplace
              </button>
            </Link>
            <div>
              <img className='float-right' src='/images/nut.svg' alt='' />
            </div>
          </div>
          <div className='lg:w-1/2 p-10 bg-[#FFFAD7] rounded-[1rem]'>
            <h1 className='text-2xl py-4 md:text-[40px]'>join as a supplier</h1>
            <p>
              we’ve curated a community of small and large quantity organic
              produce suppliers, who are dedicated to safe and timely deliveries
              of produce across international borders
            </p>
            <button className=' p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 lg:w-1/3 mt-12 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]'>
              start verification
            </button>
            <img className='float-right' src='/images/man.svg' alt='' />
          </div>
        </div>

        <div className='w-full  flex flex-col my-10 items-center pt-10 lg:pt-20 pb-10 bg-white rounded-[24px]'>
          <h1 className=' text-2xl text-center p-4 lg:text-[40px]'>
            taking agricultural trade to the blockchain
          </h1>
          <p className='text-md md:text-[20px] py-4 text-center text-[#666] w-10/12 md:w-8/12 lg:w-1/3'>
            we’re building a new way to verify produce origin and supply on
            chain, making global agricultural trade faster and more secure
          </p>

          <button className=' p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 lg:w-1/5 m-6 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]'>
            see our investment deck
          </button>

          <div className='w-full flex items-end justify-between relative'>
            <Image width={300} height={300} src='/images/hand-left.svg' />
            <Image width={300} height={300} src='/images/hand-right.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
