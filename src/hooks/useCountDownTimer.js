import { useState } from "react";

export function useContDownTimer() {
  const [timer, setTimer] = useState(0)

  const id =  useRef(null);
  const stopTimer=()=>{
    window.clearInterval(id.current)
  }

  useEffect(()=>{
     id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)
    return ()=> clear()
  },[])

  return (
    timer,
    stopTimer
  )

}