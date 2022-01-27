import { Button } from "../Button"

export const Settings = () => {
  const update = () => {
    setPairs(value)
  }

  return (
    <>
      <Button
        value='8'
        onClick={update}
      >
        8 Pares
      </Button>
      <Button
        value='14'
        onClick={update}
      >
        14 Pares
      </Button>
      <Button
        value='20'
        onClick={update}
      >
        20 Pares
      </Button>
      <Button
        value='20'
        onClick={update}
      >
        26 Paress
      </Button>
    </>
  )
}