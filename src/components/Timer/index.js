import { TimeArea } from "./styles"
import { useState, useEffect } from "react";

export const Timer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  
  if (!timeLeft) setTimeLeft('Time is Over ')

  return (
    <TimeArea>
      {timeLeft}
    </TimeArea>
  )
}