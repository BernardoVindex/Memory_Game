import { Figure } from './styles'

export const Card = ({ 
  cardID,
  value,
  fliped,
  matched,
  changeCardsValues,
  changePlayerValues,
}) => {

  const hanlderFlip = () => {
    changeCardsValues(cardID, fliped)
    changePlayerValues('onMatch','moves', 1)
  }

  return (
    <>
      <Figure     
        className={value}
        onClick={hanlderFlip} 
        fliped={fliped}
        matched={matched}
        disabled={matched}
      >
        {value}
      </Figure>
    </>
  ) 
}