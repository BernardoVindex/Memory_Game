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
    timerState, 
    dispatchTimerState,
    initializedTimer,
    stopTimer,
    startCountDawn,
    
  } = useTimer()
    
  // Preparation Timer
  useEffect(() => {
    //initializedTimer(timerState.TimerMode)  
    startCountDawn()
    console.log('Start countdown preparation')
  },[])
  // console.log(timerState.TimerMode)
  useEffect(()=>{
    if (!timerState.counter && timerState.clockType === 'countdown_preparation') {
      stopTimer()
      dispatchTimerState({ type: gameConfig.gameMode, payload: gameConfig.time})
    }
    
    if (timerState.clockType === 'digital_clock' && timerState.TimerMode === 'chronometer')
      console.log('Aumento cronometro') //startCrhonometer()
    // console.log('Disminuye cronometro')//startCountDawn()

  },[timerState])

  // Time Over
  useEffect(()=>{
    if (!timerState.counter && gameConfig.gameMode === 'Dead_Line') {
        console.log('conrtrol 2')
    }
  },[timerState])
  // Round Finish
  useEffect(() => {
    if (!cards.some((card) => card.matched === false)) {
      console.log('FINISHED!')
    }
  },[cards])
  //console.log(timerState)

  //console.log(timerState.counter)
  // useEffect(() => {
  //   if (!counter)

  //   playersDispatch({ 
  //     type: 'onTurn', playerStatus: 'waiting'
  //   })
  // },[counter])

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
        clockType='Tipo de relok'
      >
        {}
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