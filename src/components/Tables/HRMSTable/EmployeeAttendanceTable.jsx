//Implemented by swati
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/StudentAttendanceTable.module.css";
import profile from "../../../assets/images/table-profile.webp";

const EmployeeAttendanceTable = ({ filteredEmployeeData, statusHandler }) => {
  const navigate = useNavigate();

  const employeeAttendanceColumnArr = [
    "Employee ID",
    "Designation",
    "Total working days",
    "Total Absent",
    "Percentage",
    "Status",
  ];

  function clickHandler(employee) {
    statusHandler(
      employee,
      employee.status === "absent" ? "present" : "absent"
    ); //statusHandler is props function to toggle the status.
  }

  function getDetails(empId) {
    navigate(`leavemanagement/${empId}`);
  }

  return (
    <div
      className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">
              <table className="w-full  flex flex-col gap-[10px]">
                <thead className="pr-2">
                  <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                    <th
                      className={`w-40 h-fit text-custom text-center font-bold`}
                    >
                      Employee Name
                    </th>
                    {employeeAttendanceColumnArr.map((header) => {
                      //employeeAttendanceColumnArr is containing header names
                      return (
                        <th
                          key={header}
                          className={`w-40 h-fit text-custom text-center font-bold`}
                        >
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                  {filteredEmployeeData.map((employee) => {
                    //filteredEmployeeData is props containing row data
                    return (
                      <tr
                        key={employee.id}
                        className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                        onClick={() => getDetails(employee.empId)}
                      >
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          <div className="flex gap-2 self-stretch text-lg leading-5 text-center text-black">
                            <img
                              loading="lazy"
                              src={profile}
                              alt={`Avatar of student`}
                              className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]"
                            />{" "}
                            <div className="my-auto">{employee.empName}</div>{" "}
                          </div>{" "}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {employee.empId}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {employee.designation}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {employee.workingDays}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {employee.absent}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {`${
                            (employee.workingDays - employee.absent) *
                            Math.floor(100 / employee.workingDays)
                          }%`}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal flex justify-center">
                          {/* toggle button */}
                          <div
                            className="flex flex-col justify-center self-stretch my-auto w-[40px]"
                            onClick={(e) => {
                              e.stopPropagation();
                              clickHandler(employee);
                            }}
                          >
                            <div
                              className={
                                employee.status === "present"
                                  ? `${styles["toggle-btn"]}  ${styles["success"]} cursor-pointer`
                                  : `${styles["toggle-btn"]} cursor-pointer`
                              }
                            >
                              <div
                                className={
                                  employee.status === "present"
                                    ? `${styles["toggle-icon"]} ${styles["success-icon"]}`
                                    : styles["toggle-icon"]
                                }
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendanceTable;
