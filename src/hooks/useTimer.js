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
    console.log({timerMode})
  }
  
  // I´m pretty sure that there´s an error on this value
  // For instance, this code works
  useEffect(() => {
    if (timerMode !== undefined) {
      console.log({timerMode})
      id.current = window.setInterval(() => { 
        (timerMode === 'Speed_Run') 
          ? setCounter( counter =>  counter + 1)
          : setCounter( counter =>  counter - 1)
  
          console.log({timerMode})
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