import { Figure } from './styles'

export const Card = (props) => {
  
  console.log({props})

  const hanlderFlip = () => {
    props.handlerTurn(props.cardID)
    
    
    // props.setCards( prevState => ({
    //   ...prevState,
    //   [props.fliped] : true
    // }))
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
