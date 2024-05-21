import { useEffect, useState } from "react";
import TodaysBirthday from "../../components/DashBoard/TodaysBirthday";
import NoticeBoard from "../../components/DashBoard/NoticeBoard";
import ViewPost from "../../components/DashBoard/ViewPost";
import WritePost from "../../components/DashBoard/WritePost";
import FacultyOnLeave from "../../components/DashBoard/FacultyOnLeave";
import DashboardAttendanceSummary from "../../components/DashBoard/DashboardAttendanceSummary";
import PerformanceAnalytics from "../../components/DashBoard/PerformanceAnalytics";
import college from "../../assets/images/collegeimage.png";
import profile1 from "../../assets/images/profile1.png";

const viewPostDetails = [
  {
    image: college,
    content: "Principal just upload a pic of college",
    id: 1,
  },
  {
    image: profile1,
    content: "Suchita Mam , Wish you a Happy Birthday",
    id: 2,
  },
];

const DashboardPage = () => {
  const [post, setPost] = useState(viewPostDetails);

  function handleNewPost(post) {
    setPost((prevpost) => [...prevpost, post]);
  }

  useEffect(() => {
    document.title = "Dashboard"; // Set the title to 'Page Title'
    return () => {
      document.title = "School"; // Reset the title
    };
  }, []);

  return (
    <div className="overflow-y-scroll w-full scrollbarnone">
      <div className="grid grid-cols-[5fr 2fr] gap-4 grid-flow-col h-fit  max-[1280px]:grid-flow-row">
        <div className="col-span-6 grid  grid-cols-2 gap-4 h-full">
          <ViewPost post={post} />
          <WritePost handleNewPost={handleNewPost} />
          <FacultyOnLeave />
          <DashboardAttendanceSummary />
          <PerformanceAnalytics />
        </div>
        <div className="col-span-6 grid  grid-cols-2 gap-4 h-full">
          {/* gap-y-4 gap-x-3 */}
          <div className="xl:col-span-2 sm:col-span-6 h-fit">
            <NoticeBoard />
          </div>
          <div className="xl:col-span-2 sm:col-span-6 h-fit xl:h-full">
            <TodaysBirthday />
          </div>
        </div>
      </div>
    </div>

    // ------------------------ adding 2 rows--------//

    // <div className="overflow-y-scroll w-full scrollbarnone ">
    //   <div className="grid grid-rows-2 h-fit gap-4 m-1">
    //     <div className="grid grid-cols-[5fr 2fr] gap-4 grid-flow-col h-fit  max-[1280px]:grid-flow-row  ">
    //       <div className="col-span-6 grid  grid-cols-2 gap-4  h-fit ">
    //         <ViewPost post={post} />
    //         <WritePost handleNewPost={handleNewPost} />
    //         <FacultyOnLeave />
    //           {/* <DashboardAttendanceSummary />
    //           <PerformanceAnalytics /> */}
    //       </div>
    //       <div className="col-span-6 grid  grid-cols-2 gap-4 h-fit">
    //         {/* gap-y-4 gap-x-3 */}
    //         <div className="xl:col-span-2 sm:col-span-6 h-fit">
    //           <NoticeBoard />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-[5fr 2fr] gap-4 grid-flow-col h-fit  max-[1280px]:grid-flow-row  ">
    //       <div className="col-span-6 grid  grid-cols-2 gap-4  h-fit ">
    //         <DashboardAttendanceSummary />
    //         <PerformanceAnalytics />
    //       </div>
    //       <div className="col-span-6 grid  grid-cols-2 gap-4 h-fit">
    //         <div className="xl:col-span-2 sm:col-span-6  h-fit">
    //           <TodaysBirthday />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardPage;
