import {useEffect,useState} from 'react';
import styles from '../../styles/MainComponent.module.css'
import EnrollmentButtons from "../../components/Buttons/EnrollmentButtons/EnrollmentButtons"
import EnrollmentTable from '../../components/Tables/EnrollmentTable/EnrollmentTable';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// const pathname = useLocation().pathname;



const EnrollmentDashboard = () => {

const [refetch, setRefetch] = useState(false);

  
  function handleEnrollRefetch() {
    // console.log("refetch", refetch)
    setRefetch((prev) => !prev);
  }

    useEffect(()=>{
        document.title="Admission"
        return ()=>{
          document.title="School"
        };
    }, []);
  
  // "id": "86e5",
  //     "firstName": "kjkjk",
  //     "middleName": "kk",
  //     "lastName": "klk",
  //     "class": "lkl",
  //     "aadharCardNo": "",
  //     "gender": "njkhtrtyf",
  //     "dOB": "ffgf",
  //     "motherTongue": "ftffy",
  //     "bloodGroup": "ftyfyuf",
  //     "previousSchool": "yffyu",
  //     "emisNo": "",
  //     "phoneNo": "ftyftyfy",
  //     "caste": "fytfytf",
  //     "religion": "ftftft",
  //     "enrollNumber": 101,
  //     "aadhaarNumber": "lklkl",
  //     "eMISNo": "yuuy",
  //     "status": "Pending",
  //     "fatherName": "ugugu",
  //     "motherName": "hghgi",
  //     "fatherMobileNo": "jhihih",
  //     "motherMobileNo": "uhuihi",
  //     "fatherEmail": "uihihiuh",
  //     "motherEmail": "uhiuh",
      
      const EnrollmentColumnArr = [
        {
          label: "Enroll.no",
          value: "enrollNumber",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Name",
          value: "firstName",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Class",
          value: "class",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Father's Name",
          value: "fatherName",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Phone No",
          value: "fatherMobileNo",
          downicon: <MdOutlineKeyboardArrowDown />,
          upicon: <MdOutlineKeyboardArrowUp />,
        },
        {
          label: "Status",
          value: "status",
          downicon: "",
          upicon: "",
        },
      ];
     

      const [enrollmentColumn, setEnrollmentColumn] = useState(EnrollmentColumnArr);
      const [enrollmentdetails, setEnrollmentDetails] =useState([]);
      // const handleEnrollColumn = (newColumn) => {
      //   setEnrollmentColumn(columns=>[...columns,newColumn])
      // }
      
    function handleDeleteEnrollDetails() {
      setEnrollmentDetails([]) 
    }
    // function handleDeleteEachRowDetails(id) {
    //   const updatedPayDetails = enrollmentdetails.filter((detail) => {
    //     return detail.id !== Number(id);
    //   });
    //   setEnrollmentDetails(updatedPayDetails);
    // }
    // function handleUpdateEachRowDetails(updatedRowDetails, updateId) {
    //   const index = enrollmentdetails.findIndex(
    //     (data) => data.id === updateId
    //   );
    //   enrollmentdetails[index] = {
    //     id: enrollmentdetails[index].id,
    //     ...updatedRowDetails,
    //   };
    // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setEnrollmentDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [refetch]);

const handleAddStudentDetails = (newDetails) => {
  const updatedDetailsArray = [...enrollmentdetails];
  updatedDetailsArray.push({
    // id: Math.random(),
    ...newDetails,
  });
  setEnrollmentDetails(updatedDetailsArray);
  setRefetch(!refetch)
  };
  
//   function handleUpdate(){
// setRefetch(!refetch);
//   }

  return (
    <div
      // className={styles.container}
      className="flex flex-col gap-4 w-full overflow-hidden rounded-2xl"
    >
      <EnrollmentButtons
        // handleEnrollColumn={handleEnrollColumn}
        enrollmentdetails={enrollmentdetails}
        handleDeleteEnrollDetails={handleDeleteEnrollDetails}
        setEnrollmentDetails={setEnrollmentDetails}
        handleAddStudentDetails={handleAddStudentDetails}
        // handleUpdate={handleUpdate}
      />
      <EnrollmentTable
        enrollmentColumn={enrollmentColumn}
        enrollmentdetails={enrollmentdetails}

        // handleEnrollRefetch={handleEnrollRefetch}
        setEnrollmentDetails={setEnrollmentDetails}
      />
    </div>
  );
}

export default EnrollmentDashboard
