import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import custom from "../../styles/Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // State to manage the open/close state of each accordion item
  const [accordionItems, setAccordionItems] = useState([
    // { imageURL:"https://icon-library.com/images/course-icon/course-icon-17.jpg",title: "Courses", isOpen: false, options: ["Option 1", "Option 2", "Option 3"] },
    {
      imageURL:
        "https://tse4.mm.bing.net/th?id=OIP.xLnoqc3enK8DORScF3G_LgHaHa&pid=Api&P=0&h=220",
      title: "Attendance",
      isOpen: false,
      options: [
        "Student Attendance",
        "Attendance register",
        "Attendance Summary",
      ],
    },
    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP.2JNpOJcnwaXp9cdmg9RbbAHaHa&pid=Api&P=0&h=220",
      title: "Students",
      isOpen: false,
      options: [
        "Add New Students",
        "List All Students",
        "Update Student Details",
      ],
    },
    {
      imageURL:
        "https://tse4.mm.bing.net/th?id=OIP.7iiu7rkKcxHxBdmmxc0NfQHaFj&pid=Api&P=0&h=220",
      title: "Payroll",
      isOpen: false,
      options: ["Payroll List", "New Bank Transfer", "Payouts"],
    },
    {
      imageURL:
        "https://tse2.mm.bing.net/th?id=OIP.WZFN-O_pxtprBzCNGTRZfgHaHa&pid=Api&P=0&h=220",
      title: "Fee Management",
      isOpen: false,
      options: ["StudentList", "Fee Configuration", "Fee Collection"],
    },
    // { imageURL:"https://tse2.mm.bing.net/th?id=OIP.XMo3bVhmk7LxwuXyWLt9AwHaHa&pid=Api&P=0&h=220",title: "Analytics", isOpen: false, options: ["Option 1", "Option 2", "Option 3"] },
    {
      imageURL:
        "https://tse3.mm.bing.net/th?id=OIP.xZetRk6FUlf0WmM-0m4xGwHaFE&pid=Api&P=0&h=220",
      title: "Class Management",
      isOpen: false,
      options: [
        "TimeTable",
        "Attendance Register",
        "Student List",
        "Create Class",
        "Create Class Exam",
      ],
    },
    {
      imageURL:"https://tse1.mm.bing.net/th?id=OIP.2JNpOJcnwaXp9cdmg9RbbAHaHa&pid=Api&P=0&h=220" ,
      title: "HRMS",
      isOpen: false,
      options: ["Employee List", "Leave Management", "Employee Attendance"],
    },

    {
      imageURL:
        "https://tse1.mm.bing.net/th?id=OIP._4ogFvvjUJLFqs_Dv9ADOwHaHZ&pid=Api&P=0&h=220",
      title: "Timetable",
      isOpen: false,
      options: ["Add TimeTable ", "View TimeTable", "Update TimeTable"],
    },
    // { imageURL:"http://cliparts.co/cliparts/ATb/jRo/ATbjRoyjc.png",title: "Transport", isOpen: false, options: ["Option 1", "Option 2", "Option 3"] },
    {
      imageURL:
        "https://tse2.mm.bing.net/th?id=OIP.JfS1NAK8xgOwxUpuGxDXUAHaHN&pid=Api&P=0&h=220",
      title: "Examination",
      isOpen: false,
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ]);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  
  // Function to handle click on accordion item
  const handleAccordionClick = (index) => {
    const updatedAccordionItems = accordionItems.map((item, i) => {
      if (i === index) {
        // Toggle the open/close state of the clicked accordion item
        return { ...item, isOpen: !item.isOpen };
      } else {
        // Close other accordion items when one is clicked
        return { ...item, isOpen: false };
      }
    });
    setAccordionItems(updatedAccordionItems);
  };
  
  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // routes for different options
    const routes = {
      //Students
      "Add New Students": "/admission",
      "List All Students": "",
      "Update Students Details": "",
      //attendance
      "Attendance register": "/attendanceRegister",
      "Student Attendance": "/studentAttendance",
      "Attendance Summary": "/attendanceSummary",
      //Fee Management
      StudentList: "/studentFeeList",
      "Fee Configuration": "/feeConfiguration",
      "Fee Collection": "/feeCollection",
      //Class Management
      TimeTable: "/addtimetable",
      "Attendance Register": "/attendanceRegister",
      "Student List": "/student/studentList",
      "Create Class": "/createClass",
      "Create Class Exam": "",
      // HRMS
      "Employee List": "/employeeList",
      "Leave Management": "/employeeMainList",
      "Employee Attendance": "/employeeattendance",
      //payroll
      "Payroll List": "/payroll",
      "New Bank Transfer": "/newBank",
      Payouts: "/payouts",
      //TimeTable
      "Add TimeTable ": "/addtimetable",
      "View TimeTable": "/viewtimetable",
      "Update TimeTable": "/updatetimetable",
    };
    if (routes.hasOwnProperty(option)) {
      navigate(routes[option]);
    }
  };

  return (
    <div className={custom.sidebar}>
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-customblue text-white dark:text-white"
      >
        {accordionItems.map((item, index) => (
          <div key={index} className={`${custom.features} shadow-primary rounded-xl mb-2`}>
            <h2 id={`accordion-color-heading-${index + 1}`}>
              <button
                type="button"
                className="sidebar-menu w-full flex items-center justify-between p-3 outline-none font-medium rtl:text-right text-gray-900 shadow-sm rounded-xl dark:border-gray-700 hover:bg-customblue  hover:text-white gap-3"
                aria-expanded={item.isOpen ? "true" : "false"}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="flex gap-4" style={{ minWidth: "1rem" }}>
                  <img src={item.imageURL} className={custom.featuresdivimg} alt="logo" />
                  <div className={custom.custom}>{item.title}</div>
                </div>
                <div className={custom.iconContainer}>
                  <svg
                    data-accordion-icon
                    className={`w-4 h-4 ${!item.isOpen ? "rotate-180" : ""} shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </div>
              </button>
            </h2>
            <div
              id={`accordion-color-body-${index + 1}`}
              className={`${item.isOpen ? "block" : "hidden"}`}
              aria-labelledby={`accordion-color-heading-${index + 1}`}
            >
              <div className="border-t border-gray-300 mt-2"></div>
              <div className="p-2">
                <div className={custom.dropdowncontent}>
                  {item.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`${custom.dropdownoption} ${
                        selectedOption === option ? custom.selected : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option} <TiTick className={custom.Icon} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
