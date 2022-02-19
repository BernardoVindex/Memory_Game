import { TimeArea } from "./styles"
import { useState, useEffect } from "react";

export const Timer = ({ cards, player }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  
  useEffect(()=> {
    let intervalId = null
    
    if (timeLeft === 0) {
      intervalId = setInterval(() => {
        setTimeLeft((sec) => sec + 1)
      },100)
    } else {
      clearInterval(intervalId)
      
    }

    return () => {clearInterval(intervalId)}
  },[cards])


  return (
    <TimeArea>
      {timeLeft}
    </TimeArea>
  )
}