import { useEffect, useState, useRef } from "react"
import { Button } from "../Button";

export const Brake = ({ gameDispatch }) => {

  return (
  <>
    <p>Click when you´r ready</p>
    <Button
      className='Ready'
      type='playing'
      dispatch={gameDispatch}
    >
      READY!
    </Button>
  </>
  )
}

  // const [counter, setCounter] = useState(3)
  // useEffect(() => {
  //   const timer = 
  //     counter > 0 && setInterval(() => 
  //       setCounter(counter -1), 1000
  //   )
  //   return () => clearInterval(timer);
  // },[counter])
  
  // const [timer, setTimer] =   useState(3);
  // const id =  useRef(null);
  // const clear=()=>{
  //   window.clearInterval(id.current)
  // }

  // useEffect(()=>{
  //    id.current=window.setInterval(()=>{
  //     setTimer((time)=>time-1)
  //   },1000)
  //   return ()=> clear()
  // },[])

  // useEffect(()=>{
  //   if(timer===0){
  //     clear()
  //   }

  // },[timer])

  