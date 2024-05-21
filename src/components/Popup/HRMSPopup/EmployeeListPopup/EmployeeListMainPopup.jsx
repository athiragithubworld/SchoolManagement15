//This component is created by Athira.
//made responsive by sravanthi
//updated functionality by gunjan
import classes from "../../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import React,{ useState } from "react";
// import Modal from "../../Modal/Modal";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";

import EmployeeListPagination from "../../../../ui/EmployeeListPagination";
import EmployeeListDocuments from "./EmployeeListDocuments";
import EmployeeProfileDetailsPopup from "./EmployeeProfileDetailsPopup";
import EducationDetailsPopup from "./EducationDetailsPopup";
import BankDetailsPopupPage from "./BankDetailsPopupPage";

// Functional component EmployeeListMainPopup
export default function EmployeeListMainPopup({handleClose,employeeDetailsFetched}) {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [profileData,setProfileData] = useState([{
    FirstName: "",
    MiddleName: "",
    LastName: "",
    MobileNoPrimary:"",
    MobileNoSecondary:"",
    Email:'',
    Gender:'',
    DOB:'',
    MotherTongue:'',
    AadharCardNo:'',
    PanCardNo:'',
    Religion:'',
    Designation:'',
    Role:'',
    Qualification:'',
    PrimarySubject:'',
    SecondarySubject:'',
    currentAddress:'',
    currentPincode:'',
    currentCity:'',
    currentState:'',
    permanentAddress:'',
    permanentPincode:'',
    permanentCity:'',
    permanentState:''

  }]);
  const [educationData, setEducationData] = useState([
    {DateOfJoining:'',
    Experience:'',
    PreLeavedSchool:'',
    SSC:'',
    HSC:'',
    UG:'',
    PG:'',
    SchoolSSC:'',
    CollegeHSC:'',
    UniversityUG:'',
    UniversityPG:'',
    ScoreSSC:'',
    ScoreHSC:'',
    ScoreUG:'',
    ScorePG:'',
    YearOfPassingSSC:'',
    YearOfPassingHSC:'',
    YearOfPassingUG:'',
    YearOfPassingPG:'',
    }
  ]);
  const [bankData,setBankData] = useState([{
    BankName:'',
    BankACNo:'',
    IFSCCode:'',
    Branch:'',
    BankAdd:'',
    CIFNo:'',
    PFNo:'',
    UANNo:'',
    ESINo:''

  }]);
  const fileNames = {
    aadhaar: "",
    pan: "",
    tc: "",
    marks: "",
    caste: "",
    photo: "",
  };
  // Array of tabs for the popup
  const tabs = [
    { label: "Profile Details" },
    { label: "Education Details" },
    { label: "Bank Details" },
    { label: "Documents" },
  ];
  const [fileImages, setFileImages] = useState(fileNames);
  // Function to handle moving to the next step
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };
  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };
  //Function to post the data 
  const handleSave = async(event)=>{
    event.preventDefault();
    let allDetails={}
    console.log(profileData.Designation)
    const dateOB = new Date(profileData.DOB);
    const dob = dateOB.toLocaleDateString();
      allDetails={
        employeeCustomId:(101+employeeDetailsFetched.length),
        FirstName: profileData.FirstName,
        MiddleName: profileData.MiddleName,
        LastName: profileData.LastName,
        MobileNoPrimary:profileData.MobileNoPrimary,
        MobileNoSecondary:profileData.MobileNoSecondary,
        Email:profileData.Email,
        Gender:profileData.Gender,
        DOB:dob,
        MotherTongue:profileData.MotherTongue,
        AadharCardNo:profileData.AadharCardNo,
        PanCardNo:profileData.PanCardNo,
        Religion:profileData.Religion,
        Designation:profileData.Designation,
        Role:profileData.Role,
        Qualification:profileData.Qualification,
        PrimarySubject:profileData.PrimarySubject,
        SecondarySubject:profileData.SecondarySubject,
        currentAddress:profileData.currentAddress,
        currentPincode:profileData.currentPincode,
        currentCity:profileData.currentCity,
        currentState:profileData.currentState,
        permanentAddress:profileData.permanentAddress,
        permanentPincode:profileData.permanentPincode,
        permanentCity:profileData.permanentCity,
        permanentState:profileData.permanentState,
        DateOfJoining:educationData.DateOfJoining,
       Experience:educationData.Experience,
       PreLeavedSchool:educationData.PreLeavedSchool,
    SSC:educationData.SSC,
    HSC:educationData.HSC,
    UG:educationData.UG,
    PG:educationData.PG,
    SchoolSSC:educationData.SchoolSSC,
    CollegeHSC:educationData.CollegeHSC,
    UniversityUG:educationData.UniversityUG,
    UniversityPG:educationData.UniversityPG,
    ScoreSSC:educationData.ScoreSSC,
    ScoreHSC:educationData.ScoreHSC,
    ScoreUG:educationData.ScoreUG,
    ScorePG:educationData.ScorePG,
    YearOfPassingSSC:educationData.YearOfPassingSSC,
    YearOfPassingHSC:educationData.YearOfPassingHSC,
    YearOfPassingUG:educationData.YearOfPassingUG,
    YearOfPassingPG:educationData.YearOfPassingPG,
    BankName:bankData.BankName,
    BankACNo:bankData.BankACNo,
    IFSCCode:bankData.IFSCCode,
    Branch:bankData.Branch,
    BankAdd:bankData.BankAdd,
    CIFNo:bankData.CIFNo,
    PFNo:bankData.PFNo,
    UANNo:bankData.UANNo,
    ESINo:bankData.ESINo,
      aadhaar: fileImages.aadhaar,
      pan: fileImages.pan,
      tc: fileImages.tc,
      marks: fileImages.marks,
      caste: fileImages.caste,
      photo: fileImages.photo,
       }
       if(profileData.Role==='Teaching'){
       try{
        const response = await fetch("http://localhost:4000/facultyDetailsArr",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(allDetails)
        })
        if(response.ok){
          const data = await response.json();
          console.log('Successfully Added',data);
          alert('Data Saved');
          handleClose();
        }}
        catch(error){console.error('Failed to post',error)}
    }else{
    try{
    const response = await fetch("http://localhost:4000/employeeDetailsArr",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(allDetails)
    })
    if(response.ok){
      const data = await response.json();
      console.log('Successfully Added',data);
      alert('Data Saved');
      handleClose();
       
    }}
    catch(error){console.error('Failed to post',error)}
  }
  }
  // Function to handle tab click
  const handleTabClick = (index) => {
    console.log(index);
    setActiveIndex(index);
    setStep(index + 1);
  };

 /* // Function to close the modal
  const closeModal = () => {
    
      setShowModal(false);
    
  }*/
    
    // Function to handle moving to the previous step
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
      if (step === 4) {
        handleClose();
        //closeModal();
      } else {
        setStep(step - 1);
      }
    };

    return (
      // <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={" flex flex-col justify-center items-center shadow-containerShadow w-full h-full rounded-[20px] p-[34px] gap-[34px] bg-white max-md:max-w-full max-md:h-[600px]" }>
        <div className=" w-full flex flex-col gap-[18px] h-full">
        {/* Rendering pagination component */}
        <EmployeeListPagination
          setStep={setStep}
          step={step}
          activeIndex={activeIndex}
          handleTabClick={handleTabClick}
        />
        {/* Render the popup according to the step number */}
        {step === 1 && <EmployeeProfileDetailsPopup  profileData={profileData} setProfileData={setProfileData}/> }
        {step === 2 && <EducationDetailsPopup educationDataSaved={educationData} setEducationData={setEducationData}/>}
        {step === 3 && <BankDetailsPopupPage setBankData={setBankData} bankData={bankData}/>}
        {step === 4 && <EmployeeListDocuments fileImages={fileImages} uploadFileHandler={uploadFileHandler}/>}</div>

      
        {/* Render buttons based on the current step */}
        <span className={classes.parentbutton}>
          {step !== 1 && step !== 4 && (
            <button className={classes.previousbutton} onClick={handlePrevious}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <AiOutlineVerticalRight style={{ display: "inline" }} />
                Previous
              </span>
            </button>
          )}

          {/* Render cancel button if it's the last step */}

          {step === 4 && (
            <button className={classes.previousbutton} onClick={handleClose}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                Cancel
              </span>
            </button>
          )}

          {/* Render next button if it's not the last step */}
          {step !== 4 && (
            <button className={classes.submitbutton} onClick={handleNext}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                {" "}
                Next
                <AiOutlineVerticalLeft style={{ display: "inline" }} />
              </span>
            </button>
          )}
          {/* Render save button if it's the last step */}
          {step === 4 && (
            <button className={classes.submitbutton} onClick={handleSave}>
              <span> Save</span>
            </button>
          )}
        </span>
      </div>
      // </Modal>
    );
  }
