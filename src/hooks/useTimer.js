import { useState, useEffect, useRef } from "react";

export const useTimer = (time) => {
  const [counter, setTimer] = useState(time)
  
  const id = useRef(null);
  const stopTimer = () => {
    window.clearInterval(id.current)
  }

  const timerMode = {
    countDown: (time) => time - 1,
    chronometer: (time) => time + 1
  }
  useEffect(()=>{
     id.current = window.setInterval( () => {
      //HardCoded value
      setTimer( timerMode.countDown )
    }, 1000)
    return () => stopTimer()
  },[])

  useEffect(()=>{
    if(counter === 0){
      stopTimer()
    }
  },[counter])

  return {
    counter,
    stopTimer
  }

}