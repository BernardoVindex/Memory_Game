import { Figure } from './styles'

export const Card = ({ value, fliped, matched, setCards }) => {
    


  
  return (
    <>
      <Figure 
        className={value}
        // onClick={hanlderFlip}
      >
        {value}
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