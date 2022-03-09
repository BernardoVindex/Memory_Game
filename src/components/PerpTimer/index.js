import { useEffect } from "react"
import { useTimer } from "../../hooks/useTimer"
import { PrepT } from "./styles"

export const PrepTimer = ({ gameConfig, children }) => {
  
  const {
    counter, 
    setCounter,
    initiCounter,
    stopTimer
  } = useTimer()
  
  
  useEffect(() => {
    initiCounter('DeadLine',3) 
  },[])

  useEffect(() => {
    if (!counter) {
      stopTimer()
    }
  },[counter])

  return (
    <>
    {(counter !== 0) && (
      <PrepT>
        {counter}
      </PrepT>
    )}
    {(!counter) && (
      <section>
        {children}
      </section>
    )
    }
    </>
  )
}

