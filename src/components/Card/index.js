import { Figure } from './styles'

export const Card = (props) => {

  return (
    <>
      <Figure className={props.id}>
        {props.value}
      </Figure>
    </>
  ) 
}