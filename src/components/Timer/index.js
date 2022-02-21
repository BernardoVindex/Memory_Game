import { TimeArea } from "./styles"
import { useState, useEffect } from "react";

export const Timer = ({ cards, player, setStartGame }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  
  useEffect(()=> {
    let intervalId = null
    
    if (cards.some((card) => card.matched === false)) {
      intervalId = setInterval(() => {
        setTimeLeft((sec) => sec + 1)
      },100)
    } else {
      clearInterval(intervalId)
      //setStartGame(false)
    }

    return () => {clearInterval(intervalId)}
  },[cards])


  return (
    <TimeArea>
      {timeLeft}
    </TimeArea>
  )
}