import { ButtonForm } from "./styles"
export const Button = ({ buttonName, value, setConfigGame, typeState }) => {
  

  const hanlderConfig = () => {
    console.log({typeState})
    setConfigGame( prevState => ({
      ...prevState,
      [typeState] : value
    }))
  }


  return (
    <ButtonForm
      onClick={hanlderConfig}
    >
      {buttonName || value}
    </ButtonForm>
  )
} 