
// Created by Athira
//Updated functionality by gunjan
import { useState } from 'react'
import EmployeeListButtons from '../../components/Buttons/HRMSButtons/EmployeeListButtons';
import EmployeeListTable from '../../components/Tables/HRMSTable/EmployeeListTable';
import { useEffect } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// Arrays defining column names for different employee roles
const employeeListColumnArr = [
  {
    label: "Employee Name",
    value: "employeeName",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Employee Id",
    value: "employeeId",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Designation",
    value: "designation",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Qualification",
    value: "qualification",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Role",
    value: "role",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
];


const facultyListColumnArr = [
  {
    label: "Employee Name",
    value: "employeeName",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Employee Id",
    value: "employeeId",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Primary Subject",
    value: "primarySubject",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Secondary Subject",
    value: "secondarySubject",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
  {
    label: "Qualification",
    value: "qualification",
    downicon: <MdOutlineKeyboardArrowDown />,
    upicon: <MdOutlineKeyboardArrowUp />,
  },
];



export default function EmployeeList() {
  const [selectEmployeeRole, setSelectEmployeeRole] = useState();
  const [employeeListColumn, setEmployeeListColumn] = useState(
    employeeListColumnArr
  );
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [modalClosed, setModalClosed] = useState(false); // State variable to refresh the page and fetch newly added data
  // Function to handle selection of employee role
  function handleselectedEmployeeRole(selectedEmployeeRole) {
    setSelectEmployeeRole(selectedEmployeeRole);
  }

  // Effect hook to update employee list based on selected role
  useEffect(() => {
    async function getEmployeeDetails() {
      try {
        const response1 = await fetch(
          "http://localhost:4000/facultyDetailsArr"
        );
        const response2 = await fetch(
          "http://localhost:4000/employeeDetailsArr"
        );
        const detailsOfFaculty = await response1.json();
        const detailsOfEmployees = await response2.json();
        if(!selectEmployeeRole || selectEmployeeRole==='All Employee'){
          setEmployeeListColumn(employeeListColumnArr);
          setEmployeeDetails(detailsOfEmployees);
        }else if(selectEmployeeRole==='Teaching'){
          setEmployeeListColumn(facultyListColumnArr);
          setEmployeeDetails(detailsOfFaculty)
        }else if(selectEmployeeRole==='Admin Staff'){
          const fiteredAdminStaffArr = detailsOfEmployees.filter(employee=> employee.role==='Admin Staff');
          setEmployeeListColumn(employeeListColumnArr);
          setEmployeeDetails(fiteredAdminStaffArr)
        }else{
          const fiteredNonTeachingStaff = detailsOfEmployees.filter(employee=> employee.role==='Non Teaching')
          setEmployeeListColumn(employeeListColumnArr);
          setEmployeeDetails(fiteredNonTeachingStaff)
        }
          
      } catch (err) {
        console.log(err);
      }
    }
    getEmployeeDetails();
  },[selectEmployeeRole,modalClosed]);
  function handleModal() {
    setModalClosed(previousStatus=>!previousStatus); // Update the state variable and whole component when modal is closed
  }
  // // Function to handle selection of employee role
  // function handleselectedEmployeeRole(selectedEmployeeRole) {
  //   setSelectEmployeeRole(selectedEmployeeRole);
  // }

  return (
    <div className="flex flex-col gap-4 w-full  overflow-hidden rounded-2xl">
      {/* Component for selecting employee role */}
      <EmployeeListButtons
        handleselectedEmployeeRole={handleselectedEmployeeRole}
        handleModal={handleModal}
      />
      {/* Component for displaying employee list table */}
      <EmployeeListTable
        employeeListColumn={employeeListColumn}
        employeeDetails={employeeDetails}
        selectEmployeeRole={selectEmployeeRole}
      />
    </div>
  );
}
