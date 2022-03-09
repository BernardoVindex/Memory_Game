import { Figure } from './styles'

export const Card = ({ cardID, value, fliped, matched, changeCardsValues }) => {

  // const hanlderFlip = () => {  
  //   if (!matched) {
  //     dispatch({
  //       type: 'flip',
  //       ID: cardID,
  //       fliped: fliped
  //     })
  //     playersDispatch({ 
  //       type: 'onMove', 
  //       playerStatus: 'onMatch'
  //     })
  //   }
  // }
  const hanlderFlip = () => {
    
  }

  return (
    <>
      <Figure     
        className={value}
      //  onClick={hanlderFlip} 
        fliped={fliped}
        matched={matched}
        disabled={matched}
      >
        {value}
      </Figure>
    </>
  ) 
}