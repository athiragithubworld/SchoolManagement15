import classes from "../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import Pagination from "../../../ui/Pagination";
import StudentListPagination from "../../../ui/StudentListPagination";

import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import EnrollStudentDetailsPopup from "./EnrollStudentDetailsPopup";
import EnrollStudentParentDetailsPopup from "./EnrollStudentParentDetailsPopup";
import EnrollStudentDocumentsPopup from "./EnrollStudentDocumentsPopup";

// Functional component TimeSettingModal
export default function EnrollStudentSteps({
  closeModal,
  // handleEnrollRefetch,
  enrollmentdetails,
  enrollSelectedStudentData,
  setEnrollmentDetails,
  handleDeletion
  // handleAdd,
  // handleUpdateStudent,
}) {

  
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // State for enrollment number, initialized with the last enrollment number from props or default value 101
  const enrollmentLastDataNumber = enrollmentdetails[
    enrollmentdetails.length - 1
  ]?.enrollNumber
    ? enrollmentdetails[enrollmentdetails.length - 1]?.enrollNumber + 1
    : 101;

  //State to manage enrollment number
  const [enrollNumber, setEnrollNumber] = useState(enrollmentLastDataNumber);
  const [enrollStudentList, setEnrollStudentList] = useState({});

  //Handle uploading documents
  const fileNames = {
    aadhaar: "",
    academic: "",
    tc: "",
    birth: "",
    residential: "",
    photo: "",
    domicile: "",
    document: "",
  };
  const [fileImages, setFileImages] = useState(fileNames);
  const [selectedDocuments, setSelectedDocuments] = useState({
    aadhaar: false,
    academic: false,
    tc: false,
    birth: false,
    residential: false,
    photo: false,
    domicile: false,
    document: false,
  });

  //Handle Popup details - FUNCTIONALITY FOR SAVE BUTTON WAS ADDED BY Athira
  const [enrollstudentDetails, setEnrollStudentDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    class: "",
    aadharCardNo: "",
    gender: "",
    dOB: "",
    motherTongue: "",
    bloodGroup: "",
    previousSchool: "",
    emisNo: "",
    phoneNo: "",
    caste: "",
    religion: "",
    status: "",
    enrollNumber: enrollNumber,
  });
  const [parentDetails, setParentDetails] = useState({
    fatherName: "",
    motherName: "",
    fatherMobileNo: "",
    motherMobileNo: "",
    fatherEmail: "",
    motherEmail: "",
    currentAddress: "",
    currentAddressPinCode: "",
    currentAddressCity: "",
    currentAddressState: "",
    permanentAddress: "",
    permanentAddressPinCode: "",
    permanentAddressCity: "",
    permanentAddressState: "",
  });

  useEffect(() => {
    if (enrollstudentDetails.length !== 0 && parentDetails.length !== 0) {
      setEnrollStudentList({ ...enrollstudentDetails, ...parentDetails });
    }
  }, [enrollstudentDetails, parentDetails]);

  const tabs = [
    { label: "Student Details" },
    { label: "Parents Details" },
    { label: "Documents" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    setStep((prevIndex) => prevIndex + 1);
  };
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setStep(index + 1);
  };

  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };

  useEffect(() => {
    async function getDocuments() {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        const documents = await response.json();
        setDocuments(documents);
        //
      } catch (err) {
        console.log(err);
      }
    }
    getDocuments();
  }, []);

  //Handle deleting all documents
  const deleteHandler = () => {
    setFileImages(fileNames);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % tabs.length);
    if (step === 3) {
      console.log("Cancel");
      closeModal();
    } else {
      setStep(step - 1);
    }
  };

  // Function to handle selection of student data for enrollment
  function enrollSelectStudentDataHandler() {
    if (enrollSelectedStudentData && enrollSelectedStudentData.length !== 0) {
      setEnrollNumber(enrollSelectedStudentData[0].enrollNumber);
      const {
        fatherName,
        motherName,
        fatherMobileNo,
        motherMobileNo,
        fatherEmail,
        motherEmail,
        currentAddress,
        currentAddressPinCode,
        currentAddressCity,
        currentAddressState,
        permanentAddress,
        permanentAddressPinCode,
        permanentAddressCity,
        permanentAddressState,
      } = enrollSelectedStudentData[0];

      setEnrollStudentDetails({
        id: enrollSelectedStudentData[0].id,
        firstName: enrollSelectedStudentData[0].firstName,
        middleName: enrollSelectedStudentData[0].middleName,
        lastName: enrollSelectedStudentData[0].lastName,
        class: enrollSelectedStudentData[0].class,
        aadharCardNo: enrollSelectedStudentData[0].aadharCardNo,
        gender: enrollSelectedStudentData[0].gender,
        dOB: enrollSelectedStudentData[0].dOB,
        motherTongue: enrollSelectedStudentData[0].motherTongue,
        bloodGroup: enrollSelectedStudentData[0].bloodGroup,
        previousSchool: enrollSelectedStudentData[0].previousSchool,
        aadhaarNumber: enrollSelectedStudentData[0].aadhaarNumber,
        eMISNo: enrollSelectedStudentData[0].eMISNo,
        status: enrollSelectedStudentData[0].status,
        enrollNumber: enrollSelectedStudentData[0].enrollNumber,
        phoneNo: enrollSelectedStudentData[0].phoneNo,
        caste : enrollSelectedStudentData[0].caste,
        religion : enrollSelectedStudentData[0].religion
      });
      setParentDetails({
        fatherName,
        motherName,
        fatherMobileNo,
        motherMobileNo,
        fatherEmail,
        motherEmail,
        currentAddress,
        currentAddressPinCode,
        currentAddressCity,
        currentAddressState,
        permanentAddress,
        permanentAddressPinCode,
        permanentAddressCity,
        permanentAddressState,
      });
      // setEnrollStudentList(...enrollSelectedStudentData);
      // setIsReadOnly(true);
    }
  }

  // Effect to handle changes in selected student data
  useEffect(() => {
    enrollSelectStudentDataHandler();
  }, [enrollSelectedStudentData]);

  //handle AddNew
  const handleAddEnrollDetails = (newDetails) => {
    const updatedDetailsArray = [...enrollmentdetails];
    const filterdata = enrollmentdetails.filter(
      (data) => data.enrollNumber !== newDetails.enrollNumber
    );

    filterdata.push({
      ...newDetails,
    });

    // handleAddStudentDetails(filterdata);
    setEnrollmentDetails(filterdata);

    // handleAdd(filterdata);
  };

  async function submitHandler(enrollStudentList) {
    // console.log(fileImages);
    // const updatedDocuments = [...documents];
    // updatedDocuments[0].documents = fileImages;
    // console.log(updatedDocuments[0].documents);

    // Fields to check for emptiness along with their corresponding names
    const fieldsToCheck = [
      { value: enrollStudentList.firstName, name: "First Name" },
      { value: enrollStudentList.lastName, name: "Last Name" },
      { value: enrollStudentList.gender, name: "Gender" },
      { value: enrollStudentList.class, name: "Class" },
      { value: enrollStudentList.phoneNo, name: "Phone Number" },
      { value: enrollStudentList.status, name: "Status" },
      { value: parentDetails.fatherName, name: "Father's Name" },
      { value: parentDetails.fatherMobileNo, name: "Father's Mobile Number" },
    ];

    // Check if any field in fieldsToCheck is empty
    for (const field of fieldsToCheck) {
      if (field.value === "") {
        // Show alert message mentioning the field name
        alert(`Please fill in the '${field.name}' field`);
        // Return back without submitting
        return;
      }
    }

    await postFormData(enrollStudentList);
    // alert("Data Saved");

    handleAddEnrollDetails(enrollStudentList);
    // closeModal();
    // setEnrollStudentDetails({});
    // setParentDetails({});
  }

  // Function to post form data to server
  const postFormData = async (formData) => {
    // Include enroll number in formData

    console.log("select", formData);
    formData.enrollNumber = enrollNumber;

    const filteredEnrollNumber =
      enrollSelectedStudentData?.length > 0
        ? enrollSelectedStudentData[0].enrollNumber
        : 0;

    // Determine base URL and request method
    let BASE_URL = "http://localhost:4000/StudentEnrollDetails";

    let query = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // If editing existing enrollment, modify URL and method
    if (filteredEnrollNumber === enrollNumber) {
      BASE_URL += `/${enrollSelectedStudentData[0].id}`;
      query.method = "PUT";

    }

    // Fetch data from server
    try {
      const response = await fetch(BASE_URL, query);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      alert("Data is saved");
      // // Reset formState to initial state
      // handleEnrollRefetch();
      closeModal();
      // handleUpdateStudent()

      // Update enrollment number after successful data submission
      setEnrollNumber((prevEnrollNumber) => prevEnrollNumber + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete=()=>{
    let id = enrollSelectedStudentData[0].id;

    fetch(`http://localhost:4000/StudentEnrollDetails/${id}`,{    //for deleting data in the table
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(null),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: in deleting",data);
      
      closeModal(true);
     
      alert("data is deleted");
     
      // handleAlert("success","Data row is deleted");
    })
    .catch((error) => {
      console.error("Error:", error);
      // handleAlert("fail","Failed to delete data");
    });
    handleDeletion();
  }

  return (
    // <Modal handleClose={closeModal} isOpen={showModal}>
    <div className={classes.container}>
      <StudentListPagination
        setStep={setStep}
        step={step}
        activeIndex={activeIndex}
        handleTabClick={handleTabClick}
      />
      {step === 3 && (
        <div className="flex gap-5 justify-between w-[100%] max-md:flex-wrap">
          <div className="my-auto text-lg font-bold leading-5 text-black">
            {/* Documentation */}
          </div>
          <div className="flex gap-4">
            <div className="flex justify-center items-center p-1 w-10 h-10 bg-white rounded-lg border border-solid border-stone-300">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b50d8c894c9877507fadd3e9b090e9deb1b6d12dcb3d62662b77c4268fa4daf?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                className="aspect-[0.96] fill-neutral-500 w-[23px]"
              />
            </div>
            <div className="flex justify-center items-center px-1  w-10 h-10 bg-white rounded-2xl border border-solid border-stone-300" onClick={handleDelete}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f66847653e76712da56d2bfde5da274b4507639bcf05e4eed81b7395b70442b?apiKey=8d87b58e79fa4e2d9738c0aa2c095387&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <EnrollStudentDetailsPopup
          enrollstudentDetails={enrollstudentDetails}
          setEnrollStudentDetails={setEnrollStudentDetails}
        />
      )}
      {step === 2 && (
        <EnrollStudentParentDetailsPopup
          parentDetails={parentDetails}
          setParentDetails={setParentDetails}
          // enrollStudentList={enrollStudentList}
          // enrollSelectedStudentData={enrollSelectedStudentData}
        />
      )}
      {step === 3 && (
        <EnrollStudentDocumentsPopup
          step={2}
          currentStep={step}
          fileImages={fileImages}
          uploadFileHandler={uploadFileHandler}
        />
      )}
      <span className={classes.parentbutton}>
        {step === 3 && (
          <button
            className={classes.previousbutton}
            onClick={handlePrevious}
            // disabled={step === 1}
          >
            <span>Cancel</span>
          </button>
        )}
        {step === 2 && (
          <button
            className={classes.previousbutton}
            onClick={handlePrevious}
            disabled={step === 1}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <AiOutlineVerticalRight style={{ display: "inline" }} />
              Previous
            </span>
          </button>
        )}

        {step !== 3 && (
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
        {step === 3 && (
          <button
            className={classes.submitbutton}
            onClick={() => submitHandler(enrollStudentList)}
          >
            <span> Save</span>
          </button>
        )}
      </span>
    </div>
    // </Modal>
  );
}
