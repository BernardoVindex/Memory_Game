import { Figure } from './styles'

export const CardWithReducer = ({ cardID, value, fliped, matched, dispatch }) => {

  const hanlderFlip = () => {
    dispatch({
      
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