import { Figure } from './styles'

export const Card = ({ cardID, value, fliped, matched, dispatch }) => {

  const hanlderFlip = (e) => {  
    console.log(e)
    
    dispatch({
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