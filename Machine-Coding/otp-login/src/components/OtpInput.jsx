import { useState, useRef, useEffect } from "react";

const OtpInput = ({ length }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([])

  const handleChange = (index,e) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length-1);
    if(index+1 < length) {
      inputRefs.current[index+1].focus();
    }
    setOtp(newOtp);
  }

  useEffect(() => {
    inputRefs.current[0].focus();

  },[])

  return (
    <div className="otp-input-flex">
      {otp.map((data, index) => {
        return (
          <input type="text" value={data} className="otp-input-field" 
          onChange={(e) => handleChange(index, e)}ref={(inputRef) => inputRefs.current[index] = inputRef}/>
        )
      }) }
    </div>
  );
};

export default OtpInput;
