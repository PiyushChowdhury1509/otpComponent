import OtpBox from "./otpBox";
import { useRef } from "react";

type Props = {
  setDisable: (disabled: boolean) => void;
};

const Otp = ({ setDisable }: Props) => {
  const ref1 = useRef<HTMLInputElement>(null!);
  const ref2 = useRef<HTMLInputElement>(null!);
  const ref3 = useRef<HTMLInputElement>(null!);
  const ref4 = useRef<HTMLInputElement>(null!);
  const ref5 = useRef<HTMLInputElement>(null!);
  const ref6 = useRef<HTMLInputElement>(null!);

  return (
    <div className="flex justify-between mx-20">
      <OtpBox ref={ref1} nextRef={ref2} />
      <OtpBox ref={ref2} prevRef={ref1} nextRef={ref3} />
      <OtpBox ref={ref3} prevRef={ref2} nextRef={ref4} />
      <OtpBox ref={ref4} prevRef={ref3} nextRef={ref5} />
      <OtpBox ref={ref5} prevRef={ref4} nextRef={ref6} />
      <OtpBox ref={ref6} prevRef={ref5} onDone={() => setDisable(false)} />
    </div>
  );
};

export default Otp;
