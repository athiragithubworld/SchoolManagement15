import React, { useState } from "react";
import { TiLeaf } from "react-icons/ti";

function InputField({ label, className, val, changeHandler }) {
  return (
    <div className="flex gap-0 max-md:flex-wrap">
      <label className="my-auto w-[100px]">{label}</label>
      <input
        className={`shrink-0 ml-5 max-w-full rounded-2xl shadow-primary h-[43px] text-center ${className}`}
        onChange={changeHandler}
        name={val}
        autoComplete="off"
      />
    </div>
  );
}

function AddressFields({ title, changeHandler }) {
  return (
    <>
      {/* <h2 className="mt-6 text-lg font-bold leading-4 text-black max-md:max-w-full">
        {title}
      </h2> */}
      <div className="flex gap-0 mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap">
        <label className="my-auto min-w-24 text-wrap">{title}</label>
        <input
          type="text"
          className="shrink-0 ml-5 max-w-full bg-white rounded-xl shadow-primary text-center w-full h-[42px] lg:max-w-[800px]"
          onChange={changeHandler}
          name={
            title.charAt(0).toLowerCase() + title.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
        />
      </div>
      <div className="flex gap-2 justify-between mt-3 text-base leading-5 text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[100px]">Pin Code</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "PinCode"
            }
            autoComplete="off"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto w-[100px] lg:w-[80px] md:w-[80px]">
            City
          </label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "City"
            }
            autoComplete="off"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto w-[100px] lg:w-[80px] md:w-[80px]">
            State
          </label>
          <input
            type="text"
            className="shrink-0 ml-3 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "State"
            }
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function EnrollStudentParentDetailsPopup({
  parentDetails,
  setParentDetails,
}) {
  function changeHandler(event) {
    setParentDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="flex flex-col justify-between p-2 -ml-1 bg-white rounded-3xl max-w-full max-md:px-5 h-[450px] overflow-y-scroll overflow-x-hidden scrollbarnone">
      <div className="flex gap-2 justify-between text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="Father Name"
          className="w-[296px]"
          val="fatherName"
          changeHandler={changeHandler}
        />
        <InputField
          label="Mobile No"
          className="w-[296px]"
          val="fatherMobileNo"
          changeHandler={changeHandler}
        />
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="Mother Name"
          className="w-[296px]"
          val="motherName"
          changeHandler={changeHandler}
        />
        <InputField
          label="Mobile No"
          className="w-[296px]"
          val="motherMobileNo"
          changeHandler={changeHandler}
        />
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="Father E-mail"
          className="w-[296px]"
          val="fatherEmail"
          changeHandler={changeHandler}
        />
        <InputField
          label="Mother E-mail"
          className="w-[296px]"
          val="motherEmail"
          changeHandler={changeHandler}
        />
      </div>
      <AddressFields title="Current Address" changeHandler={changeHandler} />
      <AddressFields title="Permanent Address" changeHandler={changeHandler} />
    </div>
  );
}
