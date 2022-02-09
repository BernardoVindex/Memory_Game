import { Figure } from './styles'

export const Card = (props) => {

  //console.log({props})

  const hanlderFlip = () => {
    props.handlerMove(props.cardID, props.fliped)
 }
    
  return (
    <>
      <Figure     
        className={props.value}
        onClick={hanlderFlip} 
        fliped={props.fliped}
      >
        {props.value}
      </Figure>
    </>
  ) 
}
