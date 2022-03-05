import { TimeArea } from "./styles"
import { useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({ 
  cards,
  players,
  gameConfig,
  setGameConfig,
  changePlayerValues
}) => {  
  
  const {
    counter,
    clockType,
    timerMode,
    stopTimer,
    startCounting,
    setTimerMode,
    setClockType
  } = useTimer(gameConfig.time, gameConfig.gameMode)
    
  useEffect(() => {
    startCounting()
    console.log('Start countdown preparation')
  },[])


  useEffect(() => {
    //if (!counter)
    //stopTimer()
    //setClockType('digital_clock')  
    //changePlayerValues('waiting','status','onMatch')
    //console.log(gameConfig.time)
    //startCounting(gameConfig.time)
    

  //   // playersDispatch({ 
  //   //   type: 'onTurn', playerStatus: 'waiting'
  //   // })
  },[counter])

  useEffect(() => {
    if (!cards.some((card) => card.matched === false)) {
    //   playersDispatch({ 
    //   type: 'onFinish',
    //   payload: counter,
    //   playerStatus: 'onMatch'
    //   })

      setGameConfig()
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