import { Figure } from './styles'

const onFlip = (event) => {
  console.log(event)
}

export const Card = (props) => {
  return (
    <>
      <Figure 
        className={props.id}
        onClick={onFlip}
      >
        {props.value}
      </Figure>
    </>
  ) 
}