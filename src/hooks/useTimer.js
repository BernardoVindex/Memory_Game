import { useState, useEffect, useRef } from "react";

export const useTimer = (dlTime, timerM) => { 
  const prepTime = 3
  const deadLineTime = dlTime

  const [counter, setCounter] = useState(prepTime)
  // Warning: This timer works for countdown_preparation, digital_clock
  const [clockType, setClockType] = useState('count_down_Clock')
  // 'countdown_preparation' || 'digital_clock'
  const [timerMode, setTimerMode] = useState('countDown')
  // 'countDown' || 'chronometer'


  const id = useRef(null);
  const stopTimer = () => {
    window.clearInterval(id.current)
  }
  
  const startCounting = (time) => {   
    id.current = window.setInterval( () => {
      setCounter((time) => {
      return (timerMode === 'chronometer')
        ? time + 1
        : time - 1})
  }, 1000)}
  
  // Warning, activate on useAppCotext
  // useEffect(() => {
  //   countDown()
  //   return () => stopTimer()
  // },[])

  useEffect(()=>{
    if(!counter) {
      stopTimer()
      setClockType('digital_Clock')
      setTimerMode(timerM)
      console.log(timerMode)
      setCounter(deadLineTime)
      startCounting()
    }
  },[counter])

  return {
    counter,
    clockType,
    timerMode,
    stopTimer,
    startCounting,
    setTimerMode,
    setClockType
  }
}


  // useEffect(()=>{
  //    id.current = window.setInterval( () => {
  //     //HardCoded value
  //     setTimer( (time) => time - 1 )
  //   }, 1000)
  //   return () => stopTimer()
  // },[])

  // const countDown = () => {   
  //   id.current = window.setInterval( () => {
  //   setTimer( (time) => time - 1 )
  // }, 1000)}

  // const chronometer = () => {
  //   id.current = window.setInterval( () => {
  //     setTimer( (time) => time + 1 )
  //   }, 1000)
  // }