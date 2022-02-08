import { ButtonForm } from "./styles"

export const Button = ({ className, value, typeState, setFunction  }) => {
  
  const hanlderConfig = () => {
    setFunction( prevState => ({
      ...prevState,
      [typeState] : value
    }))
  }

  const handlerCards = () => {
    const sortedDeck = [] 
    for (let i = value; i > 0; i--){
        sortedDeck.push({value:i, fliped: false, matched:false})
    }

    const playebleDeck = [...sortedDeck,...sortedDeck]
    playebleDeck.sort(() => Math.random() - 0.5)

    setCards(playebleDeck)
  }

  return (
    <ButtonForm
      className={className}
      onClick={hanlderConfig}
    >
      {className}
    </ButtonForm>
  )
} 