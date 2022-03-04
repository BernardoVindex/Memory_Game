import { ButtonForm } from "./styles"

export const Button = ({ 
  value,
  className,
  setFunction,
  gameStateKey
}) => {

  const handlerEvent = () => {
    setFunction(prevState => ({
      ...prevState, 
      [gameStateKey]: value
    }))
  }
  
  return (
    <ButtonForm
      className={className}      
      onClick={handlerEvent}
      //glowCurrentState={glowCurrentState}
    >
      {className}
    </ButtonForm>
  )
}   