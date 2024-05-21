//THIS PAGE WAS CREATED BY HAIDER

import React from "react";
import { useState, useEffect } from "react";
import StudentListButtons from "../../components/Buttons/StudentListButtons/StudentListButtons";
import StudentListTable from "../../components/Tables/StudentListTable/StudentListTable";
import StudentListSteps from "../../components/Popup/StudentListPopup/StudentListSteps";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const studentListColumn = [
  { label: "Student Name" },
  { label: "Roll No" },
  { label: "Gender" },
  { label: "DOB" },
  { label: "Student ID" },
];

export const StudentList = () => {
  const [studentListDetails, setStudentListDetails] = useState([]);
  const [showStudentListPopup, setShowStudentListPopup] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentListDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        // console.log(jsonData);
        setStudentListDetails(jsonData);
        setFiltered(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleAddStudentDetails = (newDetails) => {
    const updatedDetailsArray = [...studentListDetails];
    updatedDetailsArray.push({
      ...newDetails,
    });
    // console.log(updatedDetailsArray);
    setFiltered(updatedDetailsArray);
    setStudentListDetails(updatedDetailsArray);
  };

  // filter data based  on class
  const handleChangeClass = async (selectedClass) => {
    if (!selectedClass) {
      return;
    } else {
      const newdata = studentListDetails.filter((item) => {
        return item.Class == selectedClass;
      });
      setFiltered(newdata);
    }
  };
  // filter data based  on class and section
  const handleChangeSection = async (selectedClass, selectedSection) => {
    if (!selectedClass || !selectedSection) {
      return;
    } else {
      const newdata = studentListDetails.filter((item) => {
        return (
          item.Class == selectedClass && item.Section == selectedSection
        );
      });
      setFiltered(newdata);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-y-hidden rounded-2xl">
      <StudentListButtons
        showStudentListPopup={showStudentListPopup}
        setShowStudentListPopup={setShowStudentListPopup}
        handleChangeSection={handleChangeSection}
        handleChangeClass={handleChangeClass}
        filteredData={filtered}
      ></StudentListButtons>

      <StudentListTable
        studentListColumn={studentListColumn}
        studentListDetails={filtered}
      ></StudentListTable>

      {showStudentListPopup && (
        <StudentListSteps handleAddStudentDetails={handleAddStudentDetails} />
      )}
    </div>
  );
};

export default StudentList;
