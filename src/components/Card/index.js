import { Figure } from './styles'

export const Card = (props) => {
  console.log({props})
  return (
    <>
      <Figure className={props.id}>
        {props.value}
      </Figure>
    </>
  ) 
}