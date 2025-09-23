import React, { useState, useRef, useEffect } from 'react';

/**
 * Modern OTP Input Component
 * Provides individual boxes for each OTP digit with smooth UX
 */
const OTPInput = ({ length = 6, onComplete, value, onChange }) => {
  const [otp, setOtp] = useState(value || new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (value) {
      const valueArray = value.split('');
      const newOtp = new Array(length).fill('');
      valueArray.forEach((digit, index) => {
        if (index < length) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);
    }
  }, [value, length]);

  useEffect(() => {
    const otpString = otp.join('');
    onChange(otpString);
    if (otpString.length === length) {
      onComplete(otpString);
    }
  }, [otp, length, onChange, onComplete]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];
      
      if (newOtp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (e.target.previousSibling) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        e.target.previousSibling.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '');
    const pastedArray = pastedData.split('').slice(0, length);
    
    const newOtp = [...otp];
    pastedArray.forEach((digit, index) => {
      if (index < length) {
        newOtp[index] = digit;
      }
    });
    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : length - 1;
    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200 bg-white"
          style={{
            boxShadow: digit ? '0 0 0 1px #3B82F6' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;