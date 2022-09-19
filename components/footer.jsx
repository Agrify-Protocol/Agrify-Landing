import Image from "next/image";

const Footer = () => {
  return (
    <div className='w-full items-start p-10 lg:p-20  bg-white mt-14'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-start'>
        <div className='flex flex-col'>
          <p className='text-md md:text-[20px] py-4 text-center text-[#666]'>
            join our telegram community to learn more about agrify
          </p>
          <button className=' p-3 lg:py-4 px-14 bg-[#02270F] text-white border-black border-[1px] lg:w-fit my-6 text-sm hover:text-white hover:border-[#0CC14C] hover:bg-[#0CC14C] rounded-[50px]'>
            join us on telegram
          </button>
        </div>
        <div className='flex flex-col md:flex-row gap-[2rem] w-1/4 justify-between'>
          <div>
            <h4 className='font-semibold py-2'>Product</h4>
            <p className='py-2'>marketplace</p>
            <p className='py-2'>supplier hub</p>
          </div>
          <div>
            <h4 className='font-semibold py-2'>Connect</h4>
            <p className='py-2'>telegram</p>
            <p className='py-2'>twitter</p>
            <p className='py-2'>instagram</p>
            <p className='py-2'>email</p>
          </div>
          <div>
            <h4 className='font-semibold py-2'>Company</h4>
            <p className='py-2'>about</p>
            <p className='py-2'>support</p>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end mt-20'>
        <Image width={200} height={100} src='/images/logo.svg' />
      </div>
    </div>
  );
};

export default Footer;
