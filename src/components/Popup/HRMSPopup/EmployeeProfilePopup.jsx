
//THIS COMPONENT WAS CREATED BY HAIDER

import styles from "../../../styles/AttendanceRegisterButtons.module.css";
import { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import profile from "../../../assets/women-profile.webp";
import StudentDetailButtons from '../../Buttons/StudentDetailButtons/StudentDetailButtons';
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

/* primary details = [First Name,middle name,last name,mobile no Primary,mobile no secondary, email,gender,dob
  mothertongue, aadhar card , pan card no, religion, date of joining, experience, preLeavedSchool]*/

const PrimaryDetails = ({ disable,employeeDetails}) => {
    return (
      <div className=" w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-containerShadow">
        <div className="flex justify-center items-center w-1/6">
          <img
            className="w-[153px] rounded-full"
            alt="person-female--v2"
            src={profile}
          />
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-y-4 gap-x-8">
        <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              First Name
         </label>
       <input disabled={disable} value={employeeDetails.FirstName} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Middle Name
         </label>
       <input disabled={disable} value={employeeDetails.MiddleName} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Last Name
         </label>
       <input disabled={disable} value={employeeDetails.LastName} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mobile No
         </label>
       <input disabled={disable} value={employeeDetails.MobileNoPrimary} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mobile No
         </label>
       <input disabled={disable} value={employeeDetails.MobileNoSecondary} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Email
         </label>
       <input disabled={disable} value={employeeDetails.Email} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Gender
         </label>
       <input disabled={disable} value={employeeDetails.Gender} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              DOB
         </label>
       <input disabled={disable} value={employeeDetails.DOB} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Mother Tongue
         </label>
       <input disabled={disable} value={employeeDetails.MotherTongue} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Aadhar Card No
         </label>
       <input disabled={disable} value={employeeDetails.AadharCardNo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pan Card No
         </label>
       <input disabled={disable} value={employeeDetails.PanCardNo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Religion
         </label>
       <input disabled={disable} value={employeeDetails.Religion} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Date Of Joining
         </label>
       <input disabled={disable} value={employeeDetails.DateOfJoining} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Experience
         </label>
       <input disabled={disable} value={employeeDetails.Experience} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pre Leaved School
         </label>
       <input disabled={disable} value={employeeDetails.PreLeavedSchool} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
        </div>
      </div>
    );
}

/* secondary details=[current address, permanent address,eduction,bank details, payroll details]*/
const SecondaryDetails = ({payrollDetails,disable,employeeDetails}) => {
    return (
      <div className='w-full flex h-fit flex-col gap-4 shadow-student'>
  
        <div className="w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl">

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Current Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <input className="w-full h-12 border-[1px] shadow-md rounded-2xl" value={employeeDetails.currentAddress} autoComplete="off" disabled={disable} />
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pincode
         </label>
       <input disabled={disable} value={employeeDetails.currentPincode} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              City
         </label>
       <input disabled={disable} value={employeeDetails.currentCity} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              State
         </label>
       <input disabled={disable} value={employeeDetails.currentState} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
            </div>

          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Permanent Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <div className="w-full h-12 border-[1px] shadow-md rounded-2xl">{employeeDetails.permanentAddress}</div>
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Pincode
         </label>
       <input disabled={disable} value={employeeDetails.permanentPincode} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              City
         </label>
       <input disabled={disable} value={employeeDetails.permanentCity} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              State
         </label>
       <input disabled={disable} value={employeeDetails.permanentState} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
            </div>
          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Qualification</p></div>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8'>
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              School
         </label>
       <input disabled={disable} value={employeeDetails.SchoolSSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              SSC
         </label>
       <input disabled={disable} value={employeeDetails.SSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingSSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Score
         </label>
       <input disabled={disable} value={employeeDetails.ScoreSSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              College
         </label>
       <input disabled={disable} value={employeeDetails.CollegeHSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              HSC
         </label>
       <input disabled={disable} value={employeeDetails.HSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Score
         </label>
       <input disabled={disable} value={employeeDetails.ScoreHSC} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              University
         </label>
       <input disabled={disable} value={employeeDetails.UniversityUG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              UG
         </label>
       <input disabled={disable} value={employeeDetails.UG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div> 
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingUG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Score
         </label>
       <input disabled={disable} value={employeeDetails.ScoreUG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              University
         </label>
       <input disabled={disable} value={employeeDetails.UniversityPG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              PG
         </label>
       <input disabled={disable} value={employeeDetails.PG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div> 
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              Year of Passing
         </label>
       <input disabled={disable} value={employeeDetails.YearOfPassingPG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Score
         </label>
       <input disabled={disable} value={employeeDetails.ScorePG} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
            </div>

          </div>

        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Bank Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Employee Name
         </label>
       <input disabled={disable} value={payrollDetails.FacultyName} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Bank Name
         </label>
       <input disabled={disable} value={payrollDetails.BankName} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          IFSC Code
         </label>
       <input disabled={disable} value={payrollDetails.IFSCCode} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Employee ID
         </label>
       <input disabled={disable} value={payrollDetails.FacultyId} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Bank Ac.No
         </label>
       <input disabled={disable} value={payrollDetails.BankAcNo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Branch
         </label>
       <input disabled={disable} value={payrollDetails.Branch} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
          </div>
  
        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Payroll Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            
            <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          PF No
         </label>
       <input disabled={disable} value={payrollDetails.PFNo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          EPF
         </label>
       <input disabled={disable} value='' autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          ESI No
         </label>
       <input disabled={disable} value={payrollDetails.ESINo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          UAN No
         </label>
       <input disabled={disable} value={payrollDetails.UANNo} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          STD Days
         </label>
       <input disabled={disable} value={payrollDetails.STDDays} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          State Bonus
         </label>
       <input disabled={disable} value={payrollDetails.StatBonus} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Basic Allowance
         </label>
       <input disabled={disable} value='' className="w-full h-12 border-[1px] shadow-md rounded-2xl" autoComplete="off"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Professional Tax
         </label>
       <input disabled={disable} value={payrollDetails.ProfessionalTax} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          Special Allowance
         </label>
       <input disabled={disable} value={payrollDetails.SpecialAllowance} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
     <div className='flex items-center gap-2'>
          <label className=' w-24 h-fit flex items-center font-medium text-left text-base'>
          House Rent Allowance
         </label>
       <input disabled={disable} value={payrollDetails.HouseRentAllowance} autoComplete="off" className="w-full h-12 border-[1px] shadow-md rounded-2xl"/>
     </div>
          </div>
  
        </div>
  
      </div>
    )
}
/*All images document*/
const UploadDocuments = ({ fileImages, setFileImages }) => {   ///was made by Abhishek 
  const photoInputRef = useRef();
  const aadhaarInputRef = useRef();     
  const panInputRef = useRef();
  const resumeInputRef = useRef();
  const UGcertificateInputRef = useRef();
  const PGcertificateInputRef = useRef();
  const cvInputRef = useRef();
  const addDocumentInputRef = useRef();

  function handleFileChange(event, currFileName) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }

  const handleRemoveImage = (currFileName) => {
    setFileImages((prevState) => ({
      ...prevState,
      [currFileName]: null,
    }));
  };

  const handleDrop = (event, currFileName) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const documentFields = [
    { ref: photoInputRef, name: "photo", label: "Passport Size Photo" },
    { ref: aadhaarInputRef, name: "aadhar", label: "Aadhar Card" },
    { ref: panInputRef, name: "pan", label: "Pan Card" },
    { ref: resumeInputRef, name: "resume", label: "Resume" },
    { ref: UGcertificateInputRef, name: "UGcertificate", label: "UG Certificate" },
    { ref: PGcertificateInputRef, name: "PGcertificate", label: "PG Certificate" },
    { ref: cvInputRef, name: "cv", label: "CV" },
    { ref: addDocumentInputRef, name: "addDocument", label: "Additional Document" },
  ];

  return (
    <form className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-containerShadow'>
      <div className='flex place-items-start'>
        <p className='text-lg font-bold'>Documentation</p>
      </div>
      <div className='grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
        {documentFields.map(({ ref, name, label }) => (
          <div
            key={name}
            className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, name)}
          >
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56 relative"
              onClick={() => ref.current.click()}
            >
              {fileImages[name] ? (
                <div className="relative w-full h-full">
                  <img src={fileImages[name]} alt={name} className="object-cover w-full h-full" />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(name);
                    }}
                  >
                    <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <input
                    ref={ref}
                    accept="image/*"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, name)}
                  />
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </>
              )}
            </div>
            <p className="text-lg text-center w-full">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}


const bankDetails = [
  {
    name : "Employee Name",value:'FirstName'
  },
  {
    name : "Bank Name",value:'BankName'
  },
  {
    name : "IFSC Code",value:'IFSCCode'
  },
  {
    name : "Employee ID",value:'id'
  },
  {
    name : "Bank AC. NO",value:"BankACNO"
  },
  {
    name : "Branch",value:'Branch'
  },
]

// const payrollDetails = [
//   {name : "PF No",value:'PFNo'},
//   {name : "EPF",value:'EPF'},
//   {name : "ESI No",value:'ESINo'},
//   {name : "UAN No",value:'UANNo'},
//   {name : "STD Days",value:''},
//   {name : "State Bonus"},
//   {name : "Basic Allowance"},
//   {name : "Professional Tax"},
//   {name : "Specail Allowance"},
//   {name : "House Rent Allowance"}
// ]


export const EmployeeProfilePopup = () => {
  //bringing the particular employee data through useParams after clicking
  const { employeeId, employeeRole } = useParams();
  const [employeeUploadFiles,setEmployeeUploadFiles] = useState({
    photo: "",
    aadhar:"",
    pan:"",
    resume:"",
    UGcertificate:"",
    PGcertificate:"",
    cv:"",
    addDocument:"",
  })
  //state for enabling the inputs to edit
  const [disable,setDisable] = useState(true);
  const [employeeDetails,setEmployeeDetails]=useState([]);
  const [payrollDetails,setPayrollDetails] = useState([]);

  //handling the data which user will edit 
  //const [updatedEmployeeData, setEmployeeData] = useState(employeeData)
  //Extracting info of the perticular id from json
  useEffect(()=>{
    async function getEmployeeDetails() {
      try {
        if(employeeRole==='Teaching'){
        const response1 = await fetch(
          "http://localhost:4000/facultyDetailsArr"
        )
        const detailsOfFaculty = await response1.json();
        console.log(detailsOfFaculty)
        let filteredDetails = detailsOfFaculty.filter(faculty=>String(faculty.employeeCustomId)===String(employeeId))
        setEmployeeDetails(filteredDetails)
        ;}
        else{
          const response2 = await fetch(
            "http://localhost:4000/employeeDetailsArr"
          );
          const detailsOfEmployees = await response2.json();
          console.log(detailsOfEmployees)
          let filteredDetails = detailsOfEmployees.filter(employee=>String(employee.employeeCustomId)===String(employeeId))
          setEmployeeDetails(filteredDetails)
          
        }
        const response3 = await fetch(
          "http://localhost:4000/PayrollDetails"
        )
        const detailsOfPayroll = await response3.json();
        let filteredDetails = detailsOfPayroll.filter(faculty=>{
          console.log(faculty.id,employeeId)
          return String(faculty.employeeCustomId)===String(employeeId)})
        console.log(filteredDetails)
        setPayrollDetails(filteredDetails)
       
      } catch (err) {
        console.log(err);
      }
    }
    getEmployeeDetails();
  },[employeeId,employeeRole]);
  
  //updating the data
  const handleSubmit = ()=>{

  }
 
  return (
   <>
      {(employeeDetails.length!==0 && payrollDetails.length!==0) ?(<div className="flex flex-col gap-4 w-full overflow-y-hidden rounded-2xl">
       <div className={`${styles.customSelect} flex justify-end items-center gap-3`} >
        <div disabled={disable} className={`${styles.selectContainer} justify-center h-10 cursor-pointer w-[108px]`}>Submit</div>
        <div>
        <StudentDetailButtons setDisable={setDisable}/>
        </div>
       </div>
        <div className='w-full overflow-y-scroll scrollbarnone flex flex-col gap-4'>

          <PrimaryDetails employeeDetails={employeeDetails[0]} disable={disable}></PrimaryDetails>

          <SecondaryDetails bankDetails={bankDetails} employeeDetails={employeeDetails[0]} payrollDetails={payrollDetails[0]} disable={disable} ></SecondaryDetails>

          <UploadDocuments fileImages={employeeDetails[0]} setFileImages={setEmployeeUploadFiles}></UploadDocuments>

        </div>

    </div>):''}
    </>
  )

}
export default EmployeeProfilePopup;