//THIS PAGE WAS CREATED BY HAIDER

import React, { useState, useEffect } from "react";
import StudentDetailButtons from "../../components/Buttons/StudentDetailButtons/StudentDetailButtons";
import StudentPrimaryDetails from "../../components/Student/StudentPrimaryDetails";
import StudentSecondaryDetails from "../../components/Student/StudentSecondaryDetails";
import UploadStudentDocuments from "../../components/Student/UploadStudentDocuments";
import { useLocation } from "react-router-dom";

const primaryDetails = [
  {
    name: "First Name",
  },
  {
    name: "Middle Name",
  },
  {
    name: "Last Name",
  },
  {
    name: "Class",
  },
  {
    name: "Aadhaar Number",
  },

  {
    name: "Gender",
  },
  {
    name: "DOB",
  },
  {
    name: "Mother Tongue",
  },
  {
    name: "Blood Group",
  },
  {
    name: "Previous School",
  },
  {
    name: "EMIS No",
  },
  {
    name: "Phone No",
  },
  {
    name: "Caste",
  },
  {
    name: "Religion",
  },
  {
    name: "Status",
  },
];

const secondaryDetails1 = [
  {
    val: "",
    name: "Father Name",
  },
  {
    val: "",
    name: "Mother Name",
  },
  {
    val: "Father",
    name: "Mobile No",
  },
  {
    val: "Mother",
    name: "Mobile No",
  },
  {
    val: "Father",
    name: "Email",
  },
  {
    val: "Mother",
    name: "Email",
  },
];

const secondaryDetails2 = [
  {
    val: "Current",
    name: "Pin Code",
  },
  {
    val: "Current",
    name: "City",
  },
  {
    val: "Current",
    name: "State",
  },
];

const secondaryDetails3 = [
  {
    val: "Permanent",
    name: "Pin Code",
  },
  {
    val: "Permanent",
    name: "City",
  },
  {
    val: "Permanent",
    name: "State",
  },
];

export const EnrollStudentDetail = () => {
  const [studentUploadFiles, setStudentUploadFiles] = useState({
    photo: "",
    aadhar: "",
    pan: "",
    parentAadhar: "",
    birthCertificate: "",
    validity: "",
    migrationCertificate: "",
    tc: "",
    residentialCertificate: "",
    castCertificate: "",
    domicileCertificate: "",
    addDocument: "",
  });

  const [selectedStudent, setSelectedStudent] = useState();

  const location = useLocation();

  const studentEnrollNumber = location.pathname.split("/").at(-1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        const studentData = jsonData.filter((data) => data.enrollNumber == studentEnrollNumber);
        setSelectedStudent(studentData);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  console.log("enroll", selectedStudent);

  return (
    <div className="flex flex-col gap-4 w-full overflow-y-hidden">
      <StudentDetailButtons></StudentDetailButtons>

      <div className="w-full overflow-y-scroll scrollbarnone studentDetail-scrollbar flex flex-col gap-4">
        <StudentPrimaryDetails
          selectedStudent={selectedStudent}
          primaryDetails={primaryDetails}
        ></StudentPrimaryDetails>

        <StudentSecondaryDetails
          selectedStudent={selectedStudent}
          secondaryDetails1={secondaryDetails1}
          secondaryDetails2={secondaryDetails2}
          secondaryDetails3={secondaryDetails3}
        ></StudentSecondaryDetails>

        <UploadStudentDocuments
          selectedStudent={selectedStudent}
          fileImages={studentUploadFiles}
          setFileImages={setStudentUploadFiles}
        ></UploadStudentDocuments>
      </div>
    </div>
  );
};

export default EnrollStudentDetail;
