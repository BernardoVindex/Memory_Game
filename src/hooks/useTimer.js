import { useState, useEffect, useRef, useReducer } from "react";


export const useTimer = () => { 
  const [counter, setCounter] = useState()
  const [timerMode, setTimerMode] = useState()

  const id = useRef(null);
  const stopTimer = () => {
    window.clearInterval(id.current)
  }

  const initiCounter = (gMode, gTime) => {   
    setTimerMode(gMode)
    setCounter(gTime)
  }
  
  // I´m pretty sure that there´s an error on this value
  // For instance, this code works
  useEffect(() => {
    if (timerMode !== undefined) {
      id.current = window.setInterval(() => { 
        (timerMode === 'Speed_Run') 
          ? setCounter( counter =>  counter + 1)
          : setCounter( counter =>  counter - 1)
      }, 1000)
    }

  },[timerMode])

  return {
    counter, 
    setTimerMode,
    setCounter,
    initiCounter,
    stopTimer
  }
}