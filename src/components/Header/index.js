import { Header } from "./styles"

export const HeaderApp = ({children}) => {
  return (
    <>
      <Header>
        {children}
      </Header>
    </>
  )
}