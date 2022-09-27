import Link from "next/link";
import React from "react";
import { useForm } from "@formcarry/react";
import { useState } from "react";
import { getCurrentDate } from "../components/date";
import UploadFile from "./uploadfile";

const SupplierForm = () => {
  const inputStyles =
    "mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ";

  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState("");
  const [upload, setUpload] = useState("");

  const handleFileUpload = (e) => {
    setUpload(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(upload);

    const form = {
      date,
      firstName,
      lastName,
      email,
      category,
      location,
      file,
    };

    var test = await UploadFile(upload);
    setDate(getCurrentDate());

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content);
    console.log(date);
    console.log(getCurrentDate());
    console.log(test);

    // setDate(" ");
    setFirstName(" ");
    setLastName(" ");
    setEmail(" ");
    setCategory(" ");
    setLocation(" ");
    // setFile(" ");
  };

  return (
    <div className='flex px-10 lg:px-0 w-full justify-center'>
      <div className='mt-[7.75rem] lg:w-1/3'>
        <h1 className="font-medium text-[32px] leading-[48px] font-['Sharp_Grotesk']">
          Please Fill out the required information
        </h1>
        <form
          // method='POST'
          // accept-charset='UTF-8'
          onSubmit={handleSubmit}
          className=' flex flex-col gap-4 mt-4'
        >
          {/* First Name */}
          <label
            htmlFor='firstName'
            className='font-medium text-lg leading-8 mt-[3rem]'
          >
            First Name <span className='text-[#EC1B1B]'>*</span>
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            name='firstName'
            id='firstName'
            value={firstName}
            type='text'
            required
            className={inputStyles}
          />

          {/* Hidden */}
          <input type='hidden' name='_gotcha' id='_gotcha' />

          {/* Last Name */}
          <label htmlFor='lastName' className='font-medium text-lg leading-8'>
            Last Name <span className='text-[#EC1B1B]'>*</span>
          </label>
          <input
            name='lastName'
            id='lastName'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type='text'
            required
            className={inputStyles}
          />

          {/* Email */}
          <label htmlFor='email' className='font-medium text-lg leading-8'>
            Email <span className='text-[#EC1B1B]'>*</span>
          </label>
          <input
            name='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            required
            className={inputStyles}
          />

          {/* Category */}
          <label htmlFor='category' className='font-medium text-lg leading-8'>
            Category <span className='text-[#EC1B1B]'>*</span>
          </label>
          <p className='font-light'>
            Please select the corresponding market to the produce you want to
            mint. If you cant find your produce , please select the other market
            option.
          </p>
          <select
            name='category'
            id='category'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type='text'
            className={inputStyles}
          />

          {/* Location */}
          <label htmlFor='location' className='font-medium text-lg leading-8'>
            Location <span className='text-[#EC1B1B]'>*</span>
          </label>
          <input
            name='location'
            id='location'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type='text'
            required
            className={inputStyles}
          />

          {/* Business Registration */}
          <label htmlFor='password' className=''>
            <p className='font-medium text-lg leading-8'>
              Business Registration <span className='text-[#EC1B1B]'>*</span>
            </p>
            <p className='font-light mb-6'>
              upload a document of proof of registered farm or export business
            </p>
            <span className='sr-only'>Upload export certificates</span>
            <input
              type='file'
              onChange={(e) => handleFileUpload(e)}
              placeholder='Upload export certificates'
              className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-ag-green hover:file:bg-green-100'
            />
          </label>

          <button
            type='submit'
            className='bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-[11.5rem]'
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupplierForm;
