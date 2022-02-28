import { TimeArea } from "./styles"
import { useState, useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({ cards, playersDispatch, gameDispatch, players }) => {
  
  const { counter } = useTimer(3)
  
  return (
    <>
    {(counter !== 0) && (
      <>
      <p>Ready on</p>
      <p>
        {counter}
      </p>
      </>
    )}
    
    {/* <TimeArea

    >
      {counter}
    </TimeArea> */}
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