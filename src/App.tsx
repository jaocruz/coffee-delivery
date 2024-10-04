import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <h1>Teste de texto</h1>
    </ThemeProvider>
  )
}