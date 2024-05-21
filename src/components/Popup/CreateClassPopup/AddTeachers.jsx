import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { FaStar } from "react-icons/fa";
// subjects data containing name, icon, and options
const subjects = [
  {
    name: "Mathematics",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita ",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Hindi",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "English",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "P.T",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Telugu",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Social",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Sanskrit",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics Teacher",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Spanish",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics Teacher",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "Music",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics Teacher",
        image: "/assets/images/profile1.png",
      },
    ],
  },
  {
    name: "French",
    icon: <MdExpandMore size={24} />,
    options: [
      {
        text: "Suchita",
        role: "Class Teacher",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Sandeep",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
      {
        text: "Suchita",
        role: "Mathamatics",
        image: "/assets/images/profile1.png",
      },
    ],
  },
];

const AddTeachers = () => {
  // State variables to manage selected options and open subjects
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openSubject, setOpenSubject] = useState(null);
  // selecting an option
  const handleSelectOption = (subjectIndex, option) => {
    // Update selected options state with the selected option
    const updatedOptions = { ...selectedOptions, [subjectIndex]: option };
    setSelectedOptions(updatedOptions);
    setOpenSubject(null); // Close the dropdown after selecting an option
  };
  // toggle dropdown visibility
  const toggleDropdown = (index) => {
    setOpenSubject(openSubject === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-between gap-[16px] w-full  rounded-[14px] cursor-pointer">
      {/* Map over subjects and render them in rows */}
      {subjects
        .reduce((rows, subject, index) => {
          // Start a new row for every 4 subjects
          if (index % 4 === 0) rows.push([]);
          // Push the subject into the current row
          rows[rows.length - 1].push(subject);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-3 justify-between text-zinc-600 max-md:flex-wrap"
          >
            {/* Map over subjects in the current row and render them */}
            {row.map((subject, columnIndex) => (
              <div key={`${rowIndex}-${columnIndex}`} className="relative">
                {/* Subject dropdown option  */}
                <div
                  className="flex gap-[8px] justify-between p-[8px] h-[52px] text-center whitespace-nowrap bg-white rounded-[14px] shadow-md cursor-pointer relative"
                  onClick={() => toggleDropdown(rowIndex * 4 + columnIndex)}
                >
                  <div className="flex justify-center items-center w-[178px] text-center">
                    {selectedOptions[rowIndex * 4 + columnIndex] ? (
                      <>
                        <img
                          src={
                            selectedOptions[rowIndex * 4 + columnIndex].image
                          }
                          alt={selectedOptions[rowIndex * 4 + columnIndex].text}
                          className="w-8 h-8 mr-2"
                        />
                        <div className="flex flex-col">
                          <span>
                            {selectedOptions[rowIndex * 4 + columnIndex].text}
                          </span>
                          {selectedOptions[rowIndex * 4 + columnIndex].role && (
                            <span className="text-gray-500">
                              {selectedOptions[rowIndex * 4 + columnIndex].role}
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      subject.name
                    )}
                  </div>
                  <div className="flex justify-center items-center rounded-[4px]">
                    {subject.icon}
                  </div>
                </div>
                {openSubject === rowIndex * 4 + columnIndex && (
                  <div className="absolute left-0 gap-[6px] mt-1 flex flex-col w-[100%] bg-white border-gray-200 rounded-[14px] shadow-primart z-10">
                    {/* Check if subject options exist and is an array */}
                    {Array.isArray(subject.options) &&
                      subject.options.map((option, optionIndex) => {
                        console.log("Option:", option);
                        return (
                          <div
                            key={optionIndex}
                            className="p-2 gap-2 shadow-primary m-1 rounded-[14px] hover:bg-blue-100 "
                            onClick={() => {
                              console.log("Selected option:", option);
                              handleSelectOption(
                                rowIndex * 4 + columnIndex,
                                option
                              );
                            }}
                          >
                            <div className="flex items-center  justify-start gap-4">
                              {option && option.image && (
                                <img
                                  src={option.image}
                                  alt={option.text}
                                  className="w-8 h-8 "
                                />
                              )}
                              <div className="flex flex-col shrink-0">
                                <span className="text-gray-900 font-bold">
                                  {option.text}
                                </span>
                                {option.role && (
                                  <span className="text-gray-500 ">
                                    {option.role}
                                  </span>
                                )}
                              </div>
                              {option.role === "Class Teacher" && (
                                <FaStar className="text-yellow-500 ml-4" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            ))}
            {row.length < 4 && <div className="flex-grow" />}
          </div>
        ))}
    </section>
  );
};

export default AddTeachers;
