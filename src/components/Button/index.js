import { ButtonForm } from "./styles"
export const Button = (props) => {
  // console.log(props)

  


  return (
    <ButtonForm
      // onClick={hanlderConfig}
    >
      {props.buttonName || props.value}
    </ButtonForm>
  )
} 