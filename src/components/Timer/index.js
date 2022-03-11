import { TimeArea } from "./styles"
import { useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({ 
  cards,
  players,
  gameConfig,
  setGameConfig,
  changePlayerValues,
  checkForPlayers
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

     changePlayerValues('waiting','status','onMatch')
    //  changePlayerValues(
    //   'waiting',
    //   {status : 'onMatch'}
    //  )
  },[])

  useEffect(() => {

    if (!cards.some((card) => card.matched === false)) {
      changePlayerValues('onMatch','time',counter)
      checkForPlayers()
      
    }
  },[cards])

  return (
    <>
      <TimeArea
      >
        {counter}
      </TimeArea>
    </>
  )
}