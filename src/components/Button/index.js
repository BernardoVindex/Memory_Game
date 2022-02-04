import { ButtonForm } from "./styles"

export const Button = ({ buttonName, value, setConfigGame, typeState }) => {
  
  const hanlderConfig = () => {
    setConfigGame( prevState => ({
      ...prevState,
      [typeState] : value
    }))
  }

  return (
    <ButtonForm
      buttonName={buttonName}
      onClick={hanlderConfig}
    >
      {buttonName || value}
    </ButtonForm>
  )
} 