import { COLORS } from "../colors";
import ChaiComponent from "../components/ChaiComponent";
import CourseListComponent from "../components/CourseListComponent";

const CourseListPage = () => {
  return (
    <div
      style={{ background: COLORS.bgGreen }}
      className={`w-full h-[100vh] p-4 text-center flex flex-col items-center`}
    >
      <div
        style={{ color: COLORS.headingGreen }}
        className={`text-6xl font-bold `}
      >
        Chai aur Code
      </div>
      <CourseListComponent />
      <ChaiComponent />
    </div>
  );
};

export default CourseListPage;
