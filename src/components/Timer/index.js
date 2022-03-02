import { TimeArea } from "./styles"
import { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({ cards, playersDispatch }) => {
  
  const { counter, clockType } = useTimer(3)
  
  useEffect(() => {
    if (!counter) 
    playersDispatch({ 
      type: 'onTurn', playerStatus: 'waiting'
    })
  },[counter])

  useEffect(() => {
    if (!cards.some((card) => card.matched === false)) {
      playersDispatch({ 
      type: 'onFinish',
      payload: counter,
      playerStatus: 'onMatch'
      })
    }

  },[cards])

  return (
    <>
      <TimeArea
        clockType={clockType}
      >
        {counter}
      </TimeArea>
    </>
  )
}

  // useEffect(()=> {
  //   let intervalId = null

  //   if (timeLeft === 0) pslayersDispatch({ 
  //     type: 'onTurn', playerStatus: 'waiting'
  //    })
    
  //   if (cards.some((card) => card.matched === false)) {
  //     intervalId = setInterval(() => {
  //       setTimeLeft((sec) => sec + 1)
  //     },100)
  //   } else {
  //     clearInterval(intervalId)
  //     playersDispatch({ 
  //       type: 'onFinish',
  //       payload: timeLeft,
  //       playerStatus: 'onMatch'
  //     })    
  //     setTimeLeft(0)
  //   }

  //    return () => {clearInterval(intervalId)}
  //  },[cards],[timeLeft])