import { Figure } from './styles'

export const Card = ({ cardID, value, fliped, matched, changeCardsValues }) => {

  const hanlderFlip = () => {
    changeCardsValues(cardID, fliped)
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