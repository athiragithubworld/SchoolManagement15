import * as React from "react";
import { useState } from "react";

function InputField({ label, className, changeHandler }) {
  const [status, setStatus] = useState("");

  return (
    <div className="flex gap-1">
      <label className="my-auto w-[77px] sm:w-[100px]">{label}</label>

      {label !== "Status" && (
        <input
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[350px] md:w-[190px] outline-none ${className} text-center`}
          onChange={changeHandler}
          name={
            label.charAt(0).toLowerCase() + label.slice(1).replace(/\s+/g, "")
          }
          autoComplete="off"
        />
      )}
      {label === "Status" && (
        <select
          name="status"
          // readOnly={isReadOnly}
          className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none text-center pr-2 ${className} `}
          onChange={changeHandler}
          // value={status}
        >
          <option value=""> Status </option>
          <option value="Pending">Pending</option>
          <option value="Denied">Denied</option>
          <option value="Approved">Approved</option>
        </select>
      )}
    </div>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function EnrollStudentDetailsPopup({
  enrollstudentDetails,
  setEnrollStudentDetails,
}) {
  function changeHandler(event) {
    setEnrollStudentDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name]: event.target.value,
      };
    });
  }

  const inputFields = [
    { label: "First Name" },
    { label: "Middle Name" },
    { label: "Last Name" },
    { label: "Class" },
    { label: "Aadhaar Number" },
    { label: "Gender" },
    { label: "DOB" },
    { label: "Mother Tongue" },
    { label: "Blood Group" },
    { label: "Previous School" },
    { label: "EMIS No" },
    { label: "Phone No" },
    { label: "Caste", className: "whitespace-nowrap" },
    { label: "Religion", className: "whitespace-nowrap" },
    { label: "Status", className: "leading-5" },
  ];

  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-full max-md:px-5 h-[324px] overflow-y-scroll scrollbarnone">
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(0, 3).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-3 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(3, 6).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(6, 9).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(9, 12).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
      <div className="flex gap-3 justify-between px-px mt-2 text-base leading-5 text-black md:flex-wrap flex-wrap">
        {inputFields.slice(12).map((field, index) => (
          <InputField
            changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
          />
        ))}
      </div>
    </section>
  );
}
