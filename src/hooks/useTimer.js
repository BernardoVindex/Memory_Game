import { useState, useEffect, useRef } from "react";

export const useTimer = (time) => {
  const [counter, setTimer] = useState(time)
  const [clockType, setClockType] = useState('count_down_Clock')

  const id = useRef(null);
  const stopTimer = () => {
    window.clearInterval(id.current)
  }
  
  const countDown = () => {   
    id.current = window.setInterval( () => {
    setTimer( (time) => time - 1 )
  }, 1000)}

  const chronometer = () => {
    id.current = window.setInterval( () => {
      setTimer( (time) => time + 1 )
    }, 1000)
  }
  
  useEffect(() => {
    countDown()
    return () => stopTimer()
  },[])


  useEffect(()=>{
    if(!counter) {
      stopTimer()
      chronometer()
      setClockType('digital_Clock')
    }
  },[counter])

  

  return {
    counter,
    countDown,
    chronometer,
    clockType 
    
  }
}


  // useEffect(()=>{
  //    id.current = window.setInterval( () => {
  //     //HardCoded value
  //     setTimer( (time) => time - 1 )
  //   }, 1000)
  //   return () => stopTimer()
  // },[])
