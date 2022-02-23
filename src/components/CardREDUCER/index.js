import { Figure } from './styles'

export const CardWithReducer = ({ cardID, value, fliped, matched, dispatch }) => {

  const hanlderFlip = () => {  
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