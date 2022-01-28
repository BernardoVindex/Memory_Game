import { Figure } from './styles'

export const Card = (props) => {
  console.log({ props })
  return (
    <>
      <Figure>
        {props.value}
      </Figure>
    </>
  ) 
}