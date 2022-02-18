import { TimeArea } from "./styles"
import { useState, useEffect } from "react";

export const Timer = ({ cards, player }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  
  const intervalId = setInterval(() => {
    setTimeLeft((t) => t + 1)
  }, 1000);

  useEffect(() => {
    //console.log(timeLeft)
    
    (cards.some((card) => card.matched == false))
      ? console.log('faltan cartas por emparejar')
      : clearInterval(intervalId)//console.log('se han emparejado todas las cartas')

    return () => clearInterval(intervalId);
  }, [cards]);
  
  

  return (
    <TimeArea>
      {timeLeft}
    </TimeArea>
  )
}