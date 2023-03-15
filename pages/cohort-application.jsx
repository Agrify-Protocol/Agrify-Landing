import Image from "next/image";
import Link from "next/link";

import Router from "next/router";
import React from "react";
import { useState, useRef } from "react";
import { getCurrentDate } from "../components/date";
import { UploadFile } from "../utils/file-upload";
// import UploadFile from './uploadfile';

const CohortForm = () => {
	const fileUploadRef = useRef(null);
	const inputStyles =
		"mb-3 mt-[-0.5rem] block w-full md:w-[29.75rem] px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 ";

	const [firstName, setFirstName] = useState(" ");
	const [lastName, setLastName] = useState(" ");
	const [email, setEmail] = useState("example@email.com");
	const [phoneNumber, setPhoneNumber] = useState(0);
	const [category, setCategory] = useState(" ");
	const [location, setLocation] = useState(" ");
	const [upload, setUpload] = useState(null);
	// var currentDate;
	// var fileURL;

	const marketOptions = [
		{ id: 1, option: "Fruits", disabled: false },
		{ id: 2, option: "Vegetables", disabled: false },
		{
			id: 3,
			option: "Herbs, Seasoning & Spices",
			disabled: false,
		},
		{ id: 4, option: "Nuts & Seeds", disabled: false },
		{ id: 5, option: "Grains", disabled: false },
		{ id: 6, option: "Seafood", disabled: false },
		{ id: 7, option: "Cocoa products", disabled: false },
		{ id: 8, option: "Coffee & Tea", disabled: false },
		{ id: 9, option: "Legumes & Cereal", disabled: false },
		{ id: 10, option: "Processed Fruits", disabled: false },
		{ id: 11, option: "Packaged Goods", disabled: false },
		{ id: 12, option: "Oil& fats", disabled: false },
		{ id: 13, option: "Food Additives", disabled: false },
		{ id: 14, option: "Dairy", disabled: false },
		{
			id: 15,
			option: "Packaged meat & seafood",
			disabled: false,
		},
		{ id: 16, option: "Agric By-Products", disabled: false },
		{
			id: 17,
			option: "Processed Vegetables",
			disabled: false,
			selected: false,
		},
	];

	const handleFileUpload = (e) => {
		setUpload(e.target.files[0]);
	};

	const handleForm = async (e) => {
		const fileURL = upload ? await UploadFile(upload) : "";
		console.log("uploadResponse", fileURL);

		const form = {
			currentDate: getCurrentDate(),
			firstName,
			lastName,
			email,
			phoneNumber,
			category,
			location,
			fileURL,
		};

		const response = await fetch("/api/submit", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		});

		// const content = await response.json();
		// if (response.status == 200) {
		//   console.log('success');
		// }

		setFirstName(" ");
		setLastName(" ");
		setEmail(" ");
		setPhoneNumber(0);
		setCategory(" ");
		setLocation(" ");

		if (response.status == 200) {
			return true;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isSuccesful = await handleForm(e);
		if (isSuccesful) {
			Router.push("/book-a-call");
		}
	};

	return (
		<div className='flex px-10 lg:px-0 w-full justify-center pb-[7rem] lg:pb-[15rem] md:my-0 md:mx-auto'>
			<div className='mt-[7.75rem] md:w-3/4 lg:w-fit'>
				<h1 className='m-auto text-center font-medium text-[24px] leading-[32px]'>
					Please Fill out the required information
					<span className='text-[#EC1B1B]'>*</span>
				</h1>
				<input type='file' onChange={(e) => handleFileUpload(e)} required className='hidden' ref={fileUploadRef} />
				<form method='POST' accept-charset='UTF-8' onSubmit={handleSubmit} className=' flex flex-col gap-4 mt-4'>
					{/* First Name */}
					<label htmlFor='firstName' className='font-medium text-lg leading-8 mt-[3rem]'>
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
					<input name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} type='email' required className={inputStyles} />

					{/* Phone Number */}
					<label htmlFor='phoneNumber' className='font-medium text-lg leading-8'>
						Phone Number <span className='text-[#EC1B1B]'>*</span>
					</label>
					<input
						name='phoneNumber'
						id='phoneNumber'
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
						type='tel'
						required
						className={inputStyles}
					/>

					{/* Category */}
					<label htmlFor='category' className='mb-[-1rem] font-medium text-lg leading-8'>
						Category <span className='text-[#EC1B1B]'>*</span>
					</label>
					<p className='text-[#666666] text-sm leading-6 font-normal'>please select the category of produce you want to sell on agrify.</p>
					<select
						name='category'
						id='category'
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						type='text'
						className={inputStyles}
						required
					>
						<option defaultValue={true}>Select Your Option</option>
						{marketOptions.map((option) => {
							return (
								<option key={option.id} disabled={option.disabled} value={option.option}>
									{option.option}
								</option>
							);
						})}
					</select>

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
						<p className='text-[#666666] text-sm leading-6'>upload a document of proof of registered farm or export business</p>
						{/* <span className="sr-only">Upload export certificates</span>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e)}
              required
              placeholder="Upload export certificates"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-ag-green hover:file:bg-green-100"
            /> */}
					</label>

					<div className='flex items-center gap-3'>
						<div className='w-fit'>
							<Image priority src='/images/upload.svg' className='' height={17.99} width={17.99} alt='upload' />
						</div>

						<p className='font-medium text-lg leading-6 text-[#0CC14C]' onClick={() => fileUploadRef.current.click()}>
							Upload export certificates
						</p>
					</div>

					{/* <Link href="/book-a-call"> */}
					<button type='submit' className='bg-ag-green h-[3rem] rounded-[3rem] text-white mt-9 w-[11.5rem]'>
						Submit Application
					</button>
					{/* </Link> */}
				</form>
			</div>
		</div>
	);
};

export default CohortForm;
