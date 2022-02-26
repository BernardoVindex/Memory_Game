import { useEffect, useState, useRef } from "react"

export const Brake = () => {
  // const [counter, setCounter] = useState(3)

  // useEffect(() => {
  //   const timer = 
  //     counter > 0 && setInterval(() => 
  //       setCounter(counter -1), 1000
  //   )
    
  //   console.log('Render desde el useEffect')
  //   return () => clearInterval(timer);
  // },[counter])
  
  const [timer, setTimer] =   useState(3);
  const id =  useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
}
  useEffect(()=>{
     id.current=window.setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)
    return ()=>clear();    
  },[])

  useEffect(()=>{
    if(timer===0){
      clear()
    }

  },[timer])

  return (
  <>
    <p>Brake</p>
    {timer}
  </>
  )
}