import { COLORS } from "../colors";
import ChaiComponent from "../components/ChaiComponent";
import OtpComponent from "../components/OtpComponent";

const OtpPage = () => {
  return (
    <div style={{ background: COLORS.bgBlue }} className={`w-full h-[100vh] p-4 text-white text-center flex flex-col items-center`}>
      <div className="text-6xl font-bold">Chai aur Code</div>
      <OtpComponent length={4}/>
      <ChaiComponent />
    </div>
  );
};

export default OtpPage;
