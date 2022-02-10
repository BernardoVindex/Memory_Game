import { ButtonForm } from "./styles"

export const Button = ({ value, className, setFunction }) => {

  const handlerEvent = () => {
    setFunction(value)
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