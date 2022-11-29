import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const Modal = ({ show, onClose }) => {
  // if (!props.show) {
  //   return null;
  // }
  // useEffect(() => {
  //   if (show) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'unset';
  //   }
  // }, [show]);

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
          class="modal-dialog modal-dialog-centered relative modal-lg pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-body relative p-4 flex justify-between items-center py-[4.5rem] px-[4rem] flex-wrap">
              <div className="flex flex-col gap-[1.5rem]">
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
              <div className='shrink-0'>
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
  // return (
  //   <div
  //     className="bg-white w-[70%] my-0 mx-auto rounded-[32px] py-[4.5rem] px-[4rem] flex justify-between items-center "
  //     onClick={props.onClose}
  //   >
  //     <div
  //       className="flex flex-col gap-[1.5rem]"
  //       onClick={(e) => e.stopPropagation()}
  //     >
  //       <h1 className="font-medium text-[2.5rem] leading-[3rem]  w-[23.375rem]">
  //         Learn, Earn, and Grow
  //       </h1>
  //       <p className=" text-[1.25rem] leading-[1.688rem] w-[28.563rem] ">
  //         The Agrify community is opening rails for anyone to easily jump into
  //         the budding and dynamic blockchain space.
  //       </p>
  //       <p className="text-base leading-6 font-medium bg-[#F2F2F2] py-[1rem] px-[3rem] w-[12.375rem] rounded-[32px]">
  //         Coming Soon
  //       </p>
  //       <button
  //         onClick={props.onClose}
  //         className="bg-[#f2f2f2]  rounded-lg w-[5rem]"
  //       >
  //         close
  //       </button>
  //     </div>
  //     <div>
  //       <Image
  //         priority
  //         src="/images/why-crypto.svg"
  //         className=""
  //         height={281.34}
  //         width={267}
  //         alt="why crypto?"
  //       />
  //     </div>
  //   </div>
  // );
};

export default Modal;
