import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./context/CartContext"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
