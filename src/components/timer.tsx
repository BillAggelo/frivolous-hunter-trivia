import * as React from "react";
import { BiTimer } from "react-icons/bi";
const { useEffect, useState } = React;

const Timer = (props: any) => {
  const [timeLeftInSeconds, setTimeLeftInSeconds] = useState<number>(
    props.timeoutInSeconds
  );
  const [isTimeStoped, setIsTimeStoped] = useState<boolean>(props.isStoped);

  useEffect(() => {
    setTimeLeftInSeconds(props.timeoutInSeconds);
  }, [props.timeoutInSeconds]);

  useEffect(() => {
    setIsTimeStoped(props.isStoped);
  }, [props.isStoped]);

  useEffect(() => {
    const interval: any = setInterval(() => {
      if (!isTimeStoped) {
        const newTimeLeftInMillis = timeLeftInSeconds - 1;
        return newTimeLeftInMillis < 0
          ? clearInterval(interval)
          : setTimeLeftInSeconds(timeLeftInSeconds - 1);
      } else setTimeLeftInSeconds(timeLeftInSeconds);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="row mt-2 text-center">
      <div className="col">
        <h3
          id="questionTimer"
          style={{
            fontWeight: "bold",
            fontFamily: "Segoe Print",
            textAlign: "right",
          }}
        >
          {timeLeftInSeconds}
        </h3>
      </div>
      <div className="col" style={{ textAlign: "left" }}>
        <BiTimer size={30} />
      </div>
    </div>
  );
};

export default Timer;
