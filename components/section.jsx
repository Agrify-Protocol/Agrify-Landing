import Image from "next/image";

const InvestmentSection = () => {
  return (
    <div className='w-full  flex flex-col items-center pt-10 lg:pt-20 pb-10 bg-white rounded-[24px]'>
      <h1 className=' text-2xl text-center p-4 lg:text-[40px]'>
        taking agricultural trade to the blockchain
      </h1>
      <p className='text-md md:text-[20px] py-4 text-center text-[#666] w-10/12 md:w-8/12 lg:w-1/3'>
        we’re building a new way to verify produce origin and supply on chain,
        making global agricultural trade faster and more secure
      </p>

      <button className=' p-3 lg:p-4 border-black border-[1px] w-10/12 md:w-1/2 lg:w-1/5 m-6 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]'>
        see our investment deck
      </button>
      <div className='w-full flex items-end justify-between relative'>
        <Image width={300} height={300} src='/images/hand-left.svg' />
        <Image width={300} height={300} src='/images/hand-right.svg' />
      </div>
    </div>
  );
};

export default InvestmentSection;
