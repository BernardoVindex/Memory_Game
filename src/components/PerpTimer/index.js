import { useEffect } from "react"
import { useTimer } from "../../hooks/useTimer"
import { PrepT } from "./styles"

export const PrepTimer = ({ gameConfig, children }) => {
  
  const {
    counter, 
    dispatchTimerState,
    initiCounter,
    stopTimer
  } = useTimer(gameConfig.time, gameConfig.gameMode)
  
  useEffect(() => {
    initiCounter() 
  },[])

  useEffect(() => {
    if (!counter) {
      stopTimer()
    }
  },[timerState])

  return (
    <>
    {(counter !== 0) && (
      <PrepT>
        {counter}
      </PrepT>
    )}
    {(
      //timerState.clockType === 'digital_clock'
      !counter
     ) &&
    (
      <section>
        {children}
      </section>
    )
    }
    </>
  )
}

