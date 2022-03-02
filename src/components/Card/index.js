import { Figure } from './styles'

export const Card = ({ cardID, value, fliped, matched, dispatch, playersDispatch }) => {

  const hanlderFlip = () => {  
    if (!matched) {
      dispatch({
        type: 'flip',
        ID: cardID,
        fliped: fliped
      })
      playersDispatch({ 
        type: 'onMove', 
        playerStatus: 'onMatch'
      })
    }
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