import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/default"

import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CoffeeOrderContextProvider } from "./contexts/orderContext"


export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CoffeeOrderContextProvider>
          <Router/>
        </CoffeeOrderContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}