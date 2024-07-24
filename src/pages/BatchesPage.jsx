import { COLORS } from "../colors";
import BatchesComponent from "../components/BatchesComponent";
import ChaiComponent from "../components/ChaiComponent";

const BatchesPage = () => {
  return (
    <div
      style={{ background: COLORS.bgPink }}
      className={`w-full h-[100vh] p-4 text-center flex flex-col items-center`}
    >
      <div
        style={{ color: COLORS.headingBlue }}
        className={`text-6xl font-bold `}
      >
        Chai aur Code
      </div>
      <BatchesComponent />
      <ChaiComponent />
    </div>
  );
};

export default BatchesPage;
