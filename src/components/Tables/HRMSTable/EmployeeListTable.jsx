// Created by Athira
import { useNavigate } from "react-router-dom";
import employeeImage from './../../../assets/images/employeeImage.png';

export default function EmployeeListTable({ employeeListColumn, employeeDetails, selectEmployeeRole }) {
  const navigate = useNavigate();

   function getDetails(data) {
     navigate(`employeeprofile/${data.id}/${data.Role}`);
   }
  return (
    <>
      <div className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}>
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full  sm:px-5 lg:px-7">
              <div className="overflow-hidden">
                
                <table className="w-full flex flex-col gap-[10px]">

                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md text-lg">
                      {employeeListColumn.map(({label,value,downicon,upicon}) => {
                        return (
                          <th
                            key={label}
                            className={`w-40 h-[19px] text-customtext font-bold text-center`}
                          >
                            {label}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {employeeDetails.length !== 0 &&
                      Array.isArray(employeeDetails) &&
                      employeeDetails.map((data, index) => {
                        return selectEmployeeRole !== "Teaching" ? (
                          // Row for non-teaching employees
                          <tr key={index} className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md cursor-pointer"
                            onClick={()=>getDetails({id:data.employeeCustomId,Role:data.Role})}
                          >
                            {/* Columns for non-teaching employees */}
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal flex gap-2 items-center">
                              <img src={data.image?data.image:employeeImage} className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]" />
                              {data.FirstName + ' ' + data.MiddleName + ' ' + data.LastName}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.employeeCustomId}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.Designation}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.Qualification}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.Role}
                            </td>
                          </tr>
                        ) : (
                          // Row for teaching employees
                          <tr key={index} className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-primary cursor-pointer"
                            onClick={getDetails}
                          >
                            {/* Columns for teaching employees */}
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal flex gap-2 items-center">
                              <img src={data.image?data.image:employeeImage} className="shrink-0 rounded-full aspect-square w-[40px] h-[40px]" />
                              {data.FirstName + ' ' + data.MiddleName + ' ' + data.LastName}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.id}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.PrimarySubject}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.SecondarySubject}
                            </td>
                            <td className="w-40 h-fit text-customtext lg:text-customtext text-center font-normal">
                              {data.Qualification}
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
    </>
  );
}
