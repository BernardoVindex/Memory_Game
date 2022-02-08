import { ButtonForm } from "./styles"

export const Button = (props) => {

  const handlerEvent = () => {
    props.setFunction(props.value)
  }
  
  return (
    <ButtonForm
      className={props.className}      
      onClick={handlerEvent}
    >
      {props.className}
    </ButtonForm>
  )
} 