import React, { forwardRef } from "react";

type Props = {
  nextRef?: React.RefObject<HTMLInputElement>;
  prevRef?: React.RefObject<HTMLInputElement>;
  onDone?: () => void;
};

function OtpBoxEg({ nextRef, prevRef, onDone }: Props, ref: React.Ref<HTMLInputElement>) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1) {
      if (nextRef?.current) {
        nextRef.current.focus(); 
      } else if (onDone) {
        onDone(); 
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && e.currentTarget.value === "") {
      if (prevRef?.current) {
        prevRef.current.focus(); 
      }
    }
  };

  return (
    <input
      ref={ref}
      type="text"
      maxLength={1}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="h-14 w-12 bg-gray-500 text-white rounded-2xl px-4 text-center text-xl focus:outline-none"
    />
  );
}

const OtpBox = forwardRef(OtpBoxEg);
OtpBox.displayName = "OtpBox";

export default OtpBox;
