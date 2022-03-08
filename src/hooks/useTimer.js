import { useState, useEffect, useRef, useReducer } from "react";

const initialState = {
  counter: 3,
  clockType: 'countdown_preparation',
  TimerMode: 'countDown'
}

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'Preparation':
      return {
        ...state,
        counter: 3,
        clockType: 'countdown_preparation',
        TimerMode: 'countDown'
      }
    case 'Speed_Run':
      return {
        ...state,
        counter: 0,
        clockType: 'digital_clock',
        TimerMode: 'chronometer'
      }
    case 'Dead_Line':
      return {
        ...state,
        counter: action.payload,
        clockType: 'digital_clock',
        TimerMode: 'countDown'
      }
    case 'Add_Time':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'Reduce_Time':
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      throw new Error(`type action desconocido: ${action.type}`)
  }
}

export const useTimer = (gMode, gTime) => { 
  const [timerState, dispatchTimerState] = useReducer(timerReducer, initialState)

  const id = useRef(null);
  const stopTimer = () => {
    window.clearInterval(id.current)
  }


  const initializedTimer = () => {   
    id.current = window.setInterval(() => {
      (timerState.TimerMode === 'chronometer') 
        ? dispatchTimerState({type: 'Add_Time'})        
        : dispatchTimerState({type: 'Reduce_Time'})
      
      
        console.log(timerState)
  }, 1000)
  }

  useEffect(()=>{
    if (!timerState.counter) {
      stopTimer()
      dispatchTimerState({ type: gMode, payload: gTime})
      
      console.log(timerState.TimerMode)  
    } 

    if (!timerState.clockType === 'countdown_preparation') {
      //initializedTimer()
      console.log(timerState.TimerMode)  
    }
  },[timerState])

  return {
    timerState, 
    dispatchTimerState,
    initializedTimer,
    stopTimer,
  }
}

// const startCountDawn = () => {
//   id.current = window.setInterval(() => {
//     dispatchTimerState({type: 'Reduce_Time'})
//   }, 1000)
// }

// const startCrhonometer = () => {
//   id.current = window.setInterval(() => {
//     dispatchTimerState({type: 'Add_Time'})
//   }, 1000)
// }

  // Warning, activate on useAppCotext
  // useEffect(() => {
  //   countDown()
  //   return () => stopTimer()
  // },[])

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

  // const [counter, setCounter] = useState(prepTime)
  // // Warning: This timer works for countdown_preparation, digital_clock
  // const [clockType, setClockType] = useState('count_down_Clock')
  // // 'countdown_preparation' || 'digital_clock'
  // const [timerMode, setTimerMode] = useState('countDown')
  // // 'countDown' || 'chronometer'

    // const startCounting = (time) => {   
  //   id.current = window.setInterval( () => {
  //     setCounter((time) => {
  //     return (timerMode === 'chronometer')
  //       ? time + 1
  //       : time - 1})
  // }, 1000)}