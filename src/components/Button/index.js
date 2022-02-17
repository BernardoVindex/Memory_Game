import { ButtonForm } from "./styles"

export const Button = ({ value, className, setFunction }) => {

  const handlerEvent = () => {
    setFunction(value)
  }

  const handlerEvent2 = () => {
    setConfig(value)
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