import { Figure } from './styles'

export const Card = ({ cardID, value, fliped, matched, deckDispatch }) => {

  const hanlderFlip = () => {  
    deckDispatch({
      type: 'flip',
      ID: cardID,
      fliped: fliped
    })
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