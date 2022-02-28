import { ButtonForm } from "./styles"

export const Button = ({ value, className, type, dispatch, playerStatus }) => {

  const handlerEvent = () => {
    dispatch({type: type, payload: value, playerStatus: playerStatus})
  }
  
  return (
    <ButtonForm
      className={className}      
      onClick={handlerEvent}
    >
      {className}
    </ButtonForm>
  )
}   