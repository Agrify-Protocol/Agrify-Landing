import Image from 'next/image';

const Modal = ({ show, onClose }) => {
  return (
    //  Main modal
    <>
      <div
        class={`modal fade fixed inset-0 z-[10000] bg-gray-600 bg-opacity-50 top-0 left-0 show w-full h-full outline-none overflow-x-hidden overflow-y-auto ${
          !show && 'hidden'
        }`}
        id="exampleModalCenter"
        tabindex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
        onClick={onClose}
      >
        <div
          class="modal-dialog modal-dialog-centered relative modal-lg pointer-events-none md:max-w-[90%] lg:max-w-[80%] xl:max-w-[60%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-body relative p-4 flex justify-between items-center py-[4.5rem] px-[4rem] gap-6 flex-wrap md:flex-nowrap overflow-hidden">
              <div className="flex flex-col gap-[1.5rem] md:basis-2/4">
                <h1 className="font-medium text-[1.688rem] md:text-[2.5rem] leading-8 md:leading-[3rem]   w-[23.375rem]">
                  Learn, Earn, and Grow
                </h1>
                <p className=" text-base md:text-[1.125rem] leading-5 md:leading-[1.488rem]  ">
                  The Agrify community is opening rails for anyone to eas jump
                  into the budding and dynamic blockchain space.
                </p>
                <p className="text-base leading-6 font-medium bg-[#F2F2F2] py-[1rem] px-[3rem] w-[12.375rem] rounded-[32px]">
                  Coming Soon
                </p>
              </div>
              <div className="shrink-0 md:basis-2/4">
                <Image
                  priority
                  src="/images/why-crypto.svg"
                  className=""
                  height={281.34}
                  width={267}
                  alt="why crypto?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
