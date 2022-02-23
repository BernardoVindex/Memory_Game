import { ButtonForm } from "./styles"

export const Button = ({ value, className, type, dispatch }) => {

  const handlerEvent = () => {
    dispatch({type: type, payload: value})
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