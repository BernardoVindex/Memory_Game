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
    setCounter,
    initiCounter,
    stopTimer
  } = useTimer()
  
  useEffect(() => {
    (gameConfig.gameMode === 'Speed_Run')
     ? initiCounter(gameConfig.gameMode, 0)
     : initiCounter(gameConfig.gameMode, gameConfig.time)
  },[])

  return (
    <>
      <TimeArea
      >
        {counter}
      </TimeArea>
    </>
  )
}