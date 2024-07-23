import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const OtpComponent = ({ length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isSuccess, setIsSuccess] = useState(null);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const blurAllInputs = () => {
    inputRefs.current.forEach((input) => {
      if (input) {
        input.blur(); // Remove focus from the input field
      }
    });
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleNavigation = () => {
    navigate("/course-list");
  };

  const handleVerification = (otp) => {
    if (otp.length === length && otp === "1234") {
      setIsSuccess(true);
      blurAllInputs();
      setTimeout(() => {
        handleNavigation();
      }, 2000);
    } else if (otp.length === length && otp !== "1234") {
      setIsSuccess(false);
      blurAllInputs();
    } else {
      setIsSuccess(null);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    handleVerification(combinedOtp);

    if (value && inputRefs.current[index + 1] && index + 1 < length) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // when click on any input, focus should go to it's preveious input if it is blank
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const getVerificationStyle = () => {
    const textColor = "white";
    let bgColor = "#102E4E";
    let border = "#015ECC";
    switch (isSuccess) {
      case true:
        bgColor = "#23CF9B";
        border = "#23CF9B";
        break;
      case false:
        bgColor = "#EB2D5B";
        border = "#EB2D5B";
        break;
      default:
        break;
    }

    return {
      textColor,
      bgColor,
      border,
    };
  };

  return (
    <div className="mt-[5%] bg-white w-fit rounded-md py-[2%] px-[0.5%] text-black flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Mobile Phone Verification</h1>
      <h1 className="text-lg text-[#BFBFBF] mb-2 w-[66%]">
        Enter the 4-digit verification code that was sent to your phone number
      </h1>
      <div className="w-fit flex flex-col">
        <div className="w-[100%] mb-2">
          {otp.map((value, index) => {
            return (
              <input
                key={index}
                ref={(input) => (inputRefs.current[index] = input)}
                type="text"
                style={{ border: `1px solid ${getVerificationStyle().border}` }}
                className="border bg-[#DCE2EF] text-center w-14 h-14 rounded-md m-2"
                value={value}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>

        <button
          style={{ background: getVerificationStyle().bgColor }}
          className={` text-white py-2 rounded-md mb-2`}
        >
          {isSuccess === true && "Verified"}
          {isSuccess === false && "Verification failed"}
          {isSuccess === null && "Verify Account"}
        </button>

        <div>
          <h1 className="text-sm text-[#BFBFBF] mb-2">
            Didn&apos;t received code?{" "}
            <span className="text-[#4A6078] cursor-pointer">Resend</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OtpComponent;
