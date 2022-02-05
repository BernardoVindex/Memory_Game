import { Figure } from './styles'
import { useAppContext } from '../../useAppContext'

export const Card = (props) => {
  
  const  {
    turn,
    setTurn,
  } = useAppContext()
  
  const hanlderTurn = () => {
    
    (turn.length !== 1)
      ? setTurn(props.value)
      : setTurn( prevState => prevState + props.value) 

    console.log(turn)

    // setConfigGame( prevState => ({
    //   ...prevState,
    //   [typeState] : value
    // }))
  }

  return (
    <>
      <Figure 
        className={props.id}
        onClick={hanlderTurn}
      >
        {props.value}
      </Figure>
    </>
  ) 
}

// Base function

// const fisrtFinct = (a) => {
//   console.log(a)
//   secondFunct(a)
// }

// const secondFunct = (a, b = 2) => {
//   console.log(a + b)
// }

// fisrtFinct(5)