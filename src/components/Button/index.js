import { ButtonForm } from "./styles"
export const Button = (props) => {
  
  const hanlderPairs = () => {
    props.setFunction(props.value)
  }

  return (
    <ButtonForm
      onClick={hanlderPairs}
    >
      {props.buttonName || props.value}
    </ButtonForm>
  )
} 