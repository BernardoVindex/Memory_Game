import { ButtonForm } from "./styles"

export const Button = ({ 
  value,
  className,
  type,
  dispatch,
  playerStatus,
  glowCurrentState }) => {

  const handlerEvent = () => {
    dispatch({type: type, payload: value, playerStatus: playerStatus})
  }
  
  return (
    <ButtonForm
      className={className}      
      onClick={handlerEvent}
      glowCurrentState={glowCurrentState}
    >
      {className}
    </ButtonForm>
  )
}   