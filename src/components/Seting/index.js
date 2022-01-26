import { Button } from "../Button"
export const Settings = () => {
  return (
    <>
      <Button
        onClick={() => setPairs(8)}
      >
        8 Paress
      </Button>
      <Button
        onClick={() => setPairs(14)}
      >
        14 Paress
      </Button>
      <Button
        onClick={() => setPairs(20)}
      >
        20 Paress
      </Button>
      <Button
        onClick={() => setPairs(26)}
      >
        26 Paress
      </Button>
    </>
  )
}