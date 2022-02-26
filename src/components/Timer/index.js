import { TimeArea } from "./styles"
import { useState, useEffect } from "react";

export const Timer = ({ cards, playersDispatch, gameDispatch, players }) => {
  const [timeLeft, setTimeLeft] = useState(0)
  
  useEffect(()=> {
    let intervalId = null

    if (timeLeft === 0) playersDispatch({ 
      type: 'onTurn', playerStatus: 'waiting'
     })
    
    if (cards.some((card) => card.matched === false)) {
      intervalId = setInterval(() => {
        setTimeLeft((sec) => sec + 1)
      },100)
    } else {
      clearInterval(intervalId)
      playersDispatch({ 
        type: 'onFinish',
        payload: timeLeft,
        playerStatus: 'onMatch'
      })    
      setTimeLeft(0)
    }

     return () => {clearInterval(intervalId)}
   },[cards],[timeLeft])


  return (
    <TimeArea>
      {timeLeft}
    </TimeArea>
  )
}